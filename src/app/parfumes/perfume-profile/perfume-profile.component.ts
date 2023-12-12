import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService, CartService, ParfumeService } from '@app/_services';
import { first } from 'rxjs';


@Component({
  selector: 'app-perfume-profile',
  templateUrl: './perfume-profile.component.html',
  styleUrls: ['./perfume-profile.component.css']

})
export class PerfumeProfileComponent implements OnInit {
 
  perfume?:any;
  // onCart!: any;
  noOfItems:number=0;
  @Output() dataEvent = new EventEmitter<string>();
 
  constructor(
    private parfumeService: ParfumeService ,
    public cartService: CartService,
    private route: ActivatedRoute,) {}

  ngOnInit() {
    // Retrieve the perfume ID from the route parameters
    this.route.params.subscribe(params => {
         
        const x =params['id']
        this.parfumeService.getById(x)
        .pipe(first())
        .subscribe(perfume => this.perfume = perfume);
    });

}

addToCart(perfume:any){
this.cartService.addToCart(perfume);
window.alert("added to cart")
}




}
