document.querySelector('input[type="submit"]').addEventListener('click', addComment);

function addComment(e) {
    e.preventDefault();
    // var nom = document.querySelector('input[type="text"]').value;
    var nom = document.querySelector('#nom').value;
    document.querySelector('#nom').value = "";
    var msg = document.querySelector('#msg').value;
    document.querySelector('#msg').value = "";

    // console.log(nom, msg);

    // var commentContent = "<div><h3>nom</h3><p>msg</p></div>";
    // var commentContent = "<div>";
    var commentContent = "<h3>"+nom+"</h3>";
    commentContent += "<p>"+msg+"</p>";
    // commentContent += "</div>";

    var commentSection = document.querySelector('.comments');
    var commentElement = document.createElement('div');
    commentElement.innerHTML = commentContent;
    commentSection.appendChild(commentElement);

}

document.querySelector('button').addEventListener('click', deleteComments);

function deleteComments() {
    // document.querySelector('.comments div').innerHTML = "";
    //récupère la première div dans .comments et il la vide, mais ce n'est pas ça que je veux faire

    // document.querySelectorAll('.comments div').innerHTML = "";
    // for (var i = 0; i < document.querySelectorAll('.comment div').length; i++) {
    //     document.querySelectorAll('.comment div')[i].innerHTML = "";
    // }

    // cette version supprime tous les enfants de .comments :
    // let comments = document.querySelector(".comments");
    // while (comments.firstChild) {
    //     comments.removeChild(comments.firstChild);
    // }
    

    for (var i = 0; document.querySelectorAll('.comments div').length; i++) {
        // document.querySelector('.comments div').remove();
        var div = document.querySelector('.comments div');
        document.querySelector('.comments').removeChild(div);
    }
}