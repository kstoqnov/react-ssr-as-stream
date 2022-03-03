import { pipeToNodeWritable as reactPipeToNodeWritable } from "react-dom/server";
const { Writable, Readable } = require("stream");

// Writable has a destroy but not an end, react calls end
class WritableWithEnd extends Writable {
  constructor(chunks) {
    super();

    this.chunks = chunks;
  }
  _write(chunk, enc, callback) {
    this.chunks.push(chunk);
    callback();
  }

  end() {
    this.emit("end");
    this.destroy();
  }
}

class ReactReadableStream extends Readable {
  constructor(element, options = {}) {
    super();
    const _self = this;
    this.isReactDone = false;
    this.chunks = [];
    const writable = new WritableWithEnd(this.chunks);
    writable.on("end", () => {
      this.isReactDone = true;

      if (this.chunks.length) {
        this.push("");
      } else {
        this.destroy();
      }
    });
    const { startWriting, abort } = reactPipeToNodeWritable(
      element,
      writable,
      Object.assign({}, options, {
        onReadyToStream() {
          _self.emit("open");
        },
        onCompleteAll() {
          _self.emit("ready");
        },
        onError(e) {
          _self.destroy(e);
        }
      })
    );
    this._startWriting = startWriting;
    this._abort = abort;
  }
  _read(size) {
    if (!this.chunks.length && this.isReactDone) {
      this.push(null);
      return;
    }
    if (this.chunks.length) {
      this.push(this.chunks.shift());
    }
  }
  abort() {
    this._abort();
    this.destroy();
  }
  startWriting() {
    this._startWriting();
    this.push("");
  }
}

export function pipeToNodeWritable(element, options) {
  return new ReactReadableStream(element, options);
}
