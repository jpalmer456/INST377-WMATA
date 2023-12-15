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
        incident_list = res.Incidents.length;
        if(incident_list == 0) {
            document.getElementById("sidebar").innerHTML = "There are currently no rail incidents :)"
        } else {
            for (i=0; i<incident_list; i++) {
                const incident = document.createElement("incident")
                incident.innerHTML = `${res.Incidents[i].Description}<br><br>`;
                sidebar.appendChild(incident)
            }
        }
    })
} 
    
function selectedStation() {
    const selectedStation = document.getElementById("station").value
    const elevators = document.getElementById("elevators")

    const headers = {
        "api_key": "327336c3b459437b953cfabe8b3583c3", 
    }

    fetch(`https://api.wmata.com/Rail.svc/json/jStationInfo?StationCode=${selectedStation}`, {headers})
        .then((res) => res.json())
        .then((res) => {
            document.getElementById("stationAddress").innerHTML = `<b>Station Name:</b> ${res.Name} <br> <b>Address:</b> ${res.Address.Street}, ${res.Address.City}, ${res.Address.State} ${res.Address.Zip}`
        })

    fetch(`https://api.wmata.com/Rail.svc/json/jStationTimes?StationCode=${selectedStation}`, {headers})
        .then((res) => res.json())
        .then((res) => {
            document.getElementById("stationTimes").innerHTML = `<b>Opening Time:</b> ${res.StationTimes[0].Monday.OpeningTime}`
        })

    fetch(`https://api.wmata.com/Incidents.svc/json/ElevatorIncidents?StationCode=${selectedStation}`, {headers})
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            elevator_list = res.ElevatorIncidents.length
            if(elevator_list == 0) {
                document.getElementById("elevators").innerHTML = "Your selected station has no elevator/escalator outages."
            }
            else {
                const outage = document.createElement("outage")
                outage.innerHTML = `<h2> Alert! </h2><br> The ${res.ElevatorIncidents[1].LocationDescription} at ${res.ElevatorIncidents[1].StationName} is out of service.`
                elevators.appendChild(outage)
            }
        })
}

window.onload = stationInfo;