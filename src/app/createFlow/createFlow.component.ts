import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createflow',
  templateUrl: './createFlow.component.html',
  styleUrls: ['./createFlow.component.css']
})

export class createFlowComponent implements OnInit{
  imgNameArray:any[] = []

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.onGETimg();
  }

  onGETimg() {
    this.http.get<any>('http://localhost:3000/getNameimg').subscribe(result=>{
      this.imgNameArray = result.data;
    })
  }
}
