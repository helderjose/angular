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
    console.log("GitHubProfileComponent OnInit");

    //this.route.paramMap['id']; //pega o parametro id da url

    /*
    - Abra o console do navegador.
    - clique em Followers
    - clique no primeiro follower
    - clique em Followers
    - clique no segundo follower
    */
    let id = this.route.snapshot.paramMap.get('id');
    console.log("id com snapshto: ", id);


    /*
      precisamos usar Observable porque se tivesse um botão na página que mudasse o perfil a página não seria recarregada
      (e ngOnInit() não seria chamado), e sim atualizado só o conteúdo, assim não conseguiríamos pegar o parâmetro passado
      pelo botão, por isso precisamos usar subscribe para pegar a nova url com o novo parâmetro.
    */
    // this.route.paramMap
    //   .subscribe(params => {
    //     let id = +params.get('id');  //o + converte a string para number
    //     console.log("id: ", id);
    //     // console.log(params);
    //   })
  }

}
