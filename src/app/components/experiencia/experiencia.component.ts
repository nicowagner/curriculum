import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
})
export class ExperienciaComponent implements OnInit {
  constructor(public dataService: DataService, private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Curriculum - Experiencia Laboral');
    this.dataService.generateTags({
      description: 'Mi experiencia laboral',
    });
  }
}
