import { UserService } from '../shared/user.service';
import { NgModule } from '@angular/core';
import { TitleComponent } from './title.component'; 

@NgModule({
    declarations: [ TitleComponent ],
    exports: [ TitleComponent ],
    providers: [ UserService ]
})
export class TitleModule { }