import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class Globals {

    public apiRoot = 'http://azomva.com/rest';
    public token: string;
    public user_id: String;
    public UserJson: JSON;
    public loading: any;

    constructor(private router: Router, public http: Http, private activatedRoute: ActivatedRoute) {
        this.token = localStorage.getItem('token');
        this.user_id = localStorage.getItem('user_id');
    }

    public SignOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        this.router.navigate(['/login']);
    }
    /*public post(p_resource, p_formData): any {
        return this.http.post(this.apiRoot + p_resource, p_formData).
        .subscribe(data => {
            return data.json();
        });
}*/

    public MyPost(p_resource, p_formData, p_withAuthHeder = false) {
        try {
            const hheader = new Headers();
            hheader.append('Authorization', this.token);
            if (p_withAuthHeder = true) {
                return this.http
                    .post(this.apiRoot + p_resource, p_formData, { headers: hheader });
            } else {
                return this.http
                    .post(this.apiRoot + p_resource, p_formData);
            }

        } catch (error) {
            this.handleError(error);
        }
    }

    public MyGet(p_resource) {
        console.log(p_resource);
        try {
            const roptions = new RequestOptions();
            // roptions.headers.append('Authorization', this.token);
            return this.http
                .get(this.apiRoot + p_resource, roptions);
        } catch (error) {
            this.handleError(error);
        }
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

