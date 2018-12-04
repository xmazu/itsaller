// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ArtistEntity {
  facebook: string;
  image: string;
  name: string;
}

export interface EventEntity {
  date: Date;
  venue: string;
  city: string;
  country: string;
}
