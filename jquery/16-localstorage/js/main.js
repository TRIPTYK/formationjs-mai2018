(function($) {
  if (typeof localStorage != "undefined") {
    $("#todolist").blur(function() {
      //sauvegarde des infos dans une variable mystorage
      localStorage.setItem("myStorage", this.innerHTML);
    });

    //récupérer et afficher le contenu de mystorage s'il existe déjà
    if (localStorage.getItem("myStorage")) {
      $("#todolist").html(localStorage.getItem("myStorage"));
      // document.getElementById('todolist').innerHTML = localStorage.getItem('myStorage');
    }

    $("button").click(function() {
      localStorage.clear();
      location.reload();
    });
  } else {
    console.log("LocalStorage n'est pas supporté par votre navigateur");
  }
})(jQuery);
