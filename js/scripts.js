const persona = {nombre:"",ciudad:"",mesNacimiento:"",anoNacimiento:"",horario:"",signoSolar:"",animalChino:""};

persona["nombre"] = prompt("¡Hola! Ingresa tu nombre ");
alert("¡Bienvenid@ " + persona["nombre"] + " a AstroMatch! Calculemos tu carta");

persona["mesNacimiento"] = prompt("Ingresa tu mes de nacimiento (MM)");
persona["anoNacimiento"] = prompt("Ingresa tu año de nacimiento (AAAA)"); 

persona["ciudad"] = prompt("Ingresa tu ciudad natal") 
persona.horario = prompt("Ingresa tu horario de nacimiento");

console.log(persona);
alert(persona["nombre"] + " tus datos están registrados")

alert(persona["nombre"] + " descubramos tu signo solar")

const signosSolares = ["Capricornio", "Acuario", "Piscis", "Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario"];

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
    case "09":
        persona["signoSolar"] = signosSolares[9]
        break;
    case "11":
        persona["signoSolar"] = signosSolares[10]
        break;
    case "12":
        persona["signoSolar"] = signosSolares[11]
        break;
    default:
        alert("Revisa tu mes de nacimiento")
}

alert("Tu signo solar es " + persona["signoSolar"])

const animalesChinos = ["La Rata", "El Buey", "El Tigre", "El Conejo", "El Dragón", "La Serpiente", "El Caballo", "La Cabra", "El Mono", "El Gallo", "El Perro", "El Cerdo"];


switch (persona["anoNacimiento"]) {
    case "1936": case "1948": case "1960": case "1972": case "1984": case "1996": case "2008": case "2020":
        persona["animalChino"] = animalesChinos[0]
        break;
    case "1937": case "1949": case "1961": case "1973": case "1985": case "1997": case "2009": case "2021":
        persona["animalChino"] = signosSolares[1]
        break;
    case "1938": case "1950": case "1962": case "1974": case "1986": case "1998": case "2010": case "2022":
        persona["animalChino"] = animalesChinos[2]
        break;
    case "1939": case "1951": case "1963": case "1975": case "1987": case "1999": case "2011":
        persona["animalChino"] = animalesChinos[3]
        break;
    case "1940": case "1952": case "1964": case "1976": case "1988": case "2000": case "2012":
        persona["animalChino"] = animalesChinos[4]
        break;
    case "1941": case "1953": case "1965": case "1977": case "1989": case "2001": case "2013":
        persona["animalChino"] = animalesChinos[5]
        break;
    case "1942": case "1954": case "1966": case "1978": case "1990": case "2002": case "2014":
        persona["animalChino"] = animalesChinos[6]
        break;
    case "1943": case "1955": case "1967": case "1979": case "1991": case "2003": case "2015":
        persona["animalChino"] = animalesChinos[7]
        break;
    case "1944": case "1956": case "1968": case "1980": case "1992": case "2004": case "2016":
        persona["animalChino"] = animalesChinos[8]
        break;
    case "1945": case "1957": case "1969": case "1981": case "1993": case "2005": case "2017":
        persona["animalChino"] = animalesChinos[9]
        break;
    case "1946": case "1958": case "1970": case "1982": case "1994": case "2006": case "2018":
        persona["animalChino"] = animalesChinos[10]
        break;
    case "1947": case "1959": case "1971": case "1983": case "1995": case "2007": case "2019":
        persona["animalChino"] = animalesChinos[11]
        break;
    default:
        alert("Revisa tu año de nacimiento")
}

alert("Tu animal chino es " + persona["animalChino"]) 
