import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrganicResult } from './models/result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiRootUri = '/api/googleSearch';
  constructor(private httpClient: HttpClient) { }

  getSearchResults(): Observable<OrganicResult[]> {
    return this.httpClient.get<OrganicResult[]>(this.apiRootUri);
  }

  getIamFeelingLucky(resultId: number): Observable<OrganicResult> {
    const searchUrl = `${this.apiRootUri}/${resultId}`;
    return this.httpClient.get<OrganicResult>(searchUrl);
  }
}
