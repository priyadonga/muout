$(document).ready(function () {

    // loader js 

    $('#loader').show();

    setTimeout(function () {
        $('#loader').fadeOut('slow', function () {
            $('#content').fadeIn('slow');
        });
    }, 1000);

    // footer

    document.getElementById('subscribeForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email').value;
        var thanksMessage = document.getElementById('thanksMessage');

        if (emailInput) {
            thanksMessage.style.display = 'block';
            document.getElementById('email').value = '';
        } else {
            thanksMessage.style.display = 'none';
        }
    });

    document.getElementById('subscribeFormAccordion').addEventListener('submit', function (event) {
        event.preventDefault();

        var emailInput = document.getElementById('email-accordion').value;
        var thanksMessage = document.getElementById('thanksMessage-accordion');

        if (emailInput) {
            thanksMessage.style.display = 'block';
            document.getElementById('email-accordion').value = '';
        } else {
            thanksMessage.style.display = 'none';
        }
    });

    // animation

    new WOW().init();

    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        }
    )
    wow.init();

});
