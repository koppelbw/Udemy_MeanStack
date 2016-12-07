import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var SigninComponent = (function () {
    function SigninComponent() {
    }
    SigninComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-signin",
                    templateUrl: './signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = [];
    return SigninComponent;
}());
//# sourceMappingURL=signin.component.js.map