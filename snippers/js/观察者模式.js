/* observer.js */
class Observer {
    constructor() {
        this._event = {};
    }
    on(eventName, handler) {
        if (this._event[eventName]) {
            this._event[eventName].push(handler);
        } else {
            this._event[eventName] = [handler];
        }
    }

    emit(eventName) {
        var events = this._event[eventName];
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        var that = this;
        if (events) {
            events.forEach(event => {
                event.apply(that, otherArgs);
            });
        }
    }
    off(eventName, handler) {
        var events = this._event[eventName];
        if (events) {
            this._event[eventName] = events.filter(event => {
                return event !== handler;
            });
        }
    }
    once(eventName, handler) {
        var that = this;
        function func() {
            var args = Array.prototype.slice.call(arguments, 0);
            handler.apply(that, args);
            this.off(eventName, func);
        }
        this.on(eventName, func);
    }
}

export default Observer;

// ES6
class Observer {
    constructor() {
        this._event = {};
    }
    on(eventName, handler) {
        if (this._event[eventName]) {
            this._event[eventName].push(handler);
        } else {
            this._event[eventName] = [handler];
        }
    }

    emit(eventName) {
        let events = this._event[eventName];
        let otherArgs = [...arguments].slice(1);
        let self = this;
        if (events) {
            events.forEach(event => {
                event.apply(self, otherArgs);
            });
        }
    }
    off(eventName, handler) {
        let events = this._event[eventName];
        if (events) {
            this._event[eventName] = events.filter(event => {
                return event !== handler;
            });
        }
    }
    once(eventName, handler) {
        let self = this;
        function func() {
            let args = [...arguments];
            handler.apply(self, args);
            this.off(eventName, func);
        }
        this.on(eventName, func);
    }
}
export default Observer;