import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {ListYTItem} from '../interfaces/list-ytitem';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  YTApiUrl = 'https://www.googleapis.com/youtube/v3/search?key=';
  YTApiKeyAccess = 'AIzaSyBcDN4xUDTaEzz3wo5uretcWTc0IZ13mSA';
  maxResults = 10;

  constructor(private http: HttpClient) {
  }

  getResults(searchData: string): Observable<Array<ListYTItem>> {
    return this.http.get(
      this.YTApiUrl
      + this.YTApiKeyAccess
      + '&q=' + searchData
      + '&order=rating&part=snippet&type=video,id&maxResults=' + this.maxResults
    ).pipe(
      map((data: any) => {
        const dataObject: Array<ListYTItem> = [];
        data.items.forEach(item => {
          dataObject.push({
            id: item.id.videoId,
            snippet: {
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails.high.url
            }
          });
        });
        return dataObject;
      })
    );
  }
}
