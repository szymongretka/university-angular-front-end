import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {University} from "./model/university";
import {ApiService} from "../service/api.service";

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.css']
})
export class UniversitiesComponent implements OnInit {

  universities: University[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllUniversities();
  }

  getAllUniversities(){
    this.apiService.getAllUniversities().subscribe( //till we dont subscribe nothing happens
      res => {
        this.universities = res;
      },
      err => {
        alert("An error has occurred");
      }
    );
  }

  createUniversity() {
    let newUniversity: University = {
      name: 'New university',
      id: null,
      numberOfStudents: 0
    }

    this.apiService.postUniversity(newUniversity).subscribe(
      res => {
        newUniversity.id = res.id, //grab new id from the server
          this.universities.push(newUniversity);
      },
      err => {alert("Error: can't save the university");}
    );


  }

  updateUniversity(updatedNniversity: University) {
    this.apiService.postUniversity(updatedNniversity).subscribe( //TODO
      res => {

      },
      err => {alert("Error: can't save the university");}
    );
  }

  deleteUniversity(university: University) {
    if(confirm("Are you sure?")) {
      this.apiService.deleteUniversity(university.id).subscribe(
        res => {
          let indexOfUniversity = this.universities.indexOf(university);
          this.universities.splice(indexOfUniversity, 1); //deletes the element
        },
        err => {
          alert("Error: can't delete the university");
        }
      );
    }
  }



}
