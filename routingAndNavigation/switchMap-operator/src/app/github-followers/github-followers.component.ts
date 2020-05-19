import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService
  ) { }

  /*
    Usa switchMap para tirar um subscribe de dentro do outro
  */
  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    // .map(combined => {
    .switchMap(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      let order = combined[1].get('order');
      
      //http://localhost:4200/followers?page=1&order=newest
      console.log("id: ", id); //null
      console.log("page: ", page); // 1
      console.log("order: ", order); // newest
      
      return this.service.getAll(); // Observable<any>
    })
    .subscribe(followers => this.followers = followers);




    //versão antiga

    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // /* .subscribe(combined => retorna um: (parameter) combined: ParamMap[] */
    // .subscribe(combined => {
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');
    //   let order = combined[1].get('order');

    //   // this.service.getAll({ id: id, page: page })
    //   this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
      

    //   //http://localhost:4200/followers?page=1&order=newest
    //   console.log("id: ", id); //null
    //   console.log("page: ", page); // 1
    //   console.log("order: ", order); // newest
    // });

    



    //para baixo é exemplo antigo


    // this.route.paramMap
    // .subscribe(params => {
      
    // });
    
    
    // this.route.queryParamMap
    // .subscribe(params => {
      
    // });

    // // this.route.paramMap.subscribe();
    // // let id = this.route.snapshot.paramMap.get('id');

    // // this.route.queryParamMap.subscribe();
    // // let page = this.route.snapshot.queryParamMap.get('page');


    // this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
  }
}
