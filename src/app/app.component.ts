import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `<div class="topbar-logo">
    <a routerLink="/"><img src="../assets/airship-logo.svg" alt=""></a>
    </div>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES],
  styles: [`.topbar-logo {
      padding-top: 4em;
        padding-bottom: 3em;
          margin: auto;
            width: 290px;
}
.topbar-logo img {
      width: 100%;
}
@media (min-width: 768px) {
  .topbar-logo {
          width: 300px;
  }
}
@media (min-width: 1024px) {
  .topbar-logo {
          width: 315px;
  }
}
`]
})
export class AppComponent {
  title = 'AirshipCMS';
}
