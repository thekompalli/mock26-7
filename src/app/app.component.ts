import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';

  lst = [];

  Details = new FormGroup({
    test: new FormControl('')
  })

  submit(){
      this.lst.push(this.Details.value.test);
  }
}
