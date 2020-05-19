import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  // styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}



// versao original
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'new-course-form',
//   templateUrl: './new-course-form.component.html',
//   styleUrls: ['./new-course-form.component.css']
// })
// export class NewCourseFormComponent implements OnInit {

//   categories = [
//     {id: 1, name: "Development"},
//     {id: 2, name: "Art"},
//     {id: 3, name: "Languages"}
//   ];

//   submit(course) {
//     console.log(course);
//   }

//   constructor() { }

//   ngOnInit() {
//   }

// }
