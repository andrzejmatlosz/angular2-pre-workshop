import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedDataService } from './../shared/sharedData.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'my-shared-data-example',
    templateUrl: 'app/sharedDataExample/sharedDataExample.component.html'
})
export class SharedDataExampleComponent implements OnDestroy, OnInit {
    sharedData: Array<string> = [];
    subscription: Subscription;

    constructor(private sharedDataService: SharedDataService) {
    }

    ngOnInit() {
        this.subscription = this.sharedDataService.getSharedData()
            .subscribe(this.readData.bind(this));
    }

    readData(newData) {
        this.sharedData.push(newData);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}