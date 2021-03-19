import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
//import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
//let lang = environment['lang'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  styleUrls: [require('./app.component.css'), require('./app.component.' + lang + '.css')]
})
export class AppComponent {
  constructor(private route: Router) {}
  divLangName: string;
  divLangSideMenu: string;
  chktt:boolean;
  languageName: string;

  ngOnInit(): void {

    this.chktt=false;
    this.ChangeLang();

    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }

  CheckIsLogin(): boolean {
    var ChkLogin = sessionStorage.getItem('login');
    if (ChkLogin === 'login') return true;
    else return false;
  }

  CheckUser() {
    this.route.navigate(['Users']);
  }

  ChangeLang() {
    var getLang = sessionStorage.getItem('lang');
    if (getLang === 'ar')
    {
      this.languageName="Change language English";
      this.divLangName = 'main ar';
      this.divLangSideMenu='wrapper ar';
    }
    else
    {
      this.languageName="تغيير اللغة للعربى";
      this.divLangName = 'main';
      this.divLangSideMenu='wrapper';
    }
  }

  CheckUserRoleList() {
    this.route.navigate(['userroles']);
  }

  GetCategoryList() {
    this.route.navigate(['categorylist']);
  }
  GetSubCategoryList() {
    this.route.navigate(['subcategorylist']);
  }

  GetItemList() {
    this.route.navigate(['notfound']);
  }
  GetOrder() {
    this.route.navigate(['order']);
  }
  GridFilter() {
    this.route.navigate(['gridFilter']);
  }

  GetMovieList() {
    this.route.navigate(['movelist']);
  }

  EditUser() {}
  GetActorList(){
    this.route.navigate(['actorlist']);
  }
  GetMovieLinkList() {
    // Fahmy
    this.route.navigate(['movelinklist']);
  }


  GetMovieActorList() {
    this.route.navigate(['moveactorlist']);
  }

  Changelanguage(){
    var getLang = sessionStorage.getItem('lang');
    if (getLang === 'ar')
    {
      sessionStorage.setItem('lang', 'en');
      this.route.navigate(['home']).then((x) => {
        window.location.reload();
      });
    }
    else
    {
      sessionStorage.setItem('lang', 'ar');
      this.route.navigate(['home']).then((x) => {
        window.location.reload();
      });

    }
  }
  UserPermissions() {
    this.route.navigate(['UserPermission']);
  }
  RolesPermissions() {
    this.route.navigate(['RolesList']);
  }


}
