import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { PipeExampleComponent } from './pipeExample.component';
import { FancyLettersPipe } from './fancy-letters.pipe';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ PipeExampleComponent, FancyLettersPipe ],
    exports: [ PipeExampleComponent ]
})
export class PipeExampleModule { }