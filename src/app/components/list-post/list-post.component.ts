import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicePubService } from '../services/service-pub.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
form= JSON.parse(localStorage.getItem('publications')) 
pub:any

  constructor(private servie :ServicePubService , private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.form.forEach(pub => {
      if(pub.titre==this.route.snapshot.params.titre){
        this.pub=pub
        console.log(this.pub);
      }
    });
  }
delete(i){
this.servie.delete(this.form,i)
localStorage.setItem('publications',JSON.stringify(this.form))
}
update(i){
  this.servie.update(this.form,i)
}
}
