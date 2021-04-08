const axios = require('axios');

axios.get("http://api.themoviedb.org/3/search/movie?&api_key=3583464c166eb3446babdeabbc188153&query=raaz").then(resp => {

    // console.log(resp.data);
    
    let a=resp.data["results"]
    // console.log(a)
for (i in a){
    console.log(i," ",a[i]["original_title"])

}
    



  
});



