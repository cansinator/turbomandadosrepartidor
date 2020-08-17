
$('#bEntrar').click(function(){
    if ($('#iUsr').val() != '' && $('#iPwd').val() != '')
        validaUsuario($('#iUsr').val(), $('#iPwd').val());
});