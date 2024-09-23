function obtenerDatos() {
    fetch('http://192.168.1.40/datos')  // IP del esp32
        .then(response => response.json())
        .then(data => {
            document.getElementById('est32').textContent = data.est32;
            document.getElementById('estluces').textContent = data.estluces ? "Prendidas" : "Apagadas";
            document.getElementById('hora').textContent = data.hora;
            document.getElementById('esttanque').textContent = data.esttanque ? "Tanque lleno" : "Falta agua";
            document.getElementById('temperatura').textContent = data.temperatura + "C°";
            document.getElementById('humedad').textContent = data.humedad + "%";
        })
        .catch(error => console.log('Error:', error));
}

setInterval(obtenerDatos, 2000); 
