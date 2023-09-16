import { MemberTypeService } from './../../../../services/member-type.service';
import { MemberType } from './../../../../models/member-type.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, RouterPreloader } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-type-add',
  templateUrl: './member-type-add.component.html',
  styleUrls: ['./member-type-add.component.css']
})
export class MemberTypeAddComponent implements OnInit {

  
  memberTypeForm: FormGroup = new FormGroup({
    membreTypeLibelle: new FormControl(''),
    membreTypeLibelleAr: new FormControl(''),
    membreTypeDescription: new FormControl(''),
    membreTypeDescriptionAr: new FormControl(''),
  });

  memberType: MemberType = {};
  submitted = false;

  lang: any;
  fr: any;
  constructor(
    private httpClient: HttpClient,private fb: FormBuilder, private memberTypeService: MemberTypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
 
      this.httpClient.get("assets/i18n/fr.json").subscribe(data => {
        console.log(data);
        this.fr = data;
      });
 
    this.memberTypeForm =this.fb.group({
      membreTypeLibelle: ['', Validators.required],
      membreTypeLibelleAr: ['' ],
      membreTypeDescription: ['', Validators.maxLength(1000)],
      membreTypeDescriptionAr: ['' ],
    })
  }

  formSubmit(): void{
    this.submitted = true;
if (this.memberTypeForm.valid){
    this.memberTypeService.create(this.memberTypeForm.value)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
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
