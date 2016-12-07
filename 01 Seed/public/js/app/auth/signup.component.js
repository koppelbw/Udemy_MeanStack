import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
export var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-signup",
                    templateUrl: './signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = [];
    return SignupComponent;
}());
//# sourceMappingURL=signup.component.js.map