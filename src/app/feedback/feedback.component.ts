import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {post} from "selenium-webdriver/http";

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  sendFeedback(): void{
    let url = "http://localhost:8080/feedback";
    this.http.post(url, this.model).subscribe(
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
