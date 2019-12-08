import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  airports = [];

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get("http://192.168.43.162:8081/api/showAirport").subscribe(
      data => {
        this.airports = data as String[];   
        console.log(this.airports);
      },
      (err: HttpErrorResponse) => {
        console.log("error getting value");
      }
    );
  }

}
