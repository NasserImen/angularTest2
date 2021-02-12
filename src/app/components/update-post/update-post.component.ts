import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  form= JSON.parse(localStorage.getItem('publications')) 
  i:any
  formU:any
  formulaire1=new FormGroup({
    titre1:new FormControl(''),
    description1 : new FormControl(''),
    categorie1 : new FormControl(''),
    date1 : new FormControl('')
  })
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.form);
    this.form.forEach(pub => {
      if(pub.titre==this.route.snapshot.params.titre){
        this.formulaire1=new FormGroup({
          titre1:new FormControl(pub.titre),
          description1 : new FormControl(pub.description),
          categorie1 : new FormControl(pub.catégorie),
          date1 : new FormControl(pub.date)
        })

      }
    });
  }
modifier(){

}
}
