import { Component, OnInit } from '@angular/core';
import { IPerson } from './person.model';
import { PersonObservableService } from './personObservable.service';
import { Observable } from 'rxjs/Observable';
import { PersonPromiseService } from './personPromise.service';

@Component({
    selector: 'my-http-example',
    templateUrl: 'app/httpExample/httpExample.component.html',
    styleUrls: [ 'app/httpExample/httpExample.component.css' ]
})
export class HttpExampleComponent implements OnInit {
    public persons: Array<IPerson>;
    public personsObservable: Observable<IPerson[]>;
    public personsPromise: Array<IPerson>;
    public errorMessage: string;

    constructor (
        private personObservableService: PersonObservableService,
        private personPromiseService: PersonPromiseService
    ) {

    }

    ngOnInit () { 
        this.getPersons();
        this.getPersonsObservable();
        this.getPersonsPromise();
    }
    
    getPersons () {
        this.personObservableService.getPersons()
            .subscribe(
                persons => this.persons = persons,
                error =>  this.errorMessage = <any>error
            );
    }

    getPersonsObservable () {
        this.personsObservable = this.personObservableService.getPersons();
    }

    getPersonsPromise () {
        this.personPromiseService.getPersons()
            .then(
                persons => this.personsPromise = persons,
                error =>  this.errorMessage = <any>error
            );
    }
}
