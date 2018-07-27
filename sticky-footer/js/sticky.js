let boton = document.getElementById("add");
let botonRemove = document.getElementById("remove");

boton.addEventListener("click", textoPorClick);
botonRemove.addEventListener("click", remove);

function textoPorClick()
{
  // alert("hola");
  let texto = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  document.getElementById('aqui').innerHTML = texto;
  document.getElementById('aqui-dos').innerHTML = texto;
  document.getElementById('aqui-tres').innerHTML = texto;
  document.getElementById('aqui-cuatro').innerHTML = texto;

}


function remove()
{
  // alert("hola");
  let texto = " ";
  document.getElementById('aqui').innerHTML = texto;
  document.getElementById('aqui-dos').innerHTML = texto;
  document.getElementById('aqui-tres').innerHTML = texto;
  document.getElementById('aqui-cuatro').innerHTML = texto;

}