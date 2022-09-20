import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import name from './files/name.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// programmingLanguages = ['C','C++','C#', 'pytthon','java', 'javaScript','R', "PHP" ]
// url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

export class AppComponent  {
	title = "List";
  public programmingLanguages: {name: string, code:string}[]= name;
	
}
