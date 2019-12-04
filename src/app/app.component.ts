import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@ViewChild('right_content') right_content; 

export class AppComponent {
  title = 'myFirstApp';
  
}
