import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class Globals {

    public apiRoot = 'http://azomva.com/rest';
    public token: String;
    public user_id: String;
    public UserJson: JSON;

    constructor(private router: Router, public http: Http, private activatedRoute: ActivatedRoute) { }

    public SignOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
    }
    public post(p_resource, p_formData): any {
        return this.http.post(this.apiRoot + p_resource, p_formData).subscribe(data => {
            return data.json();
        });
    }

    private handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}

