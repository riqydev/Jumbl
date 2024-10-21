const leaderboard_container = document.querySelector(".leaderboard");

const backendURL = window.config.BACKEND_URL;

const leaderboard_item_template = (rank, username, score) =>`<div class="leaderboard__item item">
            <p class="leaderboard__place">${rank}</p>
            <p class="leaderboard__user">${username}</p>
            <p class="leaderboard__score">${score}pts</p>
        </div>`

//populateLeaderboard();

window.onload = (e) => {
    populateLeaderboard();
}

function refresh() {
    window.location.reload();
}

function goToGame() {
    window.location.assign("./")
}

async function populateLeaderboard(){
    const usersByScore = await getLeaderboard();
    usersByScore.forEach(user => {
        leaderboard_container.innerHTML += leaderboard_item_template(usersByScore.indexOf(user) + 1, user.username, user.highscore)
    });
}

async function getLeaderboard(){
    try
    {
        const response = await fetch(backendURL + "/leaderboard", {
            method: "GET",
            headers: {"Content-Type" : "application/json"}
        })

        const data = await response.json();
        return data.users;
    } 
    catch (err)
    {
        console.error(err)
    }
}

