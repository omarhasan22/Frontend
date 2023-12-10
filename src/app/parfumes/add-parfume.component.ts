import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParfumeService, AlertService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-parfume',
  templateUrl: './add-parfume.component.html'
})
export class AddParfumeComponent implements OnInit {
  form!: FormGroup;
  submitting = false;
  submitted = false;

constructor( 
  private formBuilder: FormBuilder,
  private route: ActivatedRoute,
  private router: Router,
  private parfumService: ParfumeService,
  private alertService: AlertService
){
  
}


  ngOnInit() {
    this.form = this.formBuilder.group({

        name: ['', Validators.required],
        company: ['', Validators.required],
        type: ['', Validators.required],
        img: ['', Validators.required],
      
    }
    );

}

// convenience getter for easy access to form fields
get f() { return this.form.controls; }


onSubmit() {
  this.submitted = true;

  // reset alerts on submit
  this.alertService.clear();

  // stop here if form is invalid
  if (this.form.invalid) {
      return;
  }

  this.submitting = true;
  this.parfumService.add(this.form.value)
      .pipe(first())
      .subscribe({
          next: () => {
              this.alertService.success('Adding successful', { keepAfterRouteChange: true });
              this.submitting = false;
            },
          error: error => {
              this.alertService.error(error);
              this.submitting = false;
          }
      });
}


}
