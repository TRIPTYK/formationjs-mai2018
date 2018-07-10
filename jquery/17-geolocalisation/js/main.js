//trouver position
navigator.geolocation.getCurrentPosition(maPosition, erreurPosition);

function maPosition(position) {
  let infopos = `
        Position déterminée : <br />
        Latitude : ${position.coords.latitude} <br />
        Longitude : ${position.coords.longitude} <br />
        Altitude : ${position.coords.altitude} <br />
        Speed : ${position.coords.speed}
    `;
  //le Speed est utilisé dans le cas d'un navigator.geolocation.watchPosition();

  document.getElementById("infoposition").innerHTML = infopos;
}

function erreurPosition(error) {
  console.log(error.code);
  let errorinfo = "Erreur lors de la géolocalisation : ";
  switch (error.code) {
    case error.TIMEOUT:
      errorinfo += "Timeout";
      break;
    case error.PERMISSION_DENIED:
      errorinfo += "Vous n'avez pas donné l'autorisation";
      break;
    case error.POSITION_UNAVAILABLE:
      errorinfo += "La position n'a pas pu être déterminée";
      break;
    case error.UNKNOWN_ERROR:
      errorinfo += "Erreur inconnue";
      break;
    default:
      errorinfo += "Erreur";
  }
  document.getElementById("erreur").innerHTML = errorinfo;
}
