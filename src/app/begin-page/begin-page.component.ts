import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-begin-page',
  templateUrl: './begin-page.component.html',
  styleUrls: ['./begin-page.component.css']
})
export class BeginPageComponent implements OnInit{

  testId!: FormControl

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.testId = new FormControl('', [
    ])
    console.log(this.testId)
  }

  startPassing() {
    this.router.navigate(['/test', this.testId.value])
  }

}
