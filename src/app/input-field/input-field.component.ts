import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-input-field",
  templateUrl: "./input-field.component.html",
  styleUrls: ["./input-field.component.css"]
})
export class InputFieldComponent implements OnInit {
  number: number = 123456789;

  constructor() {}

  ngOnInit() {}
}
