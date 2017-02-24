import { Component } from '@angular/core';

@Component({
    selector: 'my-directive-example',
    templateUrl: 'app/directiveExample/directiveExample.component.html',
    styleUrls: [ 'app/directiveExample/directiveExample.component.css' ],
})
export class DirectiveExampleComponent {

    public isZoomEnabled: boolean= false;
}
