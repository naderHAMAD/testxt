import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home.component';


import { MemberTypeAddComponent } from './Views/Parametrages/GestionTypeMembre/member-type-add/member-type-add.component';
import { MemberTypeListComponent } from './Views/Parametrages/GestionTypeMembre/member-type-list/member-type-list.component';
import { MemberTypeUpdateComponent } from './Views/Parametrages/GestionTypeMembre/member-type-update/member-type-update.component';
import { MemberTypeViewComponent } from './Views/Parametrages/GestionTypeMembre/member-type-view/member-type-view.component';
import { MenuParametrageComponent } from './Views/Parametrages/menu-parametrage/menu-parametrage.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
 

  
  { path: 'home/membertype-list', component: MemberTypeListComponent },
  { path: 'home/membertype-add', component: MemberTypeAddComponent },
  { path: 'home/membertype-update/:membreTypeId', component: MemberTypeUpdateComponent },
  { path: 'home/membertype-view/:membreTypeId', component: MemberTypeViewComponent },


  {
    path: 'home/parametrages',
    component:MenuParametrageComponent,
  },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
