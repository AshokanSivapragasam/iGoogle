import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith, delay} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  masterSearchTopics: string[] = ['One', 'Two', 'Three'];
  searchTopics: string[]
  searchText: string = '';

  sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.filterSearchTopics(this.searchText);
  }

  filterSearchTopics(searchText: string) : void {
    const searchTextValue = searchText.toLowerCase();
    this.searchTopics = this.masterSearchTopics.filter(searchTopic => searchTopic.toLowerCase().includes(searchTextValue));
  }

  searchFor(topic: string) {
    this.sleep(500).then(() => {
      console.log(topic);
      this.router.navigate(['results']);
    });
  }
}
