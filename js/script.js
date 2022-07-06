function postarComentario(){
var nome = document.getElementById('nome').value;
var comentario = document.getElementById('comentario').value;
var postagem = document.getElementById('comentarios').value;
var corTexto = document.getElementById('corTexto').value;
var corFundo = document.getElementById('corFundo').value;


postagem.innerHTML += '<div class="postagem" style="color: ' + corTexto + ' ; 
background-color:  + corFundo';"><strong>' + nome + '</strong> </hr> </br>' +
comentario + '</div>';



document.getElementById('nome').value ='';
document.getElementById('comentario').value='';
} 