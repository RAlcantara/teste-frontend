import { Component } from '@angular/core';

import { TaskService } from './task.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
   title = 'app';
   results = '';
   constructor(private http: HttpClient){


   }
   ngOnInit(): void {
      this.http.get('https://git.sebraemg.com.br/publico/test-frontend/raw/master/api/courses.json').subscribe(data => {
        console.log('oi',data);
      });
    }

    


}
