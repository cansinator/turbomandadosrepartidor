async function validaUsuario(ux, px){
    let data = {
        'UX': ux,
        'PX': px,
        'FB': '',
        'NFB': ''
    };
    consumeServicio('POST', data, CONSULTAUSUARIO, llenaUsuario);
}


function llenaUsuario(usrjson){
    localStorage.setItem("usuario", JSON.stringify(usrjson));
    window.location.replace("pedidos.html");
}

