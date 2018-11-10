$(document).ready(function(){
    $("#send-button").click(sendEmail);
});

function sendEmail(){
    const email = $('.email-input').val();
    const testPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(testPattern.test(email)){
        displayError('.email-input', '');
    }
    else{
        displayError('.email-input', 'email is invalid');
    }
}

function displayError( input, message ){
    $(input).parent().find('.error-message').text(message);
}