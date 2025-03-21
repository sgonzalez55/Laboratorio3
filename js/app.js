//Funcion para agregar al localstorage

function GuardarTarea() {
    const tarea = document.getElementById("tarea").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const descripcion = document.getElementById("descripcion").value;

    let numeroTarea = Number(localStorage.getItem("contador")) || 1; 
    const llave = `llave_${numeroTarea}`;

    if (tarea === '' || fecha === '' ||hora==='' ||descripcion ===''){
        alert("Debes rellenar todos los campos")
    }else{
        localStorage.setItem(`${llave}_tarea`, tarea);
        localStorage.setItem(`${llave}_fecha`, fecha);
        localStorage.setItem(`${llave}_hora`, hora);
        localStorage.setItem(`${llave}_descripcion`, descripcion);
    
        
        localStorage.setItem("contador", numeroTarea + 1);
    
        document.getElementById("formulario").reset();
    
        CargarTareas()
    }
    

}

function CargarTareas() {
    let lista = Number(localStorage.getItem("contador")) || 1;
    let divConTareas = document.getElementById("listar")

    divConTareas.innerHTML = ""

    for (let i = 1; i < lista; i++) {
        const llave = `llave_${i}`;

        const tarea = localStorage.getItem(`${llave}_tarea`);
        
        const fecha = localStorage.getItem(`${llave}_fecha`);
        const hora = localStorage.getItem(`${llave}_hora`);
        const descripcion = localStorage.getItem(`${llave}_descripcion`);

        if (!tarea || !fecha || !hora || !descripcion) {

            continue; // aqui con esto no carga los valores nullosgit status

            continue; 

        }

    let tareasLista =  `
                    <div class="tarea">
                    <p><strong>${tarea}</strong> - ${descripcion}</p>
                    <p>${fecha} - ${hora}</p>
                    <div class="btns">

                        <button class="btn-actualizar" onclick="Actualizar('${llave}')">Actualizar</button>
                        
                        <button class="btn-borrar" onclick="EliminarLista('${llave}')">Eliminar</button>
                    </div>`

    divConTareas.innerHTML += tareasLista

    }


}
window.onload = function () {
    CargarTareas()
}


function EliminarLista(llave) {
    
    localStorage.removeItem(`${llave}_tarea`);
    localStorage.removeItem(`${llave}_fecha`);
    localStorage.removeItem(`${llave}_hora`);
    localStorage.removeItem(`${llave}_descripcion`);



    let tareaDiv = document.getElementById(llave);
    if (tareaDiv) {
        tareaDiv.remove(); 
    }


    CargarTareas();

}