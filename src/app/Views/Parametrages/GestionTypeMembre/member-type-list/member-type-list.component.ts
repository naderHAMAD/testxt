import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MemberTypeService } from './../../../../services/member-type.service';
import { MemberType } from './../../../../models/member-type.model';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-member-type-list',
  templateUrl: './member-type-list.component.html',
  styleUrls: ['./member-type-list.component.css']
})
export class MemberTypeListComponent implements OnInit {

  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild(MatSort) matSort! : MatSort;

  memberTypeForm: FormGroup = new FormGroup({
    membreTypeLibelle: new FormControl(''),
    membreTypeLibelleAr: new FormControl(''),
    membreTypeDescription: new FormControl(''),
    membreTypeDescriptionAr: new FormControl(''),
  });

  memberTypes?: MemberType[];
  currentMemberType: MemberType = {};
  memberId?: number;
 
  displayedColumns: string[] = ['membreTypeLibelle',  'membreTypeDescription',   'operations'];
  dataSource!: MatTableDataSource<any>;
  obs!:Observable<any>; 

  lang: any;
  fr: any;
  
  constructor(
    private httpClient: HttpClient,
    private changeDetectorRef: ChangeDetectorRef,private fb: FormBuilder, private memberTypeService: MemberTypeService,
    private router: Router) { }

  ngOnInit(): void {
 
      this.httpClient.get("assets/i18n/fr.json").subscribe(data => {
        console.log(data);
        this.fr = data;
      });
   
    
    this.retrieveMemberType();
  }
  retrieveMemberType(): void {
    this.memberTypeService.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.matSort;
           this.obs = this.dataSource.connect();
        },
        error: (e) => console.error(e)
      });
  }

  setMemberId(id: number) {
    this.memberId = id; 
    Swal.fire({
      title: this.fr.popup_supprimer,
       showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#888888',
      cancelButtonText: this.fr.popup_validation_cancelButtonText,
      confirmButtonText: this.fr.validSuppriDialogBtn,
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteMemberType();
      }
    });
  }
  deleteMemberType(): void {
    this.memberTypeService.delete(this.memberId)
      .subscribe(
        {
                next: (res) => {
                  console.log(res);
          this.router.navigate(['/home/membertype-list']);
          this.retrieveMemberType();
                },
                error: (e) => console.error(e)
        });
  }

filterData($event : any){
  this.dataSource.filter = $event.target.value;
    }
}
