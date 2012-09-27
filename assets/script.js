$(document).ready(function () {
    $('.navbar').scrollspy();
    $('#enviarEmail').on('click', onEnviarEmailClick);
});

function onEnviarEmailClick() {
    var nome = $('input[name="nome"]').val();
    var email = $('input[name="email"]').val();
    var mensagem = $('textarea[name="mensagem"]').val();
    $.post('/Contato/vicentedealencar.com/' + nome + '/' + email + '/' + mensagem,
            function (data) {
                $('input[name="nome"]').val('');
                $('input[name="email"]').val('');
                $('textarea[name="mensagem"]').val('');
                alert('Obrigado!!');
            }).error(function (data) {
                alert('Ocorreu um erro, tente novamente!');
                console.log(data);
            });
}