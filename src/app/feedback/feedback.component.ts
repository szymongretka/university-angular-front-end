import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {post} from "selenium-webdriver/http";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  model:FeedbackViewModel = { //initialize first model
    name:'',
    email:'',
    feedback:''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  sendFeedback(): void{
    this.apiService.postFeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert("An error has occurred");
      }
    );
  }

}

export interface FeedbackViewModel { //replicate server object
  name:string;
  email:string;
  feedback:string;
}
