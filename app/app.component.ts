import { Component, OnInit } from "@angular/core";
import { list } from "./1.ts";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  lstCauHoi = list;
  lstCauHoiNew: any = [];
  get code() {
    return JSON.stringify(this.lstCauHoi, null, 2);
  }
  ngOnInit() {
    this.lstCauHoi = this.lstCauHoi.content;
    console.log(this.lstCauHoi);
    this.lstCauHoi.forEach(e => {
      if (e.type == "image") {
        this.lstCauHoiNew += '<img src="' + e.url + '">';
      } else {
        this.lstCauHoiNew += e.content;
      }
    });
    //this.lstCauHoi = JSON.stringify(this.lstCauHoiNew);
    // console.log(this.lstCauHoiNew);
  }
}
