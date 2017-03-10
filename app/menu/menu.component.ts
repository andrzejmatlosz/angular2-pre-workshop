import { Component, Output, EventEmitter } from '@angular/core';
import { SharedDataService } from './../shared/sharedData.service';

@Component({
    selector: 'my-menu',
    templateUrl: 'app/menu/menu.component.html',
    styleUrls: [ 'app/menu/menu.component.css' ]
})
export class MenuComponent {
    public selectedView: string;

    @Output() selectedChanged: EventEmitter<string> = 
        new EventEmitter<string>();

    constructor(private sharedDataService: SharedDataService) {
    }

    changeView(selectedView: string) {
        this.selectedView = selectedView;
        this.selectedChanged.emit(this.selectedView);
    }

    addValueToSharedData() {
        this.sharedDataService.addData('Value from menu component');
    }
}