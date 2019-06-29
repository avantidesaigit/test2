import { Component } from '@angular/core';
import { UndeliverableListComponent } from './sparkpost/undeliverable-list.component'; 
@Component({
  selector: 'mpadmin-app',
  template: '<undeliverable-list></undeliverable-list>'
 // templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})

export class MPAdminAppComponent {
  title = 'MP Admin';
}
