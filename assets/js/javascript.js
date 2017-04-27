var datos = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
];

var espacioLista = document.getElementById('espacio-lista');
datos.forEach(function(el){
	espacioLista.innerHTML +=  "<li>" + el.title + "</li>"; 
});

function agregarTarea(){
	var valorTarea = document.getElementById('nueva-tarea').value;
	var espacioEditable = document.getElementById('editable');
	espacioEditable.innerHTML += "<li>" + valorTarea + "</li>";

	function DatoNuevo(valorTarea){
    this.completed = false;
    this.id = datos.length;
    this.title = valorTarea;
    this.userId = 1;
	}
	var res = new DatoNuevo(valorTarea);
	return datos.push(res);	
}

function guardarCambios() {
var editElem = document.getElementById("editable");
var usuarioVersion = editElem.innerHTML;
localStorage.userEdits = usuarioVersion;
}
