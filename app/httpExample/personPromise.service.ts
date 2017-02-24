import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPerson } from './person.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PersonPromiseService {
    private personsUrl = 'data/persons.json';  // URL to web API
  
    constructor (private http: Http) {}
  
    getPersons (): Promise<IPerson[]> {
        return this.http.get(this.personsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        let errMsg = error.message ? error.message : error.toString();
        console.log(errMsg);
        return Promise.reject(errMsg);
    }
}