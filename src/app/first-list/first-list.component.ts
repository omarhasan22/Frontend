import { Component, OnInit } from '@angular/core';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-first-list',
  templateUrl: './first-list.component.html'
})
export class FirstListComponent implements OnInit{

  parfumes?:any[];

  constructor(private parfumeService: ParfumeService){}
  
  ngOnInit(): void {
   
    this.getAllParfumes();
  }
  
  getAllParfumes(){
    this.parfumeService.getAll()
    .pipe(first())
    .subscribe(parfume => this.parfumes = parfume);
  }


}
