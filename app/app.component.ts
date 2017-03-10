import { Component, Optional } from '@angular/core';
import { UserService } from './shared/user.service';

@Component({
    selector: 'my-app-change',
    templateUrl: 'app/app.component.html',
    styleUrls: [ 'app/app.component.css' ]
})
export class AppComponent {
    userNameInAppComponent = '';
    selectedView: string = '';

    constructor(private userService: UserService) {
        this.userNameInAppComponent = userService.userName;
    }

    viewChanged(selectedView: string, xyz?: number) {
        this.selectedView = selectedView;
    }
}