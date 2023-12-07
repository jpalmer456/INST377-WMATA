function stationInfo() {
    console.log("You're in the function")

    const metroKey = "327336c3b459437b953cfabe8b3583c3"

    fetch("https://api.wmata.com/Rail.svc/json/jStations/" + metroKey)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
        });
}

window.onload = stationInfo;
