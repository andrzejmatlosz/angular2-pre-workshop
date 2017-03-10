import { Component } from '@angular/core';

@Component({
    selector: 'my-details-author',
    templateUrl: 'app/details/detailsAuthor/detailsAuthor.component.html'
})
export class DetailsAuthorComponent {
    public author: string = 'Andrzej';

    public smth() {
        return "abc";
    }
}