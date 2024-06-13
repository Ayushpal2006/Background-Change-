
var url = `https://jsonplaceholder.typicode.com/posts`;
async function api(){
    let response = await fetch(url);
    let data = await response.json();

}