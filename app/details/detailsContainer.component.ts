import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-details',
    templateUrl: 'app/details/detailsContainer.component.html'
})
export class DetailsContainerComponent {

    @Input() userName: string;

}