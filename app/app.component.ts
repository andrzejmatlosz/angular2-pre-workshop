import { Component } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
    selector: 'my-app-change',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
    public messageFormTitle: string;
    public appNameFromAppComponent: string = 'SUPER APP';
    public someCondition: boolean = false;

    constructor( /*private userService: UserService*/ ) {
    }

    someMethod(param: string) {
        this.messageFormTitle = param;
    }
}