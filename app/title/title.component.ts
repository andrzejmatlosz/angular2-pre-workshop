import { UserService } from '../shared/user.service';
import { 
    Component, 
    EventEmitter, 
    Input,
    OnInit, 
    Output
} from '@angular/core';

@Component({
    selector: 'my-title',
    templateUrl: 'app/title/title.component.html',
    styleUrls: [ 'app/title/title.component.css' ]
})
export class TitleComponent implements OnInit {
    public message: string = 'ABC';
    public userName: string;
    
    @Input() public appName: string;
    @Output() public myEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.userName = this.userService.userName;
    }

    sendMessage() {
        this.myEvent.emit('some mesage from title');
    }
}