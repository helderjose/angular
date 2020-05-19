import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //------------------------------------------
  //-------------- SECTION 7 --------------
  //------------------------------------------



  

  //----- SECTION 6 -----


  task = {
    title: 'Review applications',
    assignee: null
    // assignee: {
    //   name: 'John Smith'
    // }
  }


  canSave = true;
  // canSave = false;

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


  viewMode = "map";
  // viewMode = "somethingElse";

  // courses = [1, 2];
  // courses = [];
  //----- FIM SECTION 6 -----


  //----- SECTION 5 -----
  /*
  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log("Favorite changed: ", eventArgs);
  }

  tweet = {
    body: "...",
    likesCount: 10,
    isLiked: true
  }
  */
 //----- FIM SECTION 5 -----
}
