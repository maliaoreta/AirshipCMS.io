import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-aircraft-selection',
  template: `<div class="choose-aircraft">
    <div class="text-container">
        <p class="gray-text">AirshipCMS allows you to host and manage content for projects of any size.</p>
              <p class="gray-text">What kind of projects do you want to build?</p>
              </div>
                <div class="aircraft-container clearfix">
                    <div class="aircraft" [ngClass]="getPaperplaneClass()" (click)="checkAircraft('paperplane')">
                          <div class="graphic-container">
                                  <div class="checkbox"></div>
                                          <div class="checkmark"></div>
                                                  <img src="../../assets/paper-plane-graphic.svg" alt="">
                                                        </div>
                                                              <p class="aircraft-type">Paper Plane</p>
                                                                    <p class="project-goal">I want to build a blog or website with a few pages</p>
                                                                        </div>
                                                                            <div class="aircraft" [ngClass]="getAirshipClass()" (click)="checkAircraft('airship')">
                                                                                  <div class="graphic-container">
                                                                                          <div class="checkbox"></div>
                                                                                                  <div class="checkmark"></div>
                                                                                                          <img src="../../assets/airship-graphic.svg" alt="">
                                                                                                                </div>
                                                                                                                      <p class="aircraft-type">Airship</p>
                                                                                                                            <p class="project-goal">I want to build a large website with many pages, collections, or products</p>
                                                                                                                                </div>
                                                                                                                                    <div class="aircraft" [ngClass]="getSpaceshipClass()" (click)="checkAircraft('spaceship')">
                                                                                                                                          <div class="graphic-container">
                                                                                                                                                  <div class="checkbox"></div>
                                                                                                                                                          <div class="checkmark"></div>
                                                                                                                                                                  <img src="../../assets/spaceship-graphic.svg" alt="">
                                                                                                                                                                        </div>
                                                                                                                                                                              <p class="aircraft-type">Spaceship</p>
                                                                                                                                                                                    <p class="project-goal">I want to use Airship as a CMS for my custom web application.</p>
                                                                                                                                                                                          </div>
                                                                                                                                                                                          </div>
                                                                                                                                                                                            <div class="button-container">
                                                                                                                                                                                                <a routerLink="/thank-you"><button [ngClass]="enableSubmit()" [disabled]="!(paperplaneCicked === true || airshipClicked === true || spaceshipClicked === true)">Submit</button></a>
                                                                                                                                                                                                  </div>
                                                                                                                                                                                                    <div class="link-container">
                                                                                                                                                                                                        <a class="skip-link" routerLink="/thank-you">Skip</a>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                          `,
  directives: [ROUTER_DIRECTIVES],
  styles: [`
    .choose-aircraft {
      height: 60em;
        margin: auto;
          margin-bottom: 5em;
            background-color: white;
              border-radius: 2px;
                width: 80%;
    }
    @media (min-width: 768px) {
      .choose-aircraft {
              height: 29.5em;
                    margin-bottom: 0;
                          width: 72%;
      }
    }
    @media (min-width: 1024px) {
      .choose-aircraft {
              width: 55%;
      }
    }

    .text-container {
        padding-top: 3.5em;
          padding-bottom: 1em;
    }
    @media (min-width: 768px) {
      .text-container {
              padding-bottom: 2em;
      }
    }

    .gray-text {
        color: #959BA5;
          font-family: "Roboto";
            font-size: 0.8em;
              text-align: center;
                margin: auto;
                  width: 71%;
                    padding-bottom: 2em;
    }
    @media (min-width: 768px) {
      .gray-text {
              width: 50%;
                    padding-bottom: 0.5em;
      }
    }

    .aircraft-container {
        width: 100%;
          height: 39.5em;
    }
    @media (min-width: 768px) {
      .aircraft-container {
              height: 12em;
      }
    }

    .aircraft {
        border: 1px solid #c1c4ca;
          border-radius: 2px;
            height: 11.5em;
              text-align: center;
                width: 80%;
                  margin: auto;
                    margin-bottom: 2em;
    }
    .aircraft img {
          padding-top: 1.5em;
    }
    .aircraft p {
          font-family: "Roboto";
    }
    @media (min-width: 768px) {
      .aircraft {
              width: 26.3%;
                    float: left;
                          margin-bottom: 0;
      }
      .aircraft:nth-of-type(1) {
                margin-left: 8%;
                        margin-right: 2%;
      }
      .aircraft:nth-of-type(1) img {
                  padding-top: 2.3em;
      }
      .aircraft:nth-of-type(3) {
                margin-left: 2%;
                        margin-right: 8%;
      }
      .aircraft:nth-of-type(3) img {
                  padding-top: 2em;
      }
    }

    .aircraft.clicked {
        box-shadow: 0px 1px 3px 0px #a3a8b1;
          border: none;
    }
    .aircraft.clicked .checkmark {
          border-left: 4px solid #FF9F00;
              border-bottom: 4px solid #FF9F00;
    }

    .graphic-container {
        height: 4.5em;
          margin-bottom: 1.3em;
            position: relative;
    }

    .checkbox {
        position: absolute;
          top: 15px;
            right: 15px;
              width: 1.5em;
                height: 1.5em;
                  border: 1px solid #d6dae1;
                    border-radius: 2px;
                      box-shadow: 0px 1px 2px 0px #DCDFE5 inset;
    }

    .checkmark {
        position: absolute;
          top: 21px;
            right: 18px;
              height: 0.4em;
                width: 1em;
                  border-left: 4px solid #F3F5F9;
                    border-bottom: 4px solid #F3F5F9;
                      transform: rotate(-51deg);
    }

    .aircraft-type {
        color: #2E3239;
          font-size: 0.95em;
            opacity: 0.75;
              margin: 0;
    }

    .project-goal {
        color: #2E3239;
          opacity: 0.6;
            font-size: 0.7em;
              padding: 1em;
                width: 80%;
                  margin: auto;
    }

    .button-container {
        width: 84%;
          margin: auto;
            text-align: center;
              padding-top: 2em;
    }
    .button-container button {
          width: 52%;
              border: none;
                  border-radius: 2px;
                      height: 4.5em;
                          background-color: #7C8390;
                              box-shadow: 1px 1px 2px #e8e9eb;
                                  color: #c7cacf;
                                      font-family: "Montserrat";
                                          font-size: 0.7em;
                                              text-transform: uppercase;
                                                  letter-spacing: 2px;
    }
    .button-container button.enabled:hover {
          opacity: 0.9;
              cursor: pointer;
    }

    .link-container {
        width: 20%;
          margin: auto;
            text-align: center;
              padding-top: 0.5em;
    }
    .link-container a {
          text-decoration: none;
              color: #7C8390;
                  opacity: 0.9;
                      font-family: "Roboto";
                          font-size: 0.8em;
    }
    .link-container a:hover {
            opacity: 0.7;
    }
    `]
})
export class AircraftSelectionComponent implements OnInit {
  public paperplaneClicked = false;
  public airshipClicked = false;
  public spaceshipClicked = false;

  constructor() {}

  ngOnInit() {
  }

  checkAircraft(aircraft) {
    switch(aircraft) {
      case 'paperplane':
        this.paperplaneClicked = !this.paperplaneClicked;
        this.airshipClicked = false;
        this.spaceshipClicked= false;
        break;
      case 'airship':
        this.airshipClicked = !this.airshipClicked;
        this.paperplaneClicked = false;
        this.spaceshipClicked= false;
        break;
      case 'spaceship':
        this.spaceshipClicked = !this.spaceshipClicked;
        this.paperplaneClicked = false;
        this.airshipClicked = false;
        break;
    }
  }

  getPaperplaneClass() {
    if (this.paperplaneClicked) {
      return 'clicked';
    }
    else {
      return '';
    }
  }

  getAirshipClass() {
    if (this.airshipClicked) {
      return 'clicked';
    }
    else {
      return '';
    }
  }

  getSpaceshipClass() {
    if (this.spaceshipClicked) {
      return 'clicked';
    }
    else {
      return '';
    }
  }

  enableSubmit() {
    if (this.spaceshipClicked === true || this.paperplaneClicked === true || this.airshipClicked === true) {
      return 'enabled';
    }
    else {
      return '';
    }
  }

}
