// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface Artist {
  facebook: string;
  image: string;
  name: string;
}

export interface ArtistEvent {
  date: Date;
  venue: string;
  city: string;
  country: string;
}
