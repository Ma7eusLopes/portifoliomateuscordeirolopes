(function() {
    emailjs.init("SEU_USER_ID");
  })();
  
  document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_uppsf7d', 'template_5eq1x3r', this)
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        this.reset();
      }, (error) => {
        alert('Erro ao enviar. Tente novamente.');
        console.log('FAILED...', error);
      });
  });
  