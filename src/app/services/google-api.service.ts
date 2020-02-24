import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {ListGItem} from '../interfaces/list-gitem';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  googleApiUrl = 'https://www.googleapis.com/customsearch/v1?key=';
  googleApiKeyAccess = 'AIzaSyA8stgDBEnqlGlJjECdTiMS10291dFzaSE';
  googleSearchEngineID = '007240366113686025281:prgx4yh1iqb';

  constructor(private http: HttpClient) {
  }

  getResults(searchData: string): Observable<Array<ListGItem>> {
    return this.http.get(
      this.googleApiUrl
      + this.googleApiKeyAccess
      + '&cx=' + this.googleSearchEngineID
      + '&q=' + searchData
    ).pipe(
      map((data: any) => {
        const dataObject: Array<ListGItem> = [];
        data.items.forEach(item => {
          dataObject.push({
            title: item.title,
            link: item.link,
            displayLink: item.displayLink,
            snippet: item.snippet
          });
        });
        return dataObject;
      })
    );
  }
}

