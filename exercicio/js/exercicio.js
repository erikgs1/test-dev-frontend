var selectedAlternative = null;
var showButton = function() {
    $('.acoes .bt').show()
}
var hideButton = function() {
    $('.acoes .bt').hide()
}
var selectAlternative = function(alternative) {
    $('.alternativas .alternativa').removeClass('selecionada');
    $('.alternativas .alternativa').eq(alternative).addClass('selecionada');
}
var removeAlternatives = function() {
    $('.alternativas .alternativa').removeClass('selecionada');
    hideButton();
}
var hideFeedbacks = function() {
    $('.feedbacksNone').hide();
}
var feedbackPositive = function () {
    hideFeedbacks()
    $('#feedbackPositivo').show();
}
var feedbackNegative = function () {
    hideFeedbacks()
    $('#feedbackNegativo').show();
}
var finish = function () {
    hideButton();
    $('.alternativa input').prop( "disabled", true);
}

$('.alternativas .alternativa').each(function(index, element) {   
    $(this).find('input').on('change', function(){
        if($(element).hasClass('selecionada')) {
            removeAlternatives();
        } else {
            showButton()
            selectAlternative(index);
            selectedAlternative = $(this).attr('id')
        }
    });
});

$('.bt-confirmar').on('click', function(){    
    $.ajax({
        url: "http://localhost:3000/",
        dataType: 'json',
        async: false,
        success:function(response) {
            var selected = response[0][0]['gabarito'][0]['resposta']
            if (selected == selectedAlternative) {
                feedbackPositive()
            } else {
                feedbackNegative()
            }
            finish()
        },
        error: function (msg) {
            console.error('Rodar o comando "npm run start"')
        }
    });
})



