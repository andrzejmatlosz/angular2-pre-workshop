import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { DirectiveExampleComponent } from './directiveExample.component';
import { ZoomTextDirective } from './zoomText.directive';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ DirectiveExampleComponent, ZoomTextDirective ],
    exports: [ DirectiveExampleComponent ]
})
export class DirectiveExampleModule { }