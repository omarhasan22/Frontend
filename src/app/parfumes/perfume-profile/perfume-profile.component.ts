import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-perfume-profile',
  templateUrl: './perfume-profile.component.html'
})
export class PerfumeProfileComponent implements OnInit {

  perfume?:any;

  constructor(private parfumeService: ParfumeService ,private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the perfume ID from the route parameters
    this.route.params.subscribe(params => {
        const id = params['id'];
        this.parfumeService.getById(id)
        .pipe(first())
        .subscribe(perfume => this.perfume = perfume);
    });

}

}
