const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://mixedcandy-eb4d.restdb.io/rest/slik-2", {
    method: "get",
    headers: {
        "x-apikey": "63f7ae1b478852088da685b1"
    }
})
  .then((e) => e.json())
  .then(showProducts);

function showProducts(products) {
  console.log("showProducts");

  produkter.forEach(showProduct);
}

function showProduct(product) {
  console.log("showProducts");

  const templateContent = document.querySelector("#slik_content").content;

  const clone = templateContent.cloneNode(true);
 
  clone.querySelector("img").setAttribute("src", `img/${evtlogo.png}`);
  clone.querySelector("h2").textContent = product.name;
  clone.querySelector("h3").textContent = product.brandname;
  clone.querySelector(".content").textContent = product.content;
  clone.querySelector(".energy").textContent = product.energy;
  clone.querySelector(".fat").textContent = product.fat + " g.";
  clone.querySelector(".saturated").textContent = product.saturatedFat + " g.";
  clone.querySelector(".carbohydrate").textContent = product.carbohydrate + " g.";
  clone.querySelector(".sugars").textContent = product.sugars + " g.";
  clone.querySelector(".protein").textContent = product.protein + " g.";
  clone.querySelector(".salt").textContent = product.salt + " g.";

  document.querySelector("#readmore").appendChild(clone);

  document.querySelector("#readmore").classList.add("appear");
}

