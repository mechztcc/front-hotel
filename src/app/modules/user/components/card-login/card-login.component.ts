import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/user/shared/auth.service';
import { User } from '../../shared/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.sass']
})
export class CardLoginComponent implements OnInit {

  icons: any = {
    faLock: faLock,
    faUser: faUser
  }
  loading: boolean = false;


  form: FormGroup;
  user: User = { email: 'email@email.com', password: '123456'}


  constructor(private route: Router, private spinner: NgxSpinnerService, private authService: AuthService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    // this.spinner.show();
  }

  formValidation() {
    if(this.form.invalid) {
      Swal.fire({
        title: 'Error',
        text: 'Email ou senha incorretos!',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      });

    } else {
      this.setUserAuth();
      this.auth();
    }
  }

  setUserAuth() {
    this.user.email = this.form.controls.email.value;
    this.user.password = this.form.controls.password.value;

  }

  auth() {
    this.loading = true;
    this.authService.auth(this.user)
      .subscribe((data: any) => {
          this.toastr.success('Vamos para home page...', 'Sucesso!', { timeOut: 1500, progressBar: true, progressAnimation: 'increasing' });
          setTimeout(() => {
            this.loading = false;
            this.saveSession(data);
            console.log(data);

            this.route.navigate(['home'])
          }, 2000);


      })
  }

  saveSession(data: any) {
    localStorage.setItem('token', data.token)
  }

}
