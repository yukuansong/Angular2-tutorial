import { Component } from '@angular/core';
import '../../public/css/styles.css';

import {QuestionService} from './dynamicForm/question.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent { 

  questions: any[];

  constructor(service: QuestionService){
    this.questions = service.getQuestions();
  }
}
