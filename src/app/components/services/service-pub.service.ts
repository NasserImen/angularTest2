import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicePubService {

  constructor(private route :Router) { }
  delete (form:any[],i){
    return form.splice(i,1)
  }
  update(form:any[],i){
    return this.route.navigateByUrl('list/update/'+form[i].titre)
  }
}
