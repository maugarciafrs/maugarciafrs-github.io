function obtenerDatos() {
    fetch('http://192.168.1.40/datos')  // IP del esp32
        .then(response => response.json())
        .then(data => {
            document.getElementById('est32').textContent = data.esp32Connected ? "Conectada" : "Desconectada";
            document.getElementById('estluces').textContent = data.growLightsOn ? "Prendidas" : "Apagadas";
            document.getElementById('hora').textContent = data.localTime;
            document.getElementById('esttanque').textContent = data.waterTankFull ? "Tanque lleno" : "Falta agua";
            document.getElementById('temperatura').textContent = data.temp;
            document.getElementById('humedad').textContent = data.humidity;
        })
        .catch(error => console.log('Error:', error));
}

setInterval(obtenerDatos, 2000); 
