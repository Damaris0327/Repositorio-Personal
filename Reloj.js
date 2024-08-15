function iniciarReloj() {
    function mostrarHora() {
      let ahora = new Date();
      let horas = ahora.getHours();
      let minutos = ahora.getMinutes();
      let segundos = ahora.getSeconds();
  
      minutos = minutos < 10 ? '0' + minutos : minutos;
      segundos = segundos < 10 ? '0' + segundos : segundos;
  
      let horaFormateada = `${horas}:${minutos}:${segundos}`;
  
      window.alert(`La hora actual es: ${horaFormateada}`);
    }
  
    mostrarHora();

    window.setInterval(mostrarHora, 30000);
  }
  
  iniciarReloj();
  