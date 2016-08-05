$(function() {

  // Destaque menu

  // Toggle responsive menu
  var sidebar = $('.sidebar');

  $('.sidebar-btn-open').click(function(e) {
    e.preventDefault();
    sidebar.toggleClass('slide-sidebar');
  });

  $('.sidebar-btn-close').click(function(e) {
    e.preventDefault();
    sidebar.removeClass('slide-sidebar');
  });

  // Closing sidebar with ESC
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27 && $('.sidebar').length) {
      sidebar.removeClass('slide-sidebar');
    }
  });

  // Ajax form
  var formContact = $('.form-contact');

  formContact.on('submit', function(e) {

    e.preventDefault();

    var alert = $('[class^=alert-]'),
      nome = $('#iName').val(),
      endereco = $('#iEnd').val(),
      fone = $('#iPhone').val(),
      email = $('#iEmail').val(),
      mensagem = $('#iMsg').val();

    $.ajax({
      url: 'https://formspree.io/contato@toniconstrutora.com.br',
      method: 'POST',
      data: {
        Nome: nome,
        Endereco: endereco,
        Fone: fone,
        Email: email,
        Mensagem: mensagem,
        _replyto: email,
        _subject: 'Obrigado por entrar em contato com a Toni Construtora',
        _format: 'plain'
      },
      dataType: "json",
      success: function() {
        console.log('success');
        $('.alert-success').slideDown('fast');
      },
      error: function() {
        $('.alert-error').slideDown('fast');
      },
      beforeSend: function() {
        $('.btn-send-contact').html("<span class='icon-spinner4 roll'></span> enviando...").attr('disabled', 'disabled');;
        alert.slideUp('fast');
      },
      complete: function() {
        $('.btn-send-contact').html('Enviar').removeAttr('disabled');
      }
    });

    // Ajax close message
    alert.click(function() {
      $(this).fadeOut('fast');
    });

  });


  // Back to top
  var offset = 300,
    offsetOpacity = 1200,
    scrollTopDuration = 500,
    backToTop = $('.cd-top');

  $(window).scroll(function() {
    ($(this).scrollTop() > offset) ? backToTop.addClass('cd-is-visible'): backToTop.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offsetOpacity) {
      backToTop.addClass('cd-fade-out');
    }
  });

  backToTop.on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0,
    }, scrollTopDuration);
  });

});
