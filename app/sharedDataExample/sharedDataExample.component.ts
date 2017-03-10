import { Component, OnDestroy } from '@angular/core';
import { SharedDataService } from './../shared/sharedData.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'my-shared-data-example',
    templateUrl: 'app/sharedDataExample/sharedDataExample.component.html'
})
export class SharedDataExampleComponent implements OnDestroy {
    sharedData: Array<string> = [];
    subscription: Subscription;

    constructor(private sharedDataService: SharedDataService) {
        this.subscription = sharedDataService.getSharedData().subscribe((newData) => {
            this.sharedData.push(newData);
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}