export class ListItemModels {
  image: string;
  title: string;
  snippet: string;
  link: string;
  displayLink: string;

  constructor(resultData: any) {
    this.title = resultData.items.title;
    this.image = resultData.items.pagemap.cse_image[0].src;
    this.snippet = resultData.items.snippet;
    this.link = resultData.items.link;
    this.displayLink = resultData.items.displayLink;
  }
}
