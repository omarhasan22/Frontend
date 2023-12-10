import { Component, OnInit } from '@angular/core';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-show-attype',
  templateUrl: './show-attype.component.html'
})
export class ShowATtypeComponent implements OnInit {

typesOfPerfumes?:any[];

  constructor(private parfumeService: ParfumeService){}


  ngOnInit(): void {
    this.getAllTypes();
  }

  getAllTypes(){
    this.parfumeService.getAllTypes()
    .pipe(first())
    .subscribe(parfume => this.typesOfPerfumes = parfume);
  }

}
