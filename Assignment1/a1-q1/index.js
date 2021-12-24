fetch("./battles.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
    insightData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
            
function insightData(data) {

    battles = data;
    var frequency = {};  // array of frequency.
    var max_attackerking = 0; 
    var max_defenderking = 0;
    var max_region = 0;
    var result_attackerking;
    var result_defenderking;
    var result_region;
    battles.forEach(function(e){
        frequency[e.attacker_king]=(frequency[[e].attacker_king] || 0)+1; // increment frequency.
        if(frequency[e.attacker_king] > max_attackerking) { // is this frequency > max so far ?
                max_attackerking = frequency[e.attacker_king];  // update max.
                result_attackerking = e.attacker_king;          // update result.
        }
        frequency[e.region]=(frequency[e.region] || 0)+1; 
        if(frequency[e.region] > max_region) { 
                max_region = frequency[e.region];  
                result_region = e.region;     
        }
    })
    var frequency2 = {};
    battles.forEach(function(e){
        frequency2[e.defender_king]=(frequency2[e.defender_king] || 0)+1; 
        if(frequency2[e.defender_king] > max_defenderking) { 
                 max_defenderking = frequency2[e.defender_king]; 
                 result_defenderking = e.defender_king; }
    })
    var find_name = battles.find(item => item.region== result_region && item.defender_king == result_defenderking && item.attacker_king== result_attackerking);
    var result_name = find_name.name

    var totalWins = data.filter(function(d) { return d.attacker_outcome === "win"; }).length;
    var totalLosses = data.filter(function(d) { return d.attacker_outcome === "loss"; }).length;

    const unique_battles = [...new Set(data.map(item => item.battle_type))];

    var min = Math.min.apply(null, data.map(function(item) {
        return item.defender_size;
      })),
      max = Math.max.apply(null, data.map(function(item) {
        return item.defender_size;
      }));
    var sum = data.reduce(function(sum, current) {
        return sum + current.defender_size;
      }, 0)
    var l = Object.keys(data).length;
    average = sum/l;
    document.getElementById("attacker").innerHTML = "attacker_king : " +result_attackerking;
    document.getElementById("defender").innerHTML = "defender_king : " +result_defenderking;
    document.getElementById("region").innerHTML =  "region: " +result_region;
    document.getElementById("name").innerHTML =  "name: " +result_name;
    document.getElementById("wins").innerText = "win: " +totalWins;
    document.getElementById("loss").innerText = "loss: " +totalLosses;
    document.getElementById("avgs").innerText = "Average Value: " +average;    
    document.getElementById("maxds").innerText = "Minimum value : "+min;  
    document.getElementById("minds").innerText = "Maximum value : "+max;
    document.getElementById("btypes").innerText = "battle_type: [" +unique_battles +"]";
}


      