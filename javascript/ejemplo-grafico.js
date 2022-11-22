let miCanvas = document.getElementById("ejemplo-grafico").getContext("2d");

var chart = new Chart(miCanvas, {
    type: "bar",
    data: {
        labels: ["Vino", "Tequila", "Cerveza", "Ron"],
        datasets: [{
            label: "Mi grafica de bebidas",
            backgroundColor: "rgb(0,0,0)",
            borerColor: "rgb(0,255,0)",
            data: [12, 45, 66, 33]
        }]
    }
})