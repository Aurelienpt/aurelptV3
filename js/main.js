const lien = "https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/league/v4/positions/by-summoner/gKOWWzb3nvAP73XnsOaNPz9lbQ6e3c32vCWYx5YMPnSNeYI?api_key=RGAPI-c60e130e-811e-4d3b-9748-aca9e17df4f0"

window.axios.get(lien).then(response => {
    const data = response.data
    const division = data[0].tier + " " + data[0].rank

    document.getElementById("rank").innerHTML = division

    if (data[0].tier === "BRONZE") {
        document.getElementById("rank").style.color = "#8B4513"
    }

    if (data[0].tier === "IRON") {
        document.getElementById("rank").style.color = "#d6d6d6"
    }

    if (data[0].tier === "SILVER") {
        document.getElementById("rank").style.color = "#7a7a7a"
    }

    if (data[0].tier === "GOLD") {
        document.getElementById("rank").style.color = "#efe013"
    }
    
    if (data[0].tier === "PLATINUM") {
        document.getElementById("rank").style.color = "#31af6c"
    }

    if (data[0].tier === "DIAMOND") {
        document.getElementById("rank").style.color = "#27c6b6"
    }

    if (data[0].tier === "MASTER") {
        document.getElementById("rank").style.color = "#ad2dad"
    }
    
    if (data[0].tier === "GRANDMASTER") {
        document.getElementById("rank").style.color = "#b21328"
    }

    if (data[0].tier === "CHALLENGER") {
        document.getElementById("rank").style.color = "#ff960c"
    }

}).catch(err => {
    console.log(err)
})