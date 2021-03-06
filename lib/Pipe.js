"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pipe = void 0;
class Pipe {
    constructor(_func = null, _action = null) {
        this.isAsync = false;
        this.func = null;
        this.action = null;
        if (_func !== null) {
            this.func = _func;
        }
        else if (_action !== null) {
            this.action = _action;
        }
        else {
            throw new Error('Invalid Pipe arguments');
        }
    }
    get autoContinue() {
        return this.action !== null;
    }
}
exports.Pipe = Pipe;
//# sourceMappingURL=Pipe.js.map