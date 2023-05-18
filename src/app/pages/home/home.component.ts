import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      comments: [''],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formValues = this.myForm.value;
      console.log(formValues); // Realizar acciones con los valores del formulario
    }
  }
}
