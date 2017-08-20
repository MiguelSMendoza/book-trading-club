
export class Book {
    public $key: string;

      constructor(
          public title: string,
          public author: string,
          public isbn: string,
          public description: string,
          public thumbnail: string,
          public owner: string,
          public ownerName: string,
          public trader: string,
          public traderName: string,
          public timestamp: number
      ) { }
  }
