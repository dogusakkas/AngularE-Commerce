import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IProduct } from './models/IProduct';
import { IPagination } from './models/IPageination';

@Component({
  selector: 'app-first',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'e-ticaret';
  products :IProduct[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:44396/api/Products').subscribe((response: IPagination)=>{

      this.products=response.data;

    },
    
    error=>{
      console.log(error);
    }
    );
  }
}
