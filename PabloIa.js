function responder() {
  const pergunta = document.getElementById("pergunta").value.toLowerCase().trim();
  const respostaEl = document.getElementById("resposta");

  // Respostas específicas
  const respostas = {
    "oi": "Olá! Tudo bem? Como posso te ajudar?",
    "tudo bem?": "Tudo ótimo, e com você?",
    "quem é você?": "Sou a Pablo IA, criada para responder suas dúvidas!",
    "brainrot 1": "Esse item custa 10 Robux. Fale comigo no WhatsApp para comprar.",
    "brainrot 2": "O Brainrot 2 está disponível! Preço: 12 Robux.",
    "brainrot 3": "Esse item é raro! Custa 15 Robux.",
    // Continue com: "brainrot 4": "...", até o 20
  };

  // Verifica se a pergunta está cadastrada
  if (respostas[pergunta]) {
    respostaEl.textContent = respostas[pergunta];
  } else {
    respostaEl.textContent = "Desculpe, não sei responder isso ainda.";
  }
}
