import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';
import { EditRolesListModel } from 'src/app/models/EditRolesListModel';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-row-roles-list',
  templateUrl: './edit-row-roles-list.component.html',
  styleUrls: ['./edit-row-roles-list.component.css']
})
export class EditRowRolesListComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: AdminService,
    private activateRoute: ActivatedRoute,
    private router: Router,

  ) { }


  rowForm: FormGroup;
  editRole: EditRolesListModel;
  EditRoles: EditRolesListModel[];
  message: string;

  ngOnInit() {

    this.message = '';
this.editRole=null;
    this.rowForm = this.fb.group({
      InsertYN: false,
      UpdateYN: false,
      DeleteYN: false,
      ViewYN: false,
      PrintYN: false
    });
       this.activateRoute.paramMap.subscribe(param => {
debugger;
      var RoleId = param.get('roleId');
      var componentId = +param.get('componentId');// += convert string to int
      if (RoleId && componentId) {
      //  this.service.GetRow_RolePermission(RoleId,componentId).subscribe(x => {
        this.service.GetRolePermission(RoleId).subscribe(x => {
         debugger;
         this.EditRoles=x;
          this.editRole = x.find(d=>d.componentId==componentId);
          this.SetData();
        }, ex => console.log(ex));
      }
    })
  }
  SetData() {
    if (this.editRole !== null) {
      debugger;
       this.rowForm.setValue({
        InsertYN: this.editRole.insertYN,
        UpdateYN: this.editRole.updateYN,
        DeleteYN: this.editRole.deleteYN,
        ViewYN: this.editRole.viewYN,
        PrintYN: this.editRole.printYN,
       });
    }
  }
  onSubmit() {
    this.EditRoles.forEach(x => x = this.editRole)
    this.service.InsertRolePermission(this.EditRoles).subscribe(cat => {
      this.OnBack();
    }, ex => {
      console.log(ex);
    })

  }

  Function_Insert(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.editRole.insertYN = ChkYN;
  }
  Function_Update(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.editRole.updateYN = ChkYN;
  }
  Function_Delete(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.editRole.deleteYN = ChkYN;
  }
  Function_View(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.editRole.viewYN = ChkYN;


  }
  Function_Print(values:any) {
    debugger;
    var ChkYN=values.currentTarget.checked
    this.editRole.printYN = ChkYN;


  }






  OnBack(){
    debugger;
    this.router.navigate(['/editRolesList', this.editRole.roleId]);

  }
}
