const apiKey = "TU_API_KEY";
const ciudad = "Montevideo";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  .then(respuesta => respuesta.json())
  .then(datos => {
    console.log(datos); // Aquí ves toda la info
    const temperatura = datos.main.temp;
    const descripcion = datos.weather[0].description;
    console.log(`Temperatura: ${temperatura}°C`);
    console.log(`Clima: ${descripcion}`);
  })
  .catch(error => console.log("Hubo un error:", error));