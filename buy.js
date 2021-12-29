function scam() {
    document.getElementById("price").innerHTML = "£5000000"
}


goatName = ["Moog", "Sage"]
const goatObj = [
    {
        "name": "Moog",
        "lore": "DELUXE GOAT",
        "image": "goat/faf566b9-d119-49dd-be6c-ee286934baed.jpg",
        "description": "Moog is a very calm full male Nigerian dwarf, he is nice natured and likes female goats.",
        "price": 500000
    },
    {
        "name": "Sage",
        "lore": "SMALL GOAT",
        "image": "goat/sage.jpeg",
        "description": "Sage is a cow and a fat goat and very fat and is more fat than a donkey :>",
        "price": 100000
    }
]
let theGoat = goatObj[goatName.indexOf(getUrlVars("goat"))]

if (goatObj[goatName.indexOf(getUrlVars("goat").goat)] != -1) {
    theGoat = goatObj[goatName.indexOf(getUrlVars("goat").goat)]
}


function start() {
    i = theGoat
        const main = document.createElement("div")
        main.class = "goatcontainer"
        document.getElementById("goats").appendChild(main)


        const img = document.createElement("img")
        img.classList.add("featured-image")
        img.src = i.image
        main.appendChild(img)

        const spacin = document.createElement("br")
        main.appendChild(spacin)

        const price = document.createElement("p")
        price.classList.add("price")
        price.id = "price"
        price.appendChild(document.createTextNode("£" + i.price))
        main.appendChild(price)

        const buy = document.createElement("button")
        buy.setAttribute("onclick", `buy()`)
        buy.appendChild(document.createTextNode("BUY NOW!"))
        main.appendChild(buy)
    
}



function buy() {
    document.body.innerHTML = `
    <h1>YOU GOT SCAMMED</h1>
    <h2>For ${document.getElementById("price").innerText}</h2>
    `
}

function changeL() {
    newp = 0
    switch (document.getElementById("length").value) {
        case "1d":
            newp = theGoat.price * 1
        break
        case "2d":
            newp = theGoat.price * 2
        break
        case "4d":
            newp = theGoat.price * 4
        break
        case "5d":
            newp = theGoat.price * 5
        break
        case "1w":
            newp = theGoat.price * 7
        break
    }
    document.getElementById("price").innerText = "£" + newp
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}




start()