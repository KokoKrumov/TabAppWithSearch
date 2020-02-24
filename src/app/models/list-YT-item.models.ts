export class ListYTItemModels {
  id: string;
  title: string;
  description: string;
  image: string;

  constructor(resultData: any) {
    this.id = resultData.items.id.videoId;
    this.title = resultData.items.snippet.title;
    this.description = resultData.items.snippet.description;
    this.image = resultData.items.snippet.thumbnails.high.url;
  }
}
