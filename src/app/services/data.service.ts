import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Meta } from '@angular/platform-browser';

const url = 'https://api.github.com/users/wolox/repos';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  items: any[];

  constructor(private http: HttpClient, private meta: Meta) {}

  getRepositories() {
    if (this.items) {
      return of(this.items);
    } else {
      return this.http.get(url);
    }
  }

  generateTags(config: any) {
    // default
    config = {
      title: 'Curriculum - Nicolas Wagner',
      description: 'Me llamo Nicolás Wagner y soy Desarrollador Web FullStack',
    };

    this.meta.updateTag({ name: 'title', content: config.title });
    this.meta.updateTag({ name: 'description', content: config.description });
  }
}
