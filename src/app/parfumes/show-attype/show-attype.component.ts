import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParfumeService } from '@app/_services';
import { first } from 'rxjs';

@Component({
  selector: 'app-show-attype',
  templateUrl: './show-attype.component.html'
})
export class ShowATtypeComponent implements OnInit {

typesOfPerfumes?:any[];

  constructor(private parfumeService: ParfumeService,private router:Router ){}


  ngOnInit(): void {
    this.getAllTypes();
    
  }

  getAllTypes(){
    this.parfumeService.getAllType()
    .pipe(first())
    .subscribe(parfume => this.typesOfPerfumes = parfume);
  }

  showtype(company: string){
    this.router.navigate(['Parfumes/perfumeType', company]);
  }

}
