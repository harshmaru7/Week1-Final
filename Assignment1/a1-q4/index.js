async function fetchFlightJSON() {
    const flight = await $.ajax({ url: `https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json`,method: "GET",dataType: "json" })
    return flight;
  }
  fetchFlightJSON().then(data => {
    data.forEach(function(e){
        let sum = e.Statistics.Flights.Cancelled+e.Statistics.Flights.Delayed+e.Statistics.Flights.Diverted+e.Statistics.Flights['On Time']
        let val = sum==e.Statistics.Flights.Total ? "True" : "False"
        const charactersDiv = document.querySelector("#mydata");
        const airport = document.createElement("p");
        airport.innerText = `Airport name: ${e.Airport.Name}`;
        const tally = document.createElement("p");
        tally.innerText = `Tally: ${val}`;
        charactersDiv.append(airport)
        charactersDiv.append(tally);
    })
  }).catch(function (err) {
    console.log('error: ' + err);
    document.write(err);
    });;