import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [];

  onAdd() {
    this.courses.push({ id: 4, name: "course4" });
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  
  onChange(course) {
    course.name = "updated";
  }

  loadCourses() {
    this.courses = [
      {id: 1, name: "course1"},
      {id: 1, name: "course2"},
      {id: 1, name: "course3"},
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }
}
