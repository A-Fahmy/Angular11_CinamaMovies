import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './Account/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './Account/register/register.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './Account/forget-password/forget-password.component';
import { PasswordconfirmComponent } from './Account/passwordconfirm/passwordconfirm.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { UsersComponent } from './Admin/users/users.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { UserRolesComponent } from './Admin/user-roles/user-roles.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { DashboardGaurdService } from './gaurds/dashboard-gaurd.service';
import { EditUserRoleComponent } from './Admin/edit-user-role/edit-user-role.component';
import { CategryListComponent } from './Admin/Categories/categry-list/categry-list.component';
import { AddCategoryComponent } from './Admin/Categories/add-category/add-category.component';
import { SubCategoryListComponent } from './Admin/SubCategories/sub-category-list/sub-category-list.component';
import { SubCategoryComponent } from './Admin/SubCategories/sub-category/sub-category.component';
import { OrdersComponent } from './Modules/Transaction/orders/orders.component';
import { OrderComponent } from './Modules/Transaction/order/order.component';
import { OrderItemsComponent } from './Modules/Transaction/order-items/order-items.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { AddActorComponent } from './Admin/Actors/add-actor/add-actor.component';
import { ActorListComponent } from './Admin/Actors/actor-list/actor-list.component';
import { GridFilterComponent } from './DevExtreme/grid-filter/grid-filter.component';

import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';

import { UserListComponent } from './Permissions/user-list/user-list.component';
import { RolesListComponent } from './Permissions/roles-list/roles-list.component';
import { MovieListComponent } from './Admin/Movies/movie-list/movie-list.component';
import { AddMovieComponent } from './Admin/Movies/add-movie/add-movie.component';
import { EditRolesListComponent } from './Permissions/edit-roles-list/edit-roles-list.component';
import { EditRowRolesListComponent } from './Permissions/edit-row-roles-list/edit-row-roles-list.component';
import { EditMovieComponent } from './Admin/Movies/edit-movie/edit-movie.component';
import { MovieLinkListComponent } from './Admin/MovieLinks/movie-link-list/movie-link-list.component';
import { EditMovieLinkComponent } from './Admin/MovieLinks/edit-movie-link/edit-movie-link.component';
import { MovieActorListComponent } from './Admin/MovieActors/movie-actor-list/movie-actor-list.component';
import { EditMovieActorComponent } from './Admin/MovieActors/edit-movie-actor/edit-movie-actor.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    FooterMenuComponent,
    ForgetPasswordComponent,
    PasswordconfirmComponent,
    DashboardComponent,
    UsersComponent,
    AddUserComponent,
    UserRolesComponent,
    NotFoundComponent,
    AccessdeniedComponent,
    EditUserRoleComponent,
    CategryListComponent,
    AddCategoryComponent,
    SubCategoryListComponent,
    SubCategoryComponent,
    AddActorComponent,
    ActorListComponent,
    MovieDetailsComponent,

    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    GridFilterComponent,
    UserListComponent,
    RolesListComponent,
    MovieListComponent,
    AddMovieComponent,
    EditMovieComponent,
    MovieLinkListComponent,
    EditMovieLinkComponent,
    MovieActorListComponent,
    EditMovieActorComponent,

    EditRolesListComponent,
    EditRowRolesListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DevExtremeModule,
    DxDataGridModule,
    ToastrModule.forRoot(
      {

        progressBar:true
      }
    )




  ],
  entryComponents:[OrderItemsComponent],
  providers: [DashboardGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }

