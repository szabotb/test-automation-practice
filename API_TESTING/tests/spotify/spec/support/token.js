const getToken = (async () => {

    const clientId = 'id';
    const clientSecret = 'secret';

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