const persona = {nombre:"", apellido:"",ciudad:"",diaNacimiento:"",mesNacimiento:"",anoNacimiento:"",horario:"",signoSolar:""};

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
persona["diaNacimiento"] = document.getElementById('dia_persona').value;
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

    var api = 'natal_wheel_chart';
    var userId = '620604';
    var apiKey = 'e562182374ebc2b98310322e1d628300';
    var data = {
    day:12,
    month:carta_persona.mesNacimiento,
    year:carta_persona.anoNacimiento,
    hour:carta_persona.horario,
    min:12,
    lat:-31.31,
    lon:-64.28,
    tzone:-3
    };
    var request = $.ajax({
    url: "https://json.astrologyapi.com/v1/"+api,
    method: "POST",
    dataType:'json',
    headers: {
    "authorization": "Basic " + btoa(userId+":"+apiKey),
    "Content-Type":'application/json'
    },
    data:JSON.stringify(data)
    });
    
    request.then( function(resp){
    console.log(resp);
    $("#carta_astral_svg").css("background-image", "url("+ resp.chart_url +")");
    }, function(err){
    console.log(err);
    });
    

    var api = 'personality_report/tropical';
    var request = $.ajax({
    url: "https://json.astrologyapi.com/v1/"+api,
    method: "POST",
    dataType:'json',
    headers: {
    "authorization": "Basic " + btoa(userId+":"+apiKey),
    "Content-Type":'application/json'
    },
    data:JSON.stringify(data)
    });
    
    request.then( function(resp){
    console.log(resp);
    document.getElementById('carta_astral_leccion').innerHTML = resp.spiritual_lesson;
    document.getElementById('carta_astral_cualidad').innerHTML = 'Cualidad principal: ' + resp.key_quality;
    document.getElementById('carta_astral_informe').innerHTML = 'Informe completo: ' + resp.report;
    }, function(err){
    console.log(err);
    });



}