import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from "@angular/common";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FetchService } from './fetch.service';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { Location, RequestAlertPayer, ResponseShowNotifications } from './models/models';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatCardModule,
     MatButtonModule,
      CommonModule,
       MatInputModule,
       FormsModule,
       MatTableModule,
       ReactiveFormsModule,MatDividerModule,
       MatListModule,
       NgxJsonViewerModule
      ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  userForm: FormGroup;
  notificationsForm: FormGroup;
  responseAlertPayer: any = {  };
  responseNotificationPayer: ResponseShowNotifications[] = [];


  constructor(private formBuilder: FormBuilder,private fetchService: FetchService) { 
    this.userForm = this.formBuilder.group({
      email: ['danslans77@gmail.com', [Validators.required, Validators.email]],
      latitude: ['', [Validators.required, ]],
      longitude: ['', [Validators.required, ]]
    });

    this.notificationsForm = this.formBuilder.group({
      email: ['danslans77@gmail.com', [Validators.required, Validators.email]],
    });
  }


  onSubmitAlert() {
    if (this.userForm.invalid) {
      return;
    }

    console.log(this.userForm.value);

    const location: Location={
      latitude: this.userForm.value.latitude,
      longitude: this.userForm.value.longitude
    }
    const request:RequestAlertPayer ={
      email: this.userForm.value.email,
      location: location
    } 

    this.fetchService.postAlertBuyer(request).then(data => {
      this.responseAlertPayer = data;
    })

  }

  onSubmitNotification() {
    if (this.notificationsForm.invalid) {
      return;
    }
    this.fetchService.getNotifications(this.notificationsForm.value.email).then(data => {
      this.responseNotificationPayer = data;
    })
  }
}
