import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list';
  programmingLanguages = ['C','C++','C#', 'pytthon','java', 'javaScript','R', "PHP" ]
}
