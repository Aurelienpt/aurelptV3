const lien = "https://euw1.api.riotgames.com/lol/league/v4/positions/by-summoner/gKOWWzb3nvAP73XnsOaNPz9lbQ6e3c32vCWYx5YMPnSNeYI?api_key=RGAPI-c60e130e-811e-4d3b-9748-aca9e17df4f0;"

fetch(lien).then(data => {
    print(data)
})