import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-show-type',
  templateUrl: './show-type.component.html'
})
export class ShowTypeComponent {

  
  perfume?:any;

  constructor(private parfumeService: ParfumeService ,private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the perfume ID from the route parameters
    this.route.params.subscribe(params => {
        const type = params['type'];
        this.parfumeService.getByType(type)
        .pipe(first())
        .subscribe(perfume => this.perfume = perfume);
    });

}
}
