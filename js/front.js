var mains = document.getElementsByTagName('main');
var main = mains[0];
main.innerHTML= '<article> <section> <p> diferencia</p> <p> ciudad</p> </section> <section> hora </section></article> <hr>';

function ponerCero(i){
    if (i < 10){
        i = '0' +i;
    }
    return i;
}

function esHoy(fecha){
    var diaEspaña = new Date().getDate();
    var diaCiudad = fecha.getDate();
    console.log(diaEspaña, diaCiudad)

    if (diaEspaña > diaCiudad){
        return 'Ayer, '
    } else if ( diaEspaña < diaCiudad){
        return 'Mañana, '
    } else {
        return ''
    }
}

function reloj(ciudad, desfase){

    var d = new Date();

    var utc = d.getTime() + (d.getTimezoneOffset() * 1);
    var nd = new Date(utc + (3600000*desfase));

    h = nd.getHours();
    m = nd.getMinutes();
    s = nd.getSeconds();
    h = ponerCero(h);
    m = ponerCero(m);
    s = ponerCero(s);

    var eshoy= esHoy(nd);


    return `
    <article> <section> <p>${eshoy} ${desfase}H</p> <p> ${ciudad}</p> </section> <section> ${h}:${m}:${s} </section></article> <hr>`;

}

var arrayCiudades = [
    {ciudad: 'Madrid', desfase:'+0'},
    {ciudad: 'Londres', desfase: '-1'},
    {ciudad: 'Los Ángeles', desfase: '-9'},
    {ciudad: 'Nueva York', desfase: '-6'},
    {ciudad: 'Sidney', desfase: '+8'},
    {ciudad: 'prueba', desfase: '-23'}
]

window.setInterval(function(){
    var resultado = '';
    
    for (objetos of arrayCiudades){
        var texto = reloj(objetos.ciudad, objetos.desfase)
        resultado = resultado + texto
    }

    main.innerHTML = resultado;
},500)
