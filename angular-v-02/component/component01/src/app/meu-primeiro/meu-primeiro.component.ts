/*
    import para usar o decorator @Component
*/
import { Component, OnInit } from '@angular/core';


/*
@Component: decorator para transformar a classe em um componente;

selector: todo lugar que eu usar o valor do selector, o angular vai colocar
o conteúdo do template no lugar (olhar app.component.html);
O uso da `(crase) é chamado de template literal

template: Código html ou path do arquivo html que será usado como template. No template usa-se ` (crase).

styleUrls: Um array com arquivos css que formata o layout do component
*/

// olhar app.component.html
@Component({
    selector: 'meu-primeiro',
    template: `
    <div style="background-color: orange;">
        <p>Meu Primeiro Component<br/>
        Esse conteúdo vem do meu-primeiro.component.ts<br/>
        Posso usar as tags Angular aqui igual uso no arquivo html.
        </p>
    </div>
    <ul>
        <li>ngFor</li>
        <li *ngFor="let number of numbers">{{ number }}</li>
    </ul>
    `
})


/*
export: expor a classe para ser usada em outros arquivos.
*/
// olhar app.module.ts
export class MeuPrimeiroComponent {
    numbers;

    constructor(){
        this.numbers = [0, 1, 2];
    }
}
