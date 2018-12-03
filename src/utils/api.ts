import { Artist, ArtistEvent } from '../types';

const apiFetch = (path: string) =>
  fetch(`https://rest.bandsintown.com${path}?app_id=someid`);

export const fetchArtist = async (query: string): Promise<Artist> => {
  const artistResponse = await apiFetch(`/artists/${query}`);
  const artist = await artistResponse.json();

  if (!artist) {
    throw new Error(`Artist @${query} not found!`);
  }

  return {
    facebook: artist.facebook_id,
    image: artist.image_url,
    name: artist.name
  };
};

export const fetchArtistEvents = async (
  artist: string
): Promise<ArtistEvent[]> => {
  const eventsResponse = await apiFetch(`/artists/${artist}/events`);
  const events = await eventsResponse.json();

  return Array.isArray(events)
    ? events.map(event => ({
        city: event.venue.city,
        venue: event.venue.name,
        date: new Date(event.datetime),
        country: event.venue.city
      }))
    : [];
};
