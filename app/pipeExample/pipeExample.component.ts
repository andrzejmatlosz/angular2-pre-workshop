import { Component } from '@angular/core';

@Component({
    selector: 'my-pipe-example',
    templateUrl: 'app/pipeExample/pipeExample.component.html',
    styleUrls: [ 'app/pipeExample/pipeExample.component.css' ]
})
export class PipeExampleComponent {
    public sampleDate: Date = new Date();
    public dynamicFormat: string;
    public usedFormat: string;
    public someText: string = "Some Text";

    useDynamicFormat() {
        this.usedFormat = this.dynamicFormat;
    }
}
