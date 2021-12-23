function scam() {
    document.getElementById("price").innerHTML = "£5000000"
}

const goatObj = [
    {
        "name": "Moog",
        "lore": "DELUXE GOAT",
        "image": "goat/faf566b9-d119-49dd-be6c-ee286934baed.jpg",
        "description": "Moog is a very calm full male Nigerian dwarf, he is nice natured and likes female goats.",
        "price": 500000
    }
]



function start() {
    for (i of goatObj) {
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
}

start()

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
            newp = goatObj[0].price * 1
        break
        case "2d":
            newp = goatObj[0].price * 2
        break
        case "4d":
            newp = goatObj[0].price * 4
        break
        case "5d":
            newp = goatObj[0].price * 5
        break
        case "1w":
            newp = goatObj[0].price * 7
        break
    }
    document.getElementById("price").innerText = "£" + newp
}