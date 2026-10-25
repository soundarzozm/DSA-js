import { Track, SORT_TYPE } from "./track.ts";

export class Playlist {
  id: string;
  name: string;
  tracks: Array<Track>;
  original: Array<Track>;
  sorted: SORT_TYPE;

  constructor(id: string, name: string, tracks: Array<Track> = []) {
    this.id = id;
    this.name = name;
    this.tracks = tracks;
    this.original = tracks;
  }

  sortPlaylist(type: SORT_TYPE): void {
    let tracks = [...this.original];

    switch (type) {
      case SORT_TYPE.ARTIST:
        this.tracks = tracks.sort((a, b) =>
          a.getArtist().localeCompare(b.getArtist()),
        );
        break;
      case SORT_TYPE.TITLE:
        this.tracks = tracks.sort((a, b) =>
          a.getTitle().localeCompare(b.getTitle()),
        );
        break;
      default:
        this.tracks = tracks;
        break;
    }

    this.sorted = type;
  }

  getTracks(): Track[] {
    return this.tracks;
  }

  // O(log(n))
  // Currently -> O(nlog(n)) (Can be optimized)
  addTrack(track: Track): void {
    if (this.original.some((existingTrack) => existingTrack.id === track.id)) {
      return;
    }

    this.original.push(track);
    this.sortPlaylist(this.sorted);
  }

  removeTrack(trackId: string): void {
    this.original = this.original.filter(
      (track: Track) => track.id !== trackId,
    );
    this.tracks = this.tracks.filter((track: Track) => track.id !== trackId);
  }

  setName(name: string): void {
    this.name = name;
  }

  resetPlaylist(): void {
    this.sortPlaylist(SORT_TYPE.ORDER);
  }
}

// Add track
// - Keep it sorted
// Remove track
// Update playlist name
