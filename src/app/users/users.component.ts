import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 userList: any;
  constructor(private HttpClient: HttpClient) { 
    this.userList = [];
  }

  ngOnInit(): void {
    this.getUserList()
  }
  getUserList(){
 this.HttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      this.userList = result;
 })
  }

}
