function gameObject() {
  return {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      }
    }
  },
  away: {
    teamName: 'Charlotte Hornets',
    colors: ['Turquoise', 'Purple'],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    }
  }
}}


function homeTeamName() {
  let object = gameObject();
  return object['home']['teamName'];
};

function numPointsScored(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamsObj = game[gameKey];
    for (let data in teamsObj) {
      let playerKeys = teamsObj[data];
      for (let player in playerKeys){
        if (player === playerName) {
          return playerKeys[player].points;
        }
      }
    }
  }
  return `${playerName} not found. Please enter another name.`
}

function shoeSize(playerName) {
  let game = gameObject();
  for (let gameKey in game) {
    let teamsObj = game[gameKey];
    for (let data in teamsObj) {
      let playerKeys = teamsObj[data];
      for (let player in playerKeys) {
        if (player === playerName) {
          return playerKeys[player].shoe;
        }
      }
    }
  }
}

function teamColors(teamName) {
  const game = gameObject();
  const { home, away } = game;

  if (home.teamName === teamName) {
    return home.colors;
  } else if (away.teamName === teamName) {
    return away.colors;
  }
}

teamColors('Brooklyn Nets')

function teamNames() {
  const game = gameObject();
  const {home, away} = game;

  function showHomeName() {
    return home.teamName;
  }
  function showAwayName() {
    return away.teamName;
  }

  showHomeName();
  showAwayName();
}

teamNames();

function playerNumbers(teamName) {
  const game = gameObject();
  const {home, away} = game;

  if (home.teamName === teamName) {
    return Object.values(home.players).map(player => player.number);
  } else if (away.teamName === teamName) {
    return Object.values(away.players).map(player => player.number);
  }
}

playerNumbers();

function playerStats(playerName) {
  const game = gameObject();
  const {home, away} = game;
  const playerListHome = home.players;
  const playerListAway = away.players;

  for (let playerHome in playerListHome) {
    if (playerHome === playerName) {
      return playerListHome[playerName];
    }
  }
  for (let playerAway in playerListAway) {
    if (playerAway === playerName) {
      return playerListAway[playerName];
    }
  }
}

playerStats();

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let team in game) {
    const players = game[team].players;
    for (let playerName in players) {
      const player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    }
  }
  return rebounds;
}

bigShoeRebounds();