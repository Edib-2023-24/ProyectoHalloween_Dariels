
    function actualizarContador() {
      // Obtén la fecha actual
      var ahora = new Date();
      // Fecha objetivo (puedes personalizarla)
      let fechaObjetivo = new Date("2024-10-31T00:00:00");
      // Calcula la diferencia entre las fechas
      let diferencia = fechaObjetivo - ahora;

      // Calcula días, horas, minutos y segundos
      // Se asegura de que los digitos siempren sean dos
      let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      if (dias < 10) {dias = "0" + dias;}
      let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (horas < 10) {horas = "0" + horas;}
      let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      if (minutos < 10) {minutos = "0" + minutos;}
      let segundos = Math.floor((diferencia % (1000 * 60) / 1000));
      if (segundos < 10) {segundos = "0" + segundos;}
      
      // Actualiza el contenido del elemento HTML con el contador
      document.getElementById("contador").innerHTML = `
      <p">${dias} dias</p>
      <p">${horas} hrs</p>
      <p">${minutos} mins</p>
      <p">${segundos} segs</p>
    `;

      // ---------------------------------------------------------
      // Recopilamos nuevamente la fecha para el h1
      let dia1 = ahora.getDate();
      let mes1 =  ahora.getMonth() + 1;
      let ano1 =  ahora.getFullYear();
      let fecha_actual_texto = `${dia1} de ${mes1} de ${ano1}`;
      //MOstramos la fecha
      document.getElementById('fecha_actual').innerHTML = fecha_actual_texto;
    }
    // Actualiza el contador cada segundo
    setInterval(actualizarContador, 1000);
