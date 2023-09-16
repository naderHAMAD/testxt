import { FormBuilder } from '@angular/forms';
import { MemberTypeService } from './../../../../services/member-type.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberType } from './../../../../models/member-type.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-type-view',
  templateUrl: './member-type-view.component.html',
  styleUrls: ['./member-type-view.component.css']
})
export class MemberTypeViewComponent implements OnInit {

  id!: number;
  memberType!: MemberType;
  constructor(private fb: FormBuilder, private memberTypeService: MemberTypeService,
    private router: Router, private route: ActivatedRoute,private httpClient: HttpClient) { }
fr:any;
lang:any;
  ngOnInit(): void {
 
    this.httpClient.get("assets/i18n/fr.json").subscribe(data =>{
      console.log(data);
      this.fr = data;
    });
  


    this.id = this.route.snapshot.params['membreTypeId'];
        
    this.memberTypeService.get(this.id).subscribe((data: MemberType)=>{
      this.memberType = data;
    });
  }

}
