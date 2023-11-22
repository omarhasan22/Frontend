import { Component, OnInit } from '@angular/core';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-parfumes',
  templateUrl: './parfumes.component.html'
})
export class ParfumesComponent implements OnInit {
parfumes?:any[];

constructor(private parfumeService: ParfumeService){}

ngOnInit(): void {
 
  this.getAllParfumes();
  console.log(this.getAllParfumes())
}

getAllParfumes(){
  this.parfumeService.getAll()
  .pipe(first())
  .subscribe(parfume => this.parfumes = parfume);
}
}
