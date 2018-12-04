export interface ArtistEntity {
  facebook: string;
  image: string;
  name: string;
}

export interface EventEntity {
  id: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  lat: number;
  long: number;
}
