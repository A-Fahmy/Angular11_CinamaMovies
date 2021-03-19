import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';


import { LoginComponent } from './Account/login/login.component';
import { PasswordconfirmComponent } from './Account/passwordconfirm/passwordconfirm.component';
import { RegisterComponent } from './Account/register/register.component';
import { RegisterconfirmComponent } from './Account/registerconfirm/registerconfirm.component';
import { ActorListComponent } from './Admin/Actors/actor-list/actor-list.component';
import { AddActorComponent } from './Admin/Actors/add-actor/add-actor.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { AddCategoryComponent } from './Admin/Categories/add-category/add-category.component';
import { CategryListComponent } from './Admin/Categories/categry-list/categry-list.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { EditUserRoleComponent } from './Admin/edit-user-role/edit-user-role.component';
import { EditMovieActorComponent } from './Admin/MovieActors/edit-movie-actor/edit-movie-actor.component';
import { MovieActorListComponent } from './Admin/MovieActors/movie-actor-list/movie-actor-list.component';
import { EditMovieLinkComponent } from './Admin/MovieLinks/edit-movie-link/edit-movie-link.component';
import { MovieLinkListComponent } from './Admin/MovieLinks/movie-link-list/movie-link-list.component';
import { AddMovieComponent } from './Admin/Movies/add-movie/add-movie.component';
import { EditMovieComponent } from './Admin/Movies/edit-movie/edit-movie.component';
import { MovieListComponent } from './Admin/Movies/movie-list/movie-list.component';
import { SubCategoryListComponent } from './Admin/SubCategories/sub-category-list/sub-category-list.component';
import { SubCategoryComponent } from './Admin/SubCategories/sub-category/sub-category.component';
import { UserRolesComponent } from './Admin/user-roles/user-roles.component';
import { UsersComponent } from './Admin/users/users.component';
import { GridFilterComponent } from './DevExtreme/grid-filter/grid-filter.component';
import { DashboardGaurdService } from './gaurds/dashboard-gaurd.service';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './Modules/Transaction/order/order.component';
import { OrdersComponent } from './Modules/Transaction/orders/orders.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditRolesListComponent } from './Permissions/edit-roles-list/edit-roles-list.component';
import { EditRowRolesListComponent } from './Permissions/edit-row-roles-list/edit-row-roles-list.component';
import { RolesListComponent } from './Permissions/roles-list/roles-list.component';
import { UserListComponent } from './Permissions/user-list/user-list.component';

const routes: Routes = [


  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  { path: 'registerconfirm', component: RegisterconfirmComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'passwordconfirm', component: PasswordconfirmComponent },
  { path: 'controlpanel', component: DashboardComponent, canActivate: [DashboardGaurdService] },
  { path: 'Users', component: UsersComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'edituser/:id', component: AddUserComponent },
  { path: 'userroles', component: UserRolesComponent },
  { path: 'edituserrole/:id/:id1', component: EditUserRoleComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: 'accessdenied', component: AccessdeniedComponent },
  { path: 'categorylist', component: CategryListComponent },
  { path: 'category', component: AddCategoryComponent },
  { path: 'editcategory/:id/:id1', component: AddCategoryComponent },

  { path: 'subcategorylist', component: SubCategoryListComponent },
  { path: 'subcategory', component: SubCategoryComponent },
  { path: 'editsubcategory/:id/:id1/:id2', component: SubCategoryComponent },


  { path: 'actorlist', component: ActorListComponent },
  { path: 'addactor', component: AddActorComponent },
  { path: 'editactor/:id', component: AddActorComponent },
  { path: 'movelist', component: MovieListComponent },
  { path: 'editmovie/:id', component: EditMovieComponent },
  { path: 'addmovie', component: AddMovieComponent },





  { path: 'movelinklist', component: MovieLinkListComponent },
  { path: 'editlinks/:id', component: EditMovieLinkComponent },
  { path: 'addlink', component: EditMovieLinkComponent },

  { path: 'moveactorlist', component: MovieActorListComponent },
  { path: 'editmovieactor/:id', component: EditMovieActorComponent },
  { path: 'addmovieactor', component: EditMovieActorComponent },


  { path: 'UserPermission', component: UserListComponent },
  { path: 'RolesList', component: RolesListComponent },
  { path: 'editRolesList/:roleId', component: EditRolesListComponent },
  { path: 'editRowRolesList/:roleId/:componentId', component: EditRowRolesListComponent },



  { path: 'order', component: OrderComponent},
  { path: 'order/edit/:id', component: OrderComponent },
  // { path: 'employee', component: EmployeeComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'gridFilter', component: GridFilterComponent }







];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
