async function fetchNobleJSON() {
    const nobledata = await $.ajax({ url: `http://api.nobelprize.org/v1/prize.json`,method: "GET",dataType: "json" })
    nobleprize = nobledata[Object.keys(nobledata)[0]] //it was key val pair prize: arrays
    return nobleprize; 
  }
  fetchNobleJSON().then((function(data){
        temp = data
        year = temp.filter(item => item.year<=2019 && item.year>=2000)
        chemistry = year.filter(item => item.category=="chemistry")
        win = chemistry.map(function(item) {return (item.laureates)});
        arr = []
        win.forEach((element)=>{
            temp = element
            winner = temp.map(item=>item.firstname+" "+item.surname)
            arr.push(winner)})
        arr = arr.reduce((a, b) => a.concat(b), []); //arrays of arrays into a single array
        let div = document.createElement("div");
        arr.forEach((element)=>{
            let item = document.createElement("div")
            item.textContent = element;
            div.append(item); // Append to in-memory node, not the DOM
            })
        document.body.appendChild(div); // injecting completed node just once to the DOM
    })).catch(function (err) {
    console.log('error: ' + err);
    document.write(err);
    });;