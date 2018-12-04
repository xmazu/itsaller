const mockFetch = (data: any) =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => data
    })
  );

import { fetchArtist, fetchArtistEvents } from './api';
import plainArtistMock from './__mocks__/plain_artist.json';
import mappedArtistMock from './__mocks__/mapped_artist.json';

describe('fetchArtist()', () => {
  it('should fetch and map the data', async () => {
    window.fetch = mockFetch(plainArtistMock);

    const artist = await fetchArtist('maroon5');
    expect(artist).toEqual(mappedArtistMock);
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  it('should throw exception', async () => {
    expect.assertions(1);
    const name = 'definitely not existing artist';
    window.fetch = mockFetch('');
    try {
      await fetchArtist(name);
    } catch (e) {
      expect(e.message).toEqual(`Artist @${name} not found!`);
    }
  });
});

import plainEventsMock from './__mocks__/plain_events.json';
import mappedEventsMock from './__mocks__/mapped_events.json';

describe('fetchArtistEvents()', () => {
  it('should fetch and map the data', async () => {
    window.fetch = mockFetch(plainEventsMock);

    const events = await fetchArtistEvents('maroon5');
    expect(events).toEqual(
      mappedEventsMock.map(event => ({
        ...event,
        date: new Date(event.date)
      }))
    );
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });
});
