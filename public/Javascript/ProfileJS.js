$('.profBtn').click(function() {
    $('#description div').hide();
    var target = '#' + $(this).data('target');
    $(target).show();
});

const credential = document.getElementById('credentials');
credential.style.display = 'none';