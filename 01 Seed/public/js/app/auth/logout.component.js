import { Component } from "@angular/core";
export var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.onLogout = function () {
    };
    LogoutComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-logout",
                    template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n            <button class=\"btn btn-danger\" (click)=\"onLogout()\">Logout</button>\n        </div>  \n    "
                },] },
    ];
    /** @nocollapse */
    LogoutComponent.ctorParameters = [];
    return LogoutComponent;
}());
//# sourceMappingURL=logout.component.js.map