import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-first',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'e-ticaret';
  products :any[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get('https://localhost:44396/api/Products').subscribe((response: any)=>{

      this.products=response.data;

    },
    
    error=>{
      console.log(error);
    }
    );
  }
}
