var queried = window. prompt("Enter your query: "); 
var link = `https://api.github.com/search/repositories?q=${queried}`
ajaxCall1(link)
function ajaxCall1(link){
	$.ajax({ url: `${link}`,
			method: "GET",
			dataType: "json" })
            .then(function(data){
                post = data
				for (let j = 1; j < post.items.length; j++) {
				var ownerlink = `${post.items[j].owner.url}`
				ajaxCall2(ownerlink,j);}
            })
            .catch(function (err) {
				console.log('error: ' + err);   
            });
}
function ajaxCall2(ownerlink,j){
    $.ajax({
		url: `${ownerlink}`,
   		method: "GET",
    	dataType: "json"})
        .then(function(FData){
			Followers = FData.followers;
			Following = FData.following;
			oname = FData.name;
			let l = post.items[j].license; 
			let str = post.items[j].branches_url;
			// str = str.slice(0,- 9);
			let branchlink = str.slice(0,- 9);
            ajaxCall3(branchlink,j);
        })
		.catch(function (err) {
			console.log('error: ' + err);   
		});
    
}
function ajaxCall3(branchlink,j){
    $.ajax({
		url: `${branchlink}`,
   		method: "GET",
    	dataType: "json"})
        .then(function(BData){
            BranchD = BData
			var licenseval
			if (post.items[j].license==null){licenseval =  post.items[j].license.name}
			else{licenseval=="Null"}
			const start = document.createElement("p");
			start.innerText = `{`;
			const charactersDiv = document.querySelector("#mydata");
			const name = document.createElement("p");
			name.innerText = `Name: ${post.items[j].name}`;
			const fullname = document.createElement("p");
			fullname.innerText = `Full Name: ${post.items[j].full_name}`;
			const private = document.createElement("p");
			private.innerText = `Private: ${post.items[j].private}`;
			const login = document.createElement("p");
			login.innerText = `Login: ${post.items[j].owner.login}`;
			const ownername = document.createElement("p");
			ownername.innerText = `Owner Name: ${oname}`;
			const followers = document.createElement("p");
			followers.innerText = `Followers: ${Followers}`;
			const following = document.createElement("p");
			following.innerText = `Followers: ${Following}`;
			const license = document.createElement("p");
			license.innerText = `License: ${licenseval}`;
			const score = document.createElement("p");
			score.innerText = `Score: ${post.items[j].score}`;
			const branches = document.createElement("p");
			branches.innerText = `Branches: ${BData.length}`;
			const end = document.createElement("p");
			end.innerText = `}`;

			charactersDiv.append(start)
			charactersDiv.append(name);
			charactersDiv.append(fullname);
			charactersDiv.append(private);
			charactersDiv.append(login);
			charactersDiv.append(ownername);
			charactersDiv.append(followers);
			charactersDiv.append(following);
			charactersDiv.append(license);
			charactersDiv.append(score);
			charactersDiv.append(branches);
			charactersDiv.append(end)
        }).catch(function (err) {
			console.log('error: ' + err);   
		});
}
 
