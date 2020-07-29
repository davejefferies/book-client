import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertService } from '../_services';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  constructor(  private alertService: AlertService, private http: HttpClient  ) { }

	get(endpoint: string, data: any = {}) {
	  return new Promise((resolve, reject) => {
		  this.http.get(`${environment.api}/api/v${environment.api_version}/${endpoint}`, {params: data})
			.toPromise()
			.then((response: any) => {
				return resolve(response);
			}).catch((error: HttpErrorResponse) => {
				return reject(error);
			});
		});
	}
}
