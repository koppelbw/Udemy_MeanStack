import { Message } from "./message.model";
import { Http, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/Rx';
export var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.messages = [];
        this.messageIsEdit = new EventEmitter();
    }
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://angular2nodjs-udemy.herokuapp.com/message', body, { headers: headers })
            .map(function (response) {
            var result = response.json();
            var message = new Message(result.obj.content, 'Dummy', result.obj._id, null);
            _this.messages.push(message);
            return message;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get('http://angular2nodjs-udemy.herokuapp.com/message')
            .map(function (response) {
            var messages = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                transformedMessages.push(new Message(message.content, 'Dummy', message._id, null));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    MessageService.prototype.updateMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.patch('http://angular2nodjs-udemy.herokuapp.com/message' + message.messageId, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    MessageService.prototype.deleteMessage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://angular2nodjs-udemy.herokuapp.com/message' + message.messageId)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    MessageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MessageService.ctorParameters = [
        { type: Http, },
    ];
    return MessageService;
}());
//# sourceMappingURL=message.service.js.map