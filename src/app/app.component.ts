import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InjectFlags } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'internship-project';
  
   lang: any;
  fr: any;

  constructor(
    private httpClient: HttpClient,
    public translate: TranslateService,
    @Inject(DOCUMENT) private document:Document 
  ){
   }
  ngOnInit(): void {
      this.httpClient.get("assets/i18n/fr.json").subscribe(data => {
        console.log(data);
        this.fr = data;
      });
     
  }

 
}
