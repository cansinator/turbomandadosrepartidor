async function validaUsuario(ux, px){
    let data = {
        'UX': ux,
        'PX': px,
        'FB': 'NA',
        'NFB': 'NA'
    };
    consumeServicio('POST', data, CONSULTAUSUARIO, llenaUsuario);
}


async function llenaUsuario(usrjson){
    localStorage.setItem("usuario", JSON.stringify(usrjson));
    window.location.replace("pedidos.html");
}


$('#bEntrar').click(function(){
    if ($('#iUsr').val() != '' && $('#iPwd').val() != '')
        validaUsuario($('#iUsr').val(), $('#iPwd').val());
});