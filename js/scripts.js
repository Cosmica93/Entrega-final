const persona = {nombre:"", apellido:"",ciudad:"",mesNacimiento:"",anoNacimiento:"",horario:"",signoSolar:""};

const signosSolares = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"];

function calcularSignoSolar(){
    persona["mesNacimiento"] = document.getElementById('mes_persona').value;
    switch (persona["mesNacimiento"]) {
        case "01":
            persona["signoSolar"] = signosSolares[0]
            break;
        case "02":
            persona["signoSolar"] = signosSolares[1]
            break;
        case "03":
            persona["signoSolar"] = signosSolares[2]
            break;
        case "04":
            persona["signoSolar"] = signosSolares[3]
            break;
        case "05":
            persona["signoSolar"] = signosSolares[4]
            break;
        case "06":
            persona["signoSolar"] = signosSolares[5]
            break;
        case "07":
            persona["signoSolar"] = signosSolares[6]
            break;
        case "08":
            persona["signoSolar"] = signosSolares[7]
            break;
        case "09":
            persona["signoSolar"] = signosSolares[8]
            break;
        case "10":
            persona["signoSolar"] = signosSolares[9]
            break;
        case "11":
            persona["signoSolar"] = signosSolares[10]
            break;
        case "12":
            persona["signoSolar"] = signosSolares[11]
            break;
        default:
            persona["signoSolar"] = "Error"
    }
    console.log(persona["signoSolar"])
    console.log(persona)
}

function calcularCarta() {
    persona["nombre"] = document.getElementById('nombre_persona').value;
    persona["apellido"] = document.getElementById('apellido_persona').value;
    persona["mesNacimiento"] = document.getElementById('mes_persona').value;
    persona["anoNacimiento"] = document.getElementById('ano_persona').value;
    persona["ciudad"] = document.getElementById('ciudad_persona').value;
    persona["horario"] = document.getElementById('horario_persona').value; 
    guardarDatos();
}

function guardarDatos() {
    const persona_JSON = JSON.stringify(persona);
    sessionStorage.setItem('carta_persona',persona_JSON);
    console.log(sessionStorage.getItem('carta_persona'));
    mostrarDatos()
}

function mostrarDatos() {
    const carta_persona = JSON.parse(sessionStorage.getItem('carta_persona')); 
    //document.getElementById('title_carta_astral').innerHTML = 'La carga fue exitosa!';
    //document.getElementById('nombre_carta_astral').innerHTML = carta_persona.nombre + ' ' + carta_persona.apellido;
    //document.getElementById('datos_carta_astral').innerHTML = 'Naciste en '+ carta_persona.ciudad + ' el ' + 
    //carta_persona.mesNacimiento + '/' + carta_persona.anoNacimiento + ' a las ' + carta_persona.horario + 'hs.';
    //document.getElementById('signo_carta_astral').innerHTML = 'Tu signo solar es <b>' + carta_persona.signoSolar + '</b>';

    swal({
        title: "Veamos...",
        text: carta_persona.nombre + ' ' + carta_persona.apellido  +  ' Naciste en ' + carta_persona.ciudad + ' el ' + carta_persona.mesNacimiento + '/'
        + carta_persona.anoNacimiento + ' a las ' + carta_persona.horario + ' hs. Tu signo solar es ' +  carta_persona.signoSolar,
        icon: "success",
    })
}

