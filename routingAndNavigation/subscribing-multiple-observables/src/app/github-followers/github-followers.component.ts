import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';



import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

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
    Aqui tem um subscribe dentro do outro, no próximo exemplo será removido
    para o código ficar melhor.
  */
  ngOnInit() {

    //subscribe to multiple observables
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      let order = combined[1].get('order');


      // this.service.getAll({ id: id, page: page })
      this.service.getAll()
      .subscribe(followers => this.followers = followers);
      

      //http://localhost:4200/followers?page=1&order=newest
      console.log("id: ", id); //null
      console.log("page: ", page); // 1
      console.log("order: ", order); // newest
    });

    



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
