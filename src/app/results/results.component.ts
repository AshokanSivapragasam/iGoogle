import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { OrganicResult } from '../models/result.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  masterSearchTopics: string[] = ['One', 'Two', 'Three'];
  searchTopics: string[]
  searchText: string = '';
  searchResult: OrganicResult;
  searchResults: OrganicResult[];

  sleep(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  constructor(private router: Router, 
              private searchService: SearchService) {
    this.getIamFeelingLucky();
    this.getSearchResults();
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

  getSearchResults() {
    this.searchService.getSearchResults()
    .subscribe(_searchResults_ => this.searchResults = _searchResults_);
  }

  getIamFeelingLucky() {
    this.searchService.getIamFeelingLucky(1)
    .subscribe(_searchResult_ => this.searchResult = _searchResult_);
  }
}
