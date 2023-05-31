const { getToken } = require("./token");
//31gozu5oqhln7csoa32wdmtsfipi

const getUserInfo = async () => {
    let token = await getToken();

    const result = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });

    const data = await result.json();
    return await data;
};

(async () => {
    console.log(await getToken());
    console.log(await getUserInfo());
})();