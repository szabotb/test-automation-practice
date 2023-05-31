const jasmine = require('jasmine');
const { searchForArtistByName, getArtistByID } = require('../support/getMusicInfo');

describe('Validate Search for and artist in Spotify', () => {
    it('Search for Artist and validate the result', async () => {
        const response = await searchForArtistByName('Nightwish');
        expect(response.artists.items[0].name).toEqual("Nightwish");
    });

    it('Get artist should result with the the correct artist', async () => {
        const response = await searchForArtistByName('Nightwish');
        const ARTIST_ID = response.artists.items[0].id
        
        const resultByID = await getArtistByID(ARTIST_ID)
        expect(resultByID.name).toEqual("Nightwish")
    });
});