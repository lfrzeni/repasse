emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
  .then(() => {
    alert('? Mensagem enviada com sucesso!');
    form.current?.reset();
  })
  .catch((error) => {
    console.error('? Erro ao enviar:', error);
    alert('Erro ao enviar a mensagem. Verifique os dados e tente novamente.');
  });
};
