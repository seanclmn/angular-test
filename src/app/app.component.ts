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
  fact = '';

  makecall(): void {
    this.http.get('/fact').subscribe((data: any) => {
      console.log("DATA", data)
      this.fact = data.fact
    })
  }
}
