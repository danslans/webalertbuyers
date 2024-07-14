import { Injectable } from '@angular/core';
import { RequestAlertPayer, ResponseAlertPayer, ResponseShowNotifications } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private URL_BASE = 'https://alertbuyers-e6f2014622ac.herokuapp.com/';
  private API_ALERT_BUYER = 'alertBuyer';
  private API_NOTIFICATION = 'notifications';

  constructor() { }

  postAlertBuyer(request: RequestAlertPayer):Promise<ResponseAlertPayer>{
    return  fetch(`${this.URL_BASE}${this.API_ALERT_BUYER}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    }).then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    }).then(data => {
      return data;
    })
      .catch(error => {
        console.error(error);
      });
  }

  getNotifications(email:string):Promise<ResponseShowNotifications[]>{
    return  fetch(`${this.URL_BASE}${this.API_NOTIFICATION}?email=${email}`).then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    }).then(data => {
      return data;
    })
      .catch(error => {
        console.error(error);
      });
  }

}
