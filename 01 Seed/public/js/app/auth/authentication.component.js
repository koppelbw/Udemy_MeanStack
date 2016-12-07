import { Component } from "@angular/core";
export var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-authentication',
                    template: "\n        <header class= \"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">Signup</a></li>\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['signin']\">Signin</a></li>\n                    <li routerLinkActive=\"active\"><a [routerLink]=\"['logout']\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                },] },
    ];
    /** @nocollapse */
    AuthenticationComponent.ctorParameters = [];
    return AuthenticationComponent;
}());
//# sourceMappingURL=authentication.component.js.map