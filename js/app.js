//Funcion para agregar al localstorage

function GuardarTarea() {
    const tarea = document.getElementById("tarea").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const descripcion = document.getElementById("descripcion").value;

    let numeroTarea = Number(localStorage.getItem("contador")) || 1; 
    const llave = `llave_${numeroTarea}`;

    
    localStorage.setItem(`${llave}_tarea`, tarea);
    localStorage.setItem(`${llave}_fecha`, fecha);
    localStorage.setItem(`${llave}_hora`, hora);
    localStorage.setItem(`${llave}_descripcion`, descripcion);

    
    localStorage.setItem("contador", numeroTarea + 1);

    document.getElementById("formulario").reset();

    CargarTareas()
}


