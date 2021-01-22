import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dataService: DataService, private title: Title) {}

  ngOnInit() {
    this.dataService.generateTags({
      title: 'Curriculum - Sobre mí',
      description: 'Información acerca de mi.',
    });

    this.title.setTitle('Curriculum - Información sobre mí');

    this.dataService.generateTags({
      title: 'Curriculum - Nicolas Wagner',
      description: 'Algo sobre mí',
    });
  }
}
