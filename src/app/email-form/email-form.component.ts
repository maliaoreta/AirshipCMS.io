import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators } from '@angular/forms';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FormValidationsService } from '../form-validations.service';

@Component({
  moduleId: module.id,
  selector: 'app-email-form',
  template: `<div class="signup-form">
    <p class="header-text">Sign up to be a <span>beta test pilot</span> in Fall 2016!</p>
      <div class="form-container">
          <form [formGroup]="emailForm">
                <fieldset>
                        <input id="email" name="email" formControlName="email" (focus)="checkingEmail=false && invalidEmail=true" (keydown)="validateEmail($event)" (blur)="validateEmail(null)" type="text" autocomplete="off" required />
                                <label for="email">Enter your email</label>
                                        </fieldset>
                                            <p class="error" *ngIf="emailForm.controls.email.dirty && checkingEmail===true && invalidEmail===true">Please enter a valid email</p>
                                                  <div class="submit-container">
                                                          <a *ngIf="!emailForm.controls.email.errors" routerLink="/choose-your-aircraft">
                                                                    <button class="submit-email-button valid-submit" type="submit">Sign up to be a test-pilot</button>
                                                                            </a>
                                                                                    <button class="submit-email-button" *ngIf="emailForm.controls.email.errors" [disabled]="emailForm.controls.email.errors" type="submit">Sign up to be a test-pilot</button>
                                                                                          </div>
                                                                                              </form>
                                                                                                </div>
                                                                                                  <p class="gray-text">We will only contact you with information about AirshipCMS and we never share it with anyone.</p>
                                                                                                  </div>
                                                                                                  `,
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  styles: [`
    .signup-form {
      margin: auto;
        padding: 1em;
          background-color: white;
            border-radius: 2px;
              width: 75%;
                height: 19em;
    }
    @media (min-width: 768px) {
      .signup-form {
              height: 18.5em;
                    width: 58%;
      }
    }
    @media (min-width: 1024px) {
      .signup-form {
              height: 19.5em;
                    width: 40%;
      }
    }

    .header-text {
        font-family: "Roboto";
          text-align: center;
            color: #2E3239;
              opacity: 0.75;
                width: 63%;
                  margin: auto;
                    font-size: 1em;
                      padding: 1.5em;
                        padding-bottom: 2.2em;
    }
    .header-text span {
          font-weight: bold;
    }
    @media (min-width: 768px) {
      .header-text {
              font-size: 1.1em;
                    padding: 2em;
                          padding-bottom: 1.8em;
      }
    }
    @media (min-width: 1024px) {
      .header-text {
              padding: 2.2em;
                    padding-bottom: 2em;
      }
    }

    .gray-text {
        font-family: "Roboto";
          font-size: 0.8em;
            text-align: center;
              color: #959BA5;
                margin: auto;
                  width: 71%;
    }
    @media (min-width: 768px) {
      .gray-text {
              width: 65%;
      }
    }

    fieldset {
        width: 73%;
          margin: auto;
            padding: 0;
              border: 0;
                cursor: text;
    }

    input {
        cursor: text;
          display: block;
            width: 96%;
              margin: auto;
                height: 2em;
                  padding: 8px 8px;
                    border: 0;
                      border-radius: 2px;
                        font-size: 16px;
                          font-weight: 400;
                            line-height: 1;
                              background: #F3F5F9;
                                color: #212121;
                                  outline: 0;
                                    appearance: none;
                                      transition: all 0.2s ease-in-out;
    }

    .form-container fieldset {
        position: relative;
    }
    .form-container fieldset:last-child input {
          border-radius: 0 0 4px 4px;
              box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
    }
    .form-container fieldset + fieldset {
          border-top: 1px solid #ddd;
    }

    .form-container label {
        cursor: text;
          font-family: "Roboto";
            position: absolute;
              top: 15px;
                left: 20px;
                  color: #959BA5;
                    transform: translate3d(0, 0, 0);
                      transition: all 0.2s ease-in-out;
    }

    .form-container input:valid, .form-container input:focus {
        border-bottom: 1px solid black;
          outline: 0;
            background: #FFFCD8;
    }

    .form-container input:valid + label,
    .form-container input:focus + label {
        font-size: 13px;
          transform: translate3d(-20px, -35px, 0);
    }

    .error {
        width: 72%;
          margin: auto;
            font-size: 0.9em;
              color: #FF9F00;
                padding-top: 0.5em;
    }

    a {
        outline: none;
    }

    .submit-container {
        width: 73%;
          margin: auto;
            padding: 0.8em;
              padding-top: 1em;
    }

    .submit-email-button {
        border: none;
          border-radius: 2px;
            width: 100%;
              height: 3.5em;
                background-color: #7C8390;
                  padding: 0;
                    font-family: "Montserrat";
                      color: #c7cacf;
                        text-transform: uppercase;
                          letter-spacing: 1px;
                            box-shadow: 1px 1px 2px #e8e9eb;
                              outline: none;
    }

    .submit-email-button.valid-submit:hover {
        opacity: 0.9;
    }
    `]
})
export class EmailFormComponent implements OnInit {
  public emailForm: FormGroup
  public invalidEmail = true;
  public checkingEmail = false;

  constructor(private formBuilder: FormBuilder) {}

  validateEmail(event) {
    if (event === null || event.keyIdentifier === 'Enter') {
      this.checkingEmail = true;

      (this.emailForm.controls['email'].errors && this.emailForm.controls['email'].errors['validateEmailFormat']) ?
        null :
        this.invalidEmail = false;
    }
    else if (event.keyIdentifier !== 'Enter') {
      this.checkingEmail = false;
      this.invalidEmail = true;
    }
  }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, FormValidationsService.validateEmailFormat])]
    })

  }
}
