import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function namedRegexValidator(
  regex: RegExp,
  error: ValidationErrors
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return regex.test(control.value) ? null : error;
  };
}
