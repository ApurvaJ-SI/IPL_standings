var standings = [
    {
        "Team": "GT",
        "Matches": 14,
        "Won": 10,
        "Loss": 4,
        "NRR": 0.809,
        "Pts": 20,
        "Last5":"WWLWW"
    },
    {
        "Team": "CSK",
        "Matches": 14,
        "Won": 8,
        "Loss": 5,
        "NRR": 0.652,
        "Pts": 17,
        "Last5":"WLWWN"
    },
    {
        "Team": "LSG",
        "Matches": 14,
        "Won": 8,
        "Loss": 5,
        "NRR": 0.284,
        "Pts": 17,
        "Last5":"WWWLN"
    },
    {
        "Team": "MI",
        "Matches": 14,
        "Won": 8,
        "Loss": 6,
        "NRR": -0.044,
        "Pts": 16,
        "Last5":"WLWWL"
    },
    {
        "Team": "RR",
        "Matches": 14,
        "Won": 7,
        "Loss": 7,
        "NRR": 0.148,
        "Pts": 14,
        "Last5":"WLWLL"
    },
    {
        "Team": "RCB",
        "Matches": 14,
        "Won": 7,
        "Loss": 7,
        "NRR": 0.135,
        "Pts": 14,
        "Last5":"LWWLL"
    },
    {
        "Team": "KKR",
        "Matches": 14,
        "Won": 6,
        "Loss": 8,
        "NRR": -0.239,
        "Pts": 12,
        "Last5":"LWLWW"
    },
    {
        "Team": "PBKS",
        "Matches": 14,
        "Won": 6,
        "Loss": 8,
        "NRR": -0.304,
        "Pts": 12,
        "Last5":"LLWLL"
    },
    {
        "Team": "DC",
        "Matches": 14,
        "Won": 5,
        "Loss": 9,
        "NRR": -0.808,
        "Pts": 10,
        "Last5":"LWLLW"
    },
    {
        "Team": "SRH",
        "Matches": 14,
        "Won": 4,
        "Loss": 10,
        "NRR": -0.590,
        "Pts": 8,
        "Last5":"LLLLW"
    }
]

for(var i in standings){
    var row = `<tr>
                    <td>${standings[i].Team}</td>
                    <td>${standings[i].Matches}</td>
                    <td>${standings[i].Won}</td>
                    <td>${standings[i].Loss}</td>
                    <td>${standings[i].NRR}</td>
                    <td>${standings[i].Pts}</td>
                    <td>${standings[i].Last5}</td>
                </tr>`
                
    var table =$('#userdata')
    table.append(row)

}