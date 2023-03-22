export interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

export interface SpotifyResponse {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

export interface SpotifyTrack {
  external_urls: { spotify: string };
  name: string;
  artists: Array<{ name: string }>;
  id: string;
}

export interface Track {
  songUrl: string;
  artists: string;
  title: string;
  id: string;
}

export interface TopSpotifyTracks {
  tracks: Track[];
}
