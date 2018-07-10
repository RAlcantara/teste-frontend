import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule, MatListModule, MatLineModule, MatCardModule,MatGridListModule, MatMenuModule,MatFormFieldModule,MatDialogModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
   AppComponent,
    TaskItemComponent,
    TaskListComponent,

  ],
  entryComponents: [
   TaskItemComponent
 ],
  imports: [
   //  HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatLineModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    HttpClientModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDialogModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
