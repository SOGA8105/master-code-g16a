//Paso 1:Definimos variables de entrada y uso interno del algoritmo
var nombreCompleto;
var añoNacimiento, añoActual;
var genero;
var edad;
var viveNortepais;
var embarazada;
var semanasGestacion;
var tieneNueveSemanasGestacion;

//Paso 2: Solicitar datos al usuario
nombre = prompt('Ingresa tu nombre completo');
añoNacimiento = prompt('Ingresa tu año de nacimiento');
añoActual = prompt('Ingresa el año actual');
genero = prompt('Selecciona tu genero: F=Femenino, M=Masculino');
viveNortepais = prompt('¿vives en un estado al norte del pais? respuesta: S o N');

//Paso 3:Desarrollar la logica de negocio
edad = añoActual - añoNacimiento;

//validamos si la persona es menor a 18 años
if (edad > 30) {
    alert(`Lo sentimos ${nombreCompleto}, aun no puedes vacunarte`);
}
else {
    //validamos si es Masculino o Femenino
    if (viveNortepais.toUpperCase() === 'S') 
    {

    }
    if (genero.toUpperCase === 'F') {
        embarazada = prompt('¿Estas embarazada? Respuesta: S o N');

        //validamos si esta embarazada
        if (embarazada.toUpperCase === 'S') {
            tieneNueveSemanasGestacion = prompt('¿Tienes mas de 9 semanas de gestacion? Respuesta: S o N');
            //validamos si tiene mas de 9 semanas de gestacion
            if (tieneNueveSemanasGestacion.toUpperCase === 'S');
            {
                alert(`Felicitaciones ${nombreCompleto}, ya puedes vacunarte`);
            }
        }
    }
}




