import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { LoginModel } from 'src/app/models/login-model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { languageModel } from 'src/app/models/languageModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private route: Router,
    private auth: AuthService
  ) {}

  message: string;
  CurrentLang: string;
  loginForm: FormGroup;
  logModel: LoginModel;
  lang: languageModel[];

  messageValidate = {
    email: {
      required: 'البريد الالكتروني مطلوب',
    },
    pass: {
      required: 'كلمة المرور مطلوبة',
    },
    languageId: {
      required: 'اختر لغه الدخول',
    },


  };

  ngOnInit() {
    sessionStorage.setItem('login', 'login');
    debugger;
    this.AddLangItem();
    this.auth.isLogin = false;
    this.message = '';


    this.logModel = {
      email: '',
      password: '',
      rememberMe: false,
    };

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: false,
      languageId: [0, [Validators.required]]
    });
  }

  Login() {
    if (this.loginForm.valid) {
      this.ValidateModel();
      this.service.UserLogin(this.logModel).subscribe(
        (success) => {
          const rem = !!this.loginForm.value.rememberMe;
          const email = this.loginForm.value.email;
          this.auth.installStorage(rem, email);

          this.route.navigate(['home']).then((x) => {
            window.location.reload();
          });
        },
        (err) => {
          console.log(err);
          this.message = err.error;
        }
      );
    }
  }

  ValidateModel() {
    this.logModel.email = this.loginForm.value.email;
    this.logModel.password = this.loginForm.value.password;
    this.logModel.rememberMe = this.loginForm.value.rememberMe;
  }
  AddLangItem() {
    // item to add :
    this.lang = [
      {
        languageId: 'ar',
        languageName: 'عربى',
      },
      {
        languageId: 'en',
        languageName: 'English',
      },
    ];
  }
  onlanguageChange() {
    this.CurrentLang = this.loginForm.value.languageId;
    sessionStorage.setItem('lang', this.CurrentLang);
    debugger;
    this.route.navigate(['']).then((x) => {
      window.location.reload();
    });

    console.log(this.CurrentLang);
  }
}
