import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-thank-you',
  template: `<div class="thank-you-container">
    <p class="gray-text">We are excited to invite you aboard!</p>
      <p class="header-text">Be ready to answer the<br>call for <span>test pilots</span> in Fall 2016.</p>
          <p class="gray-text">Check out some<br>sites that are already using AirshipCMS</p>
        </div>
        `,
        styles: [`
          .thank-you-container {
            margin: auto;
              padding: 1em;
                padding-top: 3.5em;
                  background-color: white;
                    border-radius: 2px;
                      width: 75%;
                        height: 12em;
          }
          .thank-you-container p {
                font-family: "Roboto";
                    margin: auto;
                        text-align: center;
          }
          .thank-you-container p:nth-of-type(3) {
                  width: 85%;
                        height: 13em;
                              line-height: 1.5em;
          }
          @media (min-width: 1024px) {
            .thank-you-container p:nth-of-type(3) {
                        width: 60%;
            }
          }
          @media (min-width: 768px) {
            .thank-you-container {
                    width: 60%;
                          padding: 2em;
                                padding-top: 3.5em;
            }
          }
          @media (min-width: 1024px) {
            .thank-you-container {
                    width: 40%;
                          padding: 4.5em 0 2em 0;
            }
          }

          .gray-text {
              width: 80%;
                color: #959BA5;
                  font-size: 0.8em;
          }
          @media (min-width: 1024px) {
            .gray-text {
                    width: 50%;
            }
          }

          .header-text {
              width: 91%;
                font-size: 1.1em;
                  line-height: 1.4em;
                    color: #2E3239;
                      opacity: 0.75;
                        padding: 1.5em 0;
          }
          .header-text span {
                font-weight: bold;
          }
          @media (min-width: 1024px) {
            .header-text {
                    width: 60%;
            }
          }
          `]
})
export class ThankYouComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
