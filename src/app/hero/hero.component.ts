import { Component } from '@angular/core';
import { AccountService } from '@app/_services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {

  account = this.accountService.accountValue;

  constructor(private accountService: AccountService) { }
}
