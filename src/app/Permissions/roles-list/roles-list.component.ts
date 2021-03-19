import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { RoleModel } from 'src/app/models/RoleModel';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  roles: RoleModel[];


  ngOnInit(): void {
    this.roles = null;
   this.getUsers();
  }

  getUsers() {
     this.service.GelAllRoles().subscribe((list) => {
      this.roles = list;
    }, err => console.log(err));
  }

  EditRoleClick(roleId: string) {
    this.router.navigate(['/editRolesList', roleId]);

    // sessionStorage.setItem('edituser', 'edituser');
    // sessionStorage.setItem('edituserId', id);
    // this.router.navigate(['/controlpanel']).then(x=> {window.location.reload()});

  }

}
