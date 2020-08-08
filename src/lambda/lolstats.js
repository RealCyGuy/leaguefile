const fetch = require("node-fetch");

exports.handler = function(event, context, callback) {
  const region = event.queryStringParameters.region;
  const regions = [
    "br1",
    "eun1",
    "euw1",
    "jp1",
    "kr",
    "la1",
    "la2",
    "na1",
    "oc1",
    "tr1",
    "ru",
  ];

  if (!regions.includes(region)) {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ error: true }),
    });
  }

  const username = event.queryStringParameters.username;
  const base = `https://${region}.api.riotgames.com`;
  const stats = {};

  (async () => {
    var response = await fetch(
      `${base}/lol/summoner/v4/summoners/by-name/${username}`,
      {
        headers: { "X-Riot-Token": process.env.API_KEY },
      }
    );
    if (response.status == 404) {
      callback(null, {
        statusCode: 404,
        body: JSON.stringify({ notFound: true }),
      });
    } else if (!response.ok) {
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({ error: true }),
      });
    }

    var json = await response.json();

    stats.icon = `https://raw.communitydragon.org/10.15/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${json.profileIconId}.jpg`;
    stats.level = json.summonerLevel.toString();
    stats.username = json.name

    stats.done = true;
    stats.date = Date();
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(stats),
    });
  })();
};
