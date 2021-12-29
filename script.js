function scam() {
    document.getElementById("price").innerHTML = "£5000000"
}

const goatObj = [
    {
        "name": "Moog",
        "lore": "DELUXE GOAT",
        "image": "goat/faf566b9-d119-49dd-be6c-ee286934baed.jpg",
        "description": "Moog is a very calm full male Nigerian dwarf, he is nice natured and likes female goats.",
        "price": 500
    },
    {
        "name": "Sage",
        "lore": "SMALL GOAT",
        "image": "goat/sage.jpeg",
        "description": "Sage is a cow and a fat goat and very fat and is more fat than a donkey :>",
        "price": 100
    }
]



function start() {
    for (i of goatObj) {
        const main = document.createElement("div")
        main.class = "goatcontainer"
        document.getElementById("goats").appendChild(main)

        const title = document.createElement("h2")
        title.appendChild(document.createTextNode(i.name))
        main.appendChild(title)

        const img = document.createElement("img")
        img.classList.add("featured-image")
        img.src = i.image
        main.appendChild(img)

        const spacin = document.createElement("br")
        main.appendChild(spacin)

        const lore = document.createElement("strong")
        lore.appendChild(document.createTextNode(i.lore))
        main.appendChild(lore)

        const desc = document.createElement("p")
        desc.appendChild(document.createTextNode(i.description))
        main.appendChild(desc)

        const price = document.createElement("p")
        price.classList.add("price")
        price.id = i.name + "Price"
        price.appendChild(document.createTextNode("£" + i.price))
        main.appendChild(price)

        const buy = document.createElement("button")
        buy.setAttribute("onclick", `buy('${i.name}')`)
        buy.appendChild(document.createTextNode("BUY NOW!"))
        main.appendChild(buy)
    }
}

start()

function buy(goat) {
    window.location.href = "./buy.html?goat=" + goat
}