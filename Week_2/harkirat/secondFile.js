function ResponseBody(body){
    console.log(body);
}

function CallbackFn(result){
    result.json().then(ResponseBody)
}

var sendObj={
    method:"GET"
};

fetch("http://localhost:3000/CalculatedSum?counter=10",sendObj).then(CallbackFn)
