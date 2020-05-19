import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  //olhe o GithubProfileComponent no app.module.ts
  ngOnInit() {
    //this.route.paramMap['id']; //pega o parametro id da url

    this.route.paramMap
      .subscribe(params => {
        let id = +params.get('id');  //o + converte a string para number
        console.log(id);
        // console.log(params);
      })
  }

}
