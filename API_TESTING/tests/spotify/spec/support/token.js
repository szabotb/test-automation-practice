const getToken = (async () => {

    const clientId = '0b1dcb8a65c6468e8fd3b94c57b860c9';
    const clientSecret = '2cb2045c97cd4f8eb66f3ecba8803c18';

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials',
    });

    const data = await result.json();
    return await data.access_token;
});

module.exports = { getToken };