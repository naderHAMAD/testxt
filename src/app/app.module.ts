import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HomeComponent } from './Views/home.component'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 


import { MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSortModule} from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
 

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
 
import { RouterModule } from '@angular/router';
 
import { HighchartsChartModule } from 'highcharts-angular';
 
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';

 import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MenuParametrageComponent } from './Views/Parametrages/menu-parametrage/menu-parametrage.component';
import { MemberTypeAddComponent } from './Views/Parametrages/GestionTypeMembre/member-type-add/member-type-add.component';
import { MemberTypeListComponent } from './Views/Parametrages/GestionTypeMembre/member-type-list/member-type-list.component';
import { MemberTypeUpdateComponent } from './Views/Parametrages/GestionTypeMembre/member-type-update/member-type-update.component';
import { MemberTypeViewComponent } from './Views/Parametrages/GestionTypeMembre/member-type-view/member-type-view.component';
 
   FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin,
  listPlugin
]);

export function Ts(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json' );
}

@NgModule({
  declarations: [
    AppComponent,
 
    HomeComponent,

    MenuParametrageComponent,

    MemberTypeAddComponent, 
    MemberTypeListComponent,
    MemberTypeUpdateComponent,
    MemberTypeViewComponent,
 
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (Ts),
          deps: [HttpClient]
        }
      }),
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule,
    RouterModule,
    HighchartsChartModule ,
    MatCheckboxModule,
    MatTooltipModule,
    MatCardModule 
 
 

  ],
  providers: [SweetAlert2Module 
  ],
  bootstrap: [AppComponent]
})



export class AppModule {}
 
