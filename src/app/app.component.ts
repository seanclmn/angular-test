import { Component, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Fact {
  fact: string;
  length: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'ang1';
  providers:string[] = [];
  
  makecall(): void {
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTU5MjY0MDcsImlhdCI6MTY1NTkyMjgwNywiaXNzIjoibG1hIiwianRpIjoiTVh2MGRGd1M5dSIsInN1YiI6ImNsYXlAcGVyaW9kaWMuaXMifQ.wGoiTCPS5jQVaHvtoIknrjgx3KPmc-XFYoaCcAXLQcA',
      'Content-Type': 'application/json'
    }
    const body = {
      "jsonrpc": "2.0",
      "method": "get_providers",
      "params":{},
      "id": "12345"
    }
    this.http.post('/', body, { headers }).subscribe((data: any) => {
      console.log("DATA", data)
      this.providers = [];
      data.result.forEach((element: any) => {
        this.providers.push(JSON.stringify(element.name))
      });
    })
  }
}
