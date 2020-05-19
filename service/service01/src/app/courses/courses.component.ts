import { CoursesService } from './couses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses;

  /**
   * 
   * Injeção de dependência: aqui injetamos CoursesServices, isso evita o uso do operador new e facilita
   * a criação de um service fake para teste integrado
   */
  constructor(coursesService: CoursesService) {
    this.courses = coursesService.getCourses();
  }
}
