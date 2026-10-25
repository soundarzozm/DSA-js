// How would you design the playlist feature in any music app?
// Features:
// 1. Sort playlist
// 2. Shuffle
// 3. Able to add & remove songs

// Sory by:
// 1. Artist
// 2. Title
// 3. Order you added the song to the playlist
import { Playlist } from "./models/playlist.ts";
import { Track, SORT_TYPE } from "./models/track.ts";

const tracks = [
  new Track("1", "Travis Scott", "Sicko Mode"),
  new Track("2", "Drake", "Whisper My Name"),
  new Track("3", "Drake", "Janice STFU"),
];

const playlist = new Playlist("1", "Hip-Hop", tracks);

playlist.sortPlaylist(SORT_TYPE.TITLE);
playlist.addTrack(new Track("4", "Nova Blue", "Weekend Cinderella"));

console.log(playlist);

playlist.removeTrack("3");
playlist.setName("Night Drive");

playlist.resetPlaylist();

console.log(playlist);
