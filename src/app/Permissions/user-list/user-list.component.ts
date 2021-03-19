import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Users } from 'src/app/models/user';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private service: AdminService,
    private router: Router
  ) { }

  users: Users[];
  num: number;

  ngOnInit(): void {
    this.users = null;
    this.num = 0;
   this.getUsers();
  }

  getUsers() {
     this.service.GetAllUsers().subscribe((list) => {
      this.users = list;
    }, err => console.log(err));
  }

  EditUserClick(id: string) {
debugger
    this.router.navigate(['/edituser', id]);

    // sessionStorage.setItem('edituser', 'edituser');
    // sessionStorage.setItem('edituserId', id);
    // this.router.navigate(['/controlpanel']).then(x=> {window.location.reload()});

  }






}
