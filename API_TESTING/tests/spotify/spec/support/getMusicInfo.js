const { getToken } = require("./token");

const searchForArtistByName = async (artistName) => {
    let token = await getToken();

    const result = await fetch(`https://api.spotify.com/v1/search?q=artist%3A${artistName}&type=artist`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const data = await result.json();
    //console.log(data.artists.items[0].id)
    return data;
};

const getArtistByID = async (artistID) => {
    let token = await getToken();

    const result = await fetch(`https://api.spotify.com/v1/artists/${artistID}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const data = await result.json();
    //console.log(data.artists.items[0].id)
    return data;
};

module.exports = { searchForArtistByName, getArtistByID };
