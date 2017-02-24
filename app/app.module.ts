
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { UserService } from './shared/user.service';
import { SharedDataService } from './shared/sharedData.service';

import { TitleModule } from './title/title.module';
import { MenuModule } from './menu/menu.module';
import { DetailsModule } from './details/details.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedDataExampleModule } from './sharedDataExample/sharedDataExample.module';
import { ViewChildExampleModel } from './viewChildExample/viewChildExample.module';
import { PipeExampleModule } from './pipeExample/pipeExample.module';
import { DirectiveExampleModule } from './directiveExample/directiveExample.module';
import { HttpExampleModule } from './httpExample/httpExample.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        TitleModule,
        MenuModule,
        DetailsModule,
        DashboardModule,
        SharedDataExampleModule,
        ViewChildExampleModel,
        PipeExampleModule,
        DirectiveExampleModule,
        HttpExampleModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ SharedDataService ]
})
export class AppModule { }