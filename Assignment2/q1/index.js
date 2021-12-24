fetch(`https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
insightData(data);
})
.catch(function (err) {
console.log('error: ' + err);
});

    function insightData(data){
        const unique_genres = [...new Set(data.map(item => item.genres))];
        var result =  unique_genres.filter(e => e.length); //removing empty arrays
        var merged = [].concat.apply([], result); //array of arrays into a array
        var movies_genres = [...new Set(merged)]; //keep only unique

        const actors = [...new Set(data.map(item => item.cast))];
        var remove_empty =  actors.filter(e => e.length);
        var merged_actors = [].concat.apply([], remove_empty);
        var actors_movies = [...new Set(merged_actors)];

        actors_movies.forEach(actor)
        function actor(item){
            let movie = []
            data.forEach(function(e){
                if(e.cast.find(n=>n==item)){
                    movie.push(e.title)
                }
            })
            const movieslist = JSON.stringify(movie)
            const charactersDiv = document.querySelector("#mydata");
            const cast = document.createElement("p");
			cast.innerText = `Name: ${item}`;
            const movies = document.createElement("p");
		    movies.innerText = `Movies: ${movieslist}`;
            charactersDiv.append(cast)
			charactersDiv.append(movies);
        }

        movies_genres.forEach(movies)
        function movies(item){
            let movie = []
            data.forEach(function(e){
                if(e.genres.find(n => n==item)){
                    movie.push(e.title)
                }
            })
            const movieslist = JSON.stringify(movie)
            const charactersDiv = document.querySelector("#mydata");
            const genre = document.createElement("p");
			genre.innerText = `Type: ${item}`;
            const movies = document.createElement("p");
		    movies.innerText = `Movies: ${movieslist}`;
            charactersDiv.append(genre)
			charactersDiv.append(movies);
        }
    }