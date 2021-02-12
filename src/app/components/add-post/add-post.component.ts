import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  pub : []
  form = JSON.parse(localStorage.getItem('publications')) || []
  info :any
formulaire = new FormGroup ({
  titre : new FormControl('',Validators.required),
  description : new FormControl('',[Validators.required,Validators.minLength(10)]),
  catégorie : new FormControl('',Validators.required),
  date : new FormControl('',Validators.required)
})
  constructor() { }

  ngOnInit(): void {
  }
add(){
  this.info=this.formulaire.value,
  this.form.push(this.info)
  localStorage.setItem('publications',JSON.stringify(this.form))
  window.location.href='/list'
}
}
