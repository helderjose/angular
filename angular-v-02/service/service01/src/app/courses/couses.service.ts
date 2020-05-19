// import { Injectable } from "@angular/core";

//todo: pesquisar sobre injectable
// @Injectable()
export class CoursesService {

    /**
     * Em uma aplicação real, esse método chamaria um serviço http (endpoint).
     */
    getCourses() {
        return ['Angular 2', 'Java', 'Ext JS'];
    }
}