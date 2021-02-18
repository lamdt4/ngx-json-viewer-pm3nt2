import { Component, OnInit } from '@angular/core';
import { list} from './1.ts'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  lstCauHoi = list;
  lstCauHoiNew: any = [];
  get code () {
    return JSON.stringify(this.lstCauHoi, null, 2);
  }
    ngOnInit() {
    this.lstCauHoi = this.lstCauHoi.list_quiz;
    console.log(this.lstCauHoi)
    this.lstCauHoi.forEach(e => {
      let giaiThich = '';
      let goiY = '';
      e.solution_detail.forEach(element => {
        if (element) {
if (element.type == 'html') {
          giaiThich += element.content;
        } else if (element.type == 'image'){
          giaiThich += element.url;
        }
        }
        
      });

      if (e.solution_suggesstion.length > 0) {
        e.solution_suggesstion.forEach(element => {
          if (element) {
          if (element.type == 'html') {
            goiY += element.content;
          } else if (element.type == 'image'){
            goiY += element.url;
          }}
        });
      } else {
        e.related_lesson.forEach(element => {
          goiY += element.relate_alias;
        });
      } 
      
      const item = {question: e.question.content, options: e.question.answers, 
        solution_suggesstion: goiY, solution_detail: giaiThich};
      this.lstCauHoiNew.push(item);
    });
    this.lstCauHoi = JSON.stringify(this.lstCauHoiNew);
    // console.log(this.lstCauHoiNew);
  }
}
