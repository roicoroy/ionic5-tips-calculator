import { Directive, Self } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
// https://stackblitz.com/edit/angular-control-value-accessor-demo-c24p54?file=src%2Fapp%2Fapp.component.html
/**
 * @author Abdel El-medny
 * @see https://stackoverflow.com/questions/38844835/extending-angular-2-ngmodel-directive-to-use-observables
 */
@Directive({
  selector: '[appRxModel]'
})
export class RxModelDirective {

  /** 
   * Reference to the behaviorSubject, because during the first change we will transform
   * the behaviorSubject to its value in the ngModel
   */
  behaviorSubjectReference: BehaviorSubject<any>;

  constructor( @Self() private ngControl: NgControl) { }


  ngOnInit() {

    if ( !(this.ngControl instanceof NgModel ) ) {
        // If the ngControl is not an instanceof ngModel, return early
        return;
    }

    const ngControlValue = this.ngControl.control.value;

    this.ngControl.valueChanges.pipe(
      filter( value => {
        return value instanceof BehaviorSubject || Boolean(this.behaviorSubjectReference);
      })
    ).subscribe( (value: BehaviorSubject<any>|any) => {

      if ( value instanceof BehaviorSubject ) {
        // Saving the behaviorSubject for later use
        //
        this.behaviorSubjectReference = value;
        this.ngControl.control.setValue(this.behaviorSubjectReference.value);
      } else {
        // If we are in the else clause, the first change has already gone by and we have a 
        // behaviorSubjectReference we can call .next on
        //
        this.behaviorSubjectReference.next(value);
      }

    });
  }

}