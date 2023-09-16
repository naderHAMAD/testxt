import { MemberTypeService } from './../../../../services/member-type.service';
import { MemberType } from './../../../../models/member-type.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-type-update',
  templateUrl: './member-type-update.component.html',
  styleUrls: ['./member-type-update.component.css']
})
export class MemberTypeUpdateComponent implements OnInit {

  currentMemberType: MemberType = {};
  
  memberTypeForm: FormGroup = new FormGroup({
    membreTypeLibelle: new FormControl(''),
    membreTypeLibelleAr: new FormControl(''),
    membreTypeDescription: new FormControl(''),
    membreTypeDescriptionAr: new FormControl(''),
  });

  submitted = false;

  lang: any;
  fr: any;
  constructor(
    private httpClient: HttpClient,private fb: FormBuilder, private memberTypeService: MemberTypeService,
    private router: Router, private route: ActivatedRoute,) { }

  ngOnInit(): void {
 
      this.httpClient.get("assets/i18n/fr.json").subscribe(data => {
        console.log(data);
        this.fr = data;
      });
   
    this.memberTypeForm =this.fb.group({
      membreTypeLibelle: ['', Validators.required],
      membreTypeLibelleAr: [''],
      membreTypeDescription: ['', Validators.maxLength(1000)],
      membreTypeDescriptionAr: [''],
    })
      this.getMemberType(this.route.snapshot.params["membreTypeId"]);
  }
  getMemberType(id: string): void {
    this.memberTypeService.get(id)
      .subscribe({
        next: (data) => {
          this.currentMemberType = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateMembreType(): void {
    this.submitted = true;
    if (this.memberTypeForm.valid){
    this.memberTypeService.update(this.currentMemberType.membreTypeId, this.currentMemberType)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home/membertype-list']);
        },
        error: (e) => console.error(e)
        });
      }
  }
  get f(){
    return this.memberTypeForm.controls;
  }

}
