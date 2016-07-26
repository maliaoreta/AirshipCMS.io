import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'AirshipCMS';
}
