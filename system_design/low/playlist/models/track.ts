export class Track {
  id: string;
  artist: string;
  title: string;

  constructor(id: string, artist: string, title: string) {
    this.id = id;
    this.artist = artist;
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  getArtist() {
    return this.artist;
  }

  getId() {
    return this.id;
  }
}

export enum SORT_TYPE {
  ORDER,
  ARTIST,
  TITLE,
}
