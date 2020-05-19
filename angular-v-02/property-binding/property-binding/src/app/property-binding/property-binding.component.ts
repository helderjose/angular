import { Component, OnInit } from '@angular/core';

@Component({
    /*moduleId: module.id,*/
    selector: 'property-binding',
    templateUrl: 'property-binding.component.html'
})

export class PropertyBindingComponent {

    url = 'http://loiane.com';
    urlImg = 'http://lorempixel.com/350/150/city/';
    title = "My title"
    
    constructor() { }

    getValor() {
        return 1;
    }
}