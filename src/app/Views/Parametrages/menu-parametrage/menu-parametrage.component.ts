import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-parametrage',
  templateUrl: './menu-parametrage.component.html',
  styleUrls: ['./menu-parametrage.component.css']
})
export class MenuParametrageComponent implements OnInit {
lang: any;
  fr: any;
  constructor(  private httpClient: HttpClient, ) { }

  ngOnInit(): void {

      this.httpClient.get("assets/i18n/fr.json").subscribe(data => {
        console.log(data);
        this.fr = data;
      });


  }

}
