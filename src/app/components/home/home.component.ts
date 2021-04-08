import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  active: boolean;
  buttonText = "Gerar"
  piadinha: any;
  url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas'

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.active = false;
  }

  gerarPiada(){
    this.active = true;
    this.buttonText = "Nova";
    this.getPiada();
  }

  getPiada() {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.get(this.url, headers)
    .subscribe(res => {
      this.piadinha = res;
    });
  }

}
