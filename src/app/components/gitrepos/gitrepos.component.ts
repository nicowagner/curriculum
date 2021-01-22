import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.scss'],
})
export class GitreposComponent implements OnInit {
  items: any = '';

  constructor(public dataService: DataService, private title: Title) {}

  ngOnInit() {
    this.dataService.getRepositories().subscribe((data: any[]) => {
      this.items = data;
      console.log('Repositorios de Wolox', this.items);
    });

    this.title.setTitle('Curriculum - Repositorios Github');

    this.dataService.generateTags({
      description: 'Lista de Repositorios en Github',
    });
  }
}
