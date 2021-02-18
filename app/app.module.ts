import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgxJsonViewerModule, AceEditorModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
