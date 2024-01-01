import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-show-type',
  templateUrl: './show-type.component.html',
  styleUrls: ['./show-type.component.css']
})
export class ShowTypeComponent {

  
  perfume?:any;
  type?:any;

  constructor(private parfumeService: ParfumeService ,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    // Retrieve the perfume ID from the route parameters
    this.route.params.subscribe(params => {
        const type = params['company'];
        this.type=type
        this.parfumeService.getByType(type)
        .pipe(first())
        .subscribe(perfume => this.perfume = perfume);
    });

}


showProfile(id: string){
  this.router.navigate(['Parfumes/perfumeProfile', id]);
}

}
