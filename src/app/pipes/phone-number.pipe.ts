import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phoneNumber"
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: number) {
    let str = value.toString();
    return `(${str[0] || "*"}${str[1] || "*"}) ${str[2] || "*"}${str[3] ||
      "*"}${str[4] || "*"}-${str[5] || "*"}${str[6] || "*"}-${str[7] ||
      "*"}${str[8] || "*"}`;
  }
}
