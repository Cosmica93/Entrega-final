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

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '4ab89ffa32mshce59f8b3cac3c00p1eff30jsne1a2bb12180d',
            'X-RapidAPI-Host': 'astrologer.p.rapidapi.com'
        },
        body: `{"name":${carta_persona.nombre},"year":${carta_persona.anoNacimiento},"month":${carta_persona.mesNacimiento},"day":10,"hour":${carta_persona.horario},"minute":0,"longitude":41.91,"latitude":12.48,"city":${carta_persona.ciudad},"timezone":"Europe/Rome","language":"IT"}`
    };
    
    fetch('https://astrologer.p.rapidapi.com/api/v2/birth-chart', options)
        .then(response => response.json())
        .then(response => {
            swal({
                title: "Veamos...",
                text: carta_persona.nombre + ' ' + carta_persona.apellido  +  ' Naciste en ' + carta_persona.ciudad + ' el ' + carta_persona.mesNacimiento + '/'
                + carta_persona.anoNacimiento + ' a las ' + carta_persona.horario + ' hs. Tu signo solar es ' +  response.sun.sign,
                icon: "success",
            })
        })
        .catch(err => {
            swal({
                title: "¡Ups, algo anda mal!",
                text: "no pudimos encontrar la información",
                icon: "error",
            })
            console.error(err)} 
        ); 
    


}


