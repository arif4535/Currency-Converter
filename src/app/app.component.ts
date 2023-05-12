import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject,of, switchMap } from 'rxjs';
import { CurrencydataService } from './currencydata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _value$ = new BehaviorSubject<number>(0);
  public value$ = this._value$.asObservable();


  currencyForm = new FormGroup({
    amount: new FormControl(10),
    originCountry: new FormControl('USD'),
    targetCountry: new FormControl('EUR'),
  });
  
  constructor(private currencyService: CurrencydataService) {
    this.convert();
  }

  convert() {
    if (
      this.currencyForm.value.originCountry &&
      this.currencyForm.value.targetCountry &&
      this.currencyForm.value.amount
    ) {
      this.value$ = this.currencyService
        .getcurrencydata(this.currencyForm.value.originCountry)
        .pipe(
          switchMap((response) => {
            return of(
              response.rates[this.currencyForm.value.targetCountry as string] *
              (this.currencyForm.value.amount as number)
            );
            })
        );
    }
  }
}
