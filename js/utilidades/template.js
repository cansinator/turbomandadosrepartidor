
$(document).ready(function () {

});

function configuraTemplate(nivel) {
    if (validaSesion()) {
        creaHeader(nivel);

    } else {
        window.location.href = "index.html"
    }
}


function creaHeader(nivel) {
    let html = '';

    let menu = '';

    if (nivel == 0) {
        menu += '<li class="nav-item active">';
        menu += '<a class="nav-link" href="pedidos.html">Pedidos<span class="sr-only">(current)</span></a>';
        menu += '</li>';
    }


    html += '        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">';
    html += '        <a class="navbar-brand" href="#">';
    html += '            <img src="img/tiendas/tiendaslores.svg" width="30" height="30" class="d-inline-block align-top" alt="">';
    html += '            Turbo Mandados';
    html += '        </a>';
    html += '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"';
    html += '            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">';
    html += '            <span class="navbar-toggler-icon"></span>';
    html += '        </button>   ';
    html += '        <div class="collapse navbar-collapse" id="navbarSupportedContent">';
    html += '            <ul class="navbar-nav mr-auto">';
    html += menu;
    html += '            </ul>';
    html += '            <span class="fa fa-user" style="font-size: 24px;" ><a id="nombre" style="font-size: 15px; margin: 4px; font-family: sans-serif"><a/></span>';
    html += '<a class="navbar-brand" id="cerrarSession"><i class="fa fa-power-off fa-2" aria-hidden="true" style="font-size: 24px;"></i></a>';
    html += '        </div>';
    html += '    </nav>';
    $('#header').html(html);
}

function creaFooter() {
    let html = '';
    html += '   <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">';
    html += '   <ul class="navbar-nav">';
    html += '       <li class="nav-item">';
    html += '           <spa id="datoFooter" class="nav-link"></span>';
    html += '       </li>';
    html += '       <li class="nav-item">';
    html += '           <span id="datoHeader" class="nav-link"></span>';
    html += '       </li>';
    html += '       <li class="nav-item">';
    html += '           <span id="datoHeaderDetalle" class="nav-link" href="#"></span>';
    html += '       </li>';
    html += '   </ul>';
    html += '   </div>';
    $('#footer').html(html);
}

function validaSesion() {
    var usuario = localStorage.getItem("usuario");
    if (usuario != null && usuario != '')
        return true;
    else return false;
}