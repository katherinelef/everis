/*$(document).ready(function() {
  var button = $('#button');
  button.click(function addText() {
    var textArea = document.getElementById('text').value;
    var container = document.createElement('div');
    var message = document.createElement('p');
    var date = new Date();
    var content = document.createTextNode(textArea + ' ' + date.getHours() + ':' + date.getMinutes());
    var main = document.getElementById('box-image');
    container.appendChild(message);
    message.appendChild(content);
    message.classList.add('message');
    main.appendChild(message);
    document.getElementById('text').value = '';
    document.getElementById('text').focus();
  });
  var textArea = $('#text');
  textArea.keyup(function() {
    var com = $(this).val();
    localStorage.setItem('nombre', com);
  });
});

function archivo(evt) {
  var files = evt.target.files;
  for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
  // Creamos la imagen.
        document.getElementById("list").innerHTML = ['<img class="subir-fotos" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
      };
    })(f);
    reader.readAsDataURL(f);
  }
}
document.getElementById('files').addEventListener('change', archivo, false);*/

$(document).ready(function() {

var kvArray = [{nombre:"Proyecto website", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"}, 
{nombre:"Proyecto Lays", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"}, 
{nombre:"Proyecto Unicornio", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"E-commerce"},
{nombre:"Proyecto CocaCola", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"E-commerce"},
{nombre:"Proyecto Five", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"E-commerce"},
{nombre:"Proyecto Six", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"E-commerce"},
{nombre:"Proyecto Everis", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"},
{nombre:"Proyecto Movistar", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"},
{nombre:"Proyecto Entel", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"},
{nombre:"Proyecto Mifarma", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"},
{nombre:"Proyecto BCP", numero:1015, objetivo:"El presente proyecto tiene como objetivo", unidad:10, lineaDeservicio:"Banca y finanzas"}];

var reformattedArray = kvArray.map(function(obj){ 

  $('#list').append(

  `<div class="row carta">
  <div>
  <div>
  <img class="card-img-top" src="../assets/images/img-project.png" alt="Card image cap">
  <div class="card-body bg-success">
    <h5 class="card-title">${obj.nombre}</h5>
    <p class="card-text">${obj.objetivo}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Número de proyecto: ${obj.numero}</li>
    <li class="list-group-item">Unidad: ${obj.unidad}</li>
    <li class="list-group-item">Linea de Servicio: ${obj.lineaDeservicio}</li>
    <li class="list-group-item">Colaborador: <p id=user></p> </li>
  </ul>
  <div class="card-body">
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-succes" data-toggle="modal" data-target="#exampleModal">
    Asignar colaborador
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Selecciona un colaborador</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        
        <a class="add">Colaborador 1</a> 
        <br/>
        <a class="add">Colaborador 2</a>
        <br/>
        <a class="add">Colaborador 3</a>
        <br/>
        <a class="add">Colaborador 4</a>
        <br/>
        <a class="add">Colaborador 5</a>
        <br/>
        <a class="add">Colaborador 6</a>
        <br/>
        <a class="add">Colaborador 7</a>
        <br/>
        </div>
        
      </div>
    </div>
  </div>
    
  </div>
</div>
</div>
</div>`)
console.log(obj.nombre)
});

$( ".add" ).click(function() {
  $("#user").append($( this ).text());
});


});