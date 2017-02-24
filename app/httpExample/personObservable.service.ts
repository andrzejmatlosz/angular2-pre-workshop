import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPerson } from './person.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonObservableService {
    private personsUrl = 'data/persons.json';  // URL to web API
  
    constructor (private http: Http) {}
  
    getPersons (): Observable<IPerson[]> {
        return this.http.get(this.personsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        let errMsg = error.message ? error.message : error.toString();
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
}