import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
import { HttpExampleComponent } from './httpExample.component';
import { PersonObservableService } from './personObservable.service';
import { PersonPromiseService } from './personPromise.service';

@NgModule({
    imports: [ HttpModule, CommonModule ],
    declarations: [ HttpExampleComponent ],
    exports: [ HttpExampleComponent ],
    providers: [ PersonObservableService, PersonPromiseService ]
})
export class HttpExampleModule { }