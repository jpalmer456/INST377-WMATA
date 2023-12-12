function stationInfo() {
    const station = document.getElementById("station")
    const sidebar = document.getElementById("sidebar")

    const headers = {
        "api_key": "327336c3b459437b953cfabe8b3583c3"  
    }

    fetch("https://api.wmata.com/Rail.svc/json/jStations?", {headers})
        .then((res) => res.json())
        .then((res) => {
                no_stations = res.Stations.length;
                for (i=0; i<no_stations; i++) {
                    const option = document.createElement("option")
                    option.value = res.Stations[i].Code;
                    option.innerHTML = res.Stations[i].Name;
                    station.appendChild(option)
                }
        })

    fetch("https://api.wmata.com/Incidents.svc/json/Incidents", {headers})
        .then((res) => res.json())
        .then((res) => {
        console.log(res.Incidents.length)
        if(res.Incidents.length == 0) {
            document.getElementById("sidebar").innerHTML = "There are currently no rail incidents :)"
        } else {
            incident_list = res.Incidents.length;
            for (i=0; i<res.incidents.length; i++) {
                const incident = document.createElement("incident")
                incident.innerHTML = res.Incidents[i].Description;
                sidebar.appendChild(option)
            }
        }
    })
} 
    
function selectedStation() {
    const selectedStation = document.getElementById("station").value

    const headers = {
        "api_key": "327336c3b459437b953cfabe8b3583c3", 
    }

    fetch(`https://api.wmata.com/Rail.svc/json/jStationInfo?StationCode=${selectedStation}`, {headers})
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            document.getElementById("stationInformation").innerHTML = `Station Name: ${res.Name} <br> Address: ${res.Address.Street}, ${res.Address.City}, ${res.Address.State} ${res.Address.Zip}`
        })

    fetch(`https://api.wmata.com/Rail.svc/json/jStationTimes?StationCode=${selectedStation}`, {headers})
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            document.getElementById("stationTimes").innerHTML = `Opening Time: ${res.StationTimes[0].Monday.OpeningTime}`
        })
}

window.onload = stationInfo;