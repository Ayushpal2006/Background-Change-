const url = "https://cat-fact.herokuapp.com/facts";

const api = async ()=>{
    let res =await fetch(url);
    // console.log(res);
    let data =await res.json();
    console.log(data[0].text);
}

api()