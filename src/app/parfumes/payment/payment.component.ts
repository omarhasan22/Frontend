// payment.component.ts
import { Component, OnInit } from '@angular/core';
import {  AccountService, CartService, PaymentService } from '@app/_services';

declare var Stripe: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html'
})
export class PaymentComponent implements OnInit {
  private stripe: any;
  private card: any;
  cart?:any[];
  constructor(
    private paymentService: PaymentService,
    public cartService: CartService,
    private account:AccountService
    ) { }

  ngOnInit() {
    this.initializeStripe();
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
    this.cart = this.cartService.getCart();

  }

  private initializeStripe() {
    this.stripe = Stripe('pk_test_51OS2RvH1jy8FFcmKjLHUSxgiIgq77LfDGpAxdhlYz0Gpt8gvwE8dT8mi4To5VT3Tu4aaj0oTxr4eue9XppU9B3Lb00EhWrkDIm');
    const elements = this.stripe.elements();

    // Create a card element
    this.card = elements.create('card');

    // Mount the card element to your form
    this.card.mount('#card-element');
  }

  onSubmit(price:number) {
    // Handle form submission
    this.stripe.createToken(this.card).then((result: { error: any; token: { id: string; }; }) => {
      if (result.error) {
        // Handle errors
        console.error(result.error);
      } else {
        // Send the token to your server using the payment service
        this.paymentService.processPayment(result.token.id, this.account.accountValue?.email , price,'sample')
          .subscribe(
            (response) => {
              if (response.success) {
                // Payment successful
                console.log('Payment successful:', response.charge);
              } else {
                // Payment failed
                console.error('Payment failed:', response.error);
              }
            },
            (error) => {
              // Handle HTTP error
              console.error('HTTP Error:', error);
            }
          );
      }
    });
  }




  itemCount(){
    return this.cartService.getCartItemCount()
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
    this.cart = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = [];
  }

  increaseQuantity(item:any){
    this.cartService.increaseQuantity(item)
  }

isEmpty(): boolean{
const cart=this.cartService.getCart();
  return cart.length === 0;
}

  totalPrice(): number{
    return this.cartService.getTotalPrice(this.cartService.getCart());
  }













}
