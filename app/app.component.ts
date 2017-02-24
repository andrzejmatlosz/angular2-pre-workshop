import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
    selector: 'my-app-change',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
    constructor( /*private userService: UserService*/ ) {
    }
}