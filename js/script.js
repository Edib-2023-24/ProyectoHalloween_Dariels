
    function actualizarContador() {
      // Obtén la fecha actual
      var ahora = new Date();
      // Fecha objetivo (puedes personalizarla)
      let fechaObjetivo = new Date("2024-10-31T23:59:59");
      // Calcula la diferencia entre las fechas
      let diferencia = fechaObjetivo - ahora;

      // Calcula días, horas, minutos y segundos
      let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      let segundos = Math.floor((diferencia % (1000 * 60) / 1000));

      // Recopilamos nuevamente la fecha para el h1
      let dia = ahora.getDate();
      let meses =  ahora.getMonth() + 1;
      let anos =  ahora.getFullYear();
      let fechaActualTexto = `${dia} de ${meses} de ${anos}`;

      //MOstramos la fecha
      document.getElementById('fecha_actual').innerHTML = fechaActualTexto;
      
      // Actualiza el contenido del elemento HTML con el contador
      document.getElementById("contador").innerHTML = `
        <p>${dias} dias</p>
        <p>${horas} hrs</p>
        <p>${minutos} mins</p>
        <p>${segundos} segs</p>
      `;
    }
    // Actualiza el contador cada segundo
    setInterval(actualizarContador, 1000);

    
    
    


