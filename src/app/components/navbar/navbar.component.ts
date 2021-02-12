import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
list(){
  window.location.href='/list'
}
Add(){
  window.location.href='/add'
}
home(){
  window.location.href='/home'
}
}
