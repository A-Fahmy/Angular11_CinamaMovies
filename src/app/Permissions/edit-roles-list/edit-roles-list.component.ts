import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';
import { EditRolesListModel } from 'src/app/models/EditRolesListModel';
import { FormGroup } from '@angular/forms';



@Component({
  selector: 'app-edit-roles-list',
  templateUrl: './edit-roles-list.component.html',
  styleUrls: ['./edit-roles-list.component.css']
})
export class EditRolesListComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router,
    private activateRoute: ActivatedRoute,

  ) { }
  EditRoles: EditRolesListModel[];
  Test: EditRolesListModel[];
  num: number;

  ngOnInit(): void {
    this.EditRoles=[];
    this.num = 0;
    this.activateRoute.paramMap.subscribe(param => {
      var roleid = param.get('roleId');
      if (roleid) {
        this.service.GetRolePermission(roleid).subscribe((list) => {
          debugger
          this.EditRoles = list;
        }, ex => console.log(ex))
      } else {
        this.router.navigate(['notfound']).then(x => { window.location.reload() });
      }
    })
//   this.getUsers();

  }

  // getUsers() {
  //    this.service.GetAllUsers().subscribe((list) => {
  //     this.EditRoles = list;
  //   }, err => console.log(err));
  // }

  Function_Insert(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.EditRoles.forEach(x => x.insertYN = ChkYN)
    this.onSubmit();

  }
  Function_Update(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.EditRoles.forEach(x => x.updateYN = ChkYN)
    this.onSubmit();

  }
  Function_Delete(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.EditRoles.forEach(x => x.deleteYN = ChkYN)
    this.onSubmit();

  }
  Function_View(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.EditRoles.forEach(x => x.viewYN = ChkYN)
    this.onSubmit();

  }
  Function_Print(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.EditRoles.forEach(x => x.printYN = ChkYN)
    this.onSubmit();

  }

  EditRow(roleId:string,componentId:number) {

    debugger;
    this.router.navigate(['editRowRolesList',roleId, componentId]);
  }
  onSubmit() {
    debugger;


    this.service.InsertRolePermission(this.EditRoles).subscribe(cat => {
      debugger;
      this.EditRoles=cat;
    }, ex => {
      console.log(ex);
    })

  }
  OnBack(){
    this.router.navigate(['/RolesList']);
  }

}
