fetch("https://mixedcandy-eb4d.restdb.io/rest/slik-2", {
    method: "get",
    headers: {
        "x-apikey": "63f7ae1b478852088da685b1"
    }
})
.then((e)=> e.json())
.then (doSomething);

function doSomething (data) {
    console.log (data);
}