import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  airports = [];

  constructor(private httpService: HttpClient) { 
   
  }

  ngOnInit() {
    // this.httpService.get("http://192.168.43.162:8081/api/showAirport").subscribe(
    //   data => {
    //     this.airports = data as String[];   
    //     console.log(this.airports);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log("error getting value");
    //   }
    // );
  }


}