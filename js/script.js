const formulario = document.getElementById("formPedido");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const produto = document.getElementById("produto").value;
    const arte = document.getElementById("arte").value;
    const frase = document.getElementById("frase").value;
    const quantidade = document.getElementById("quantidade").value;
    const observacoes = document.getElementById("observacoes").value;

    const mensagem =
`*NOVO PEDIDO - M's Personalizados*

👤 Nome: ${nome}

📱 WhatsApp: ${telefone}

📧 E-mail: ${email}

☕ Produto: ${produto}

🎨 Arte:
${arte}

✍️ Frase:
${frase}

📦 Quantidade:
${quantidade}

📝 Observações:
${observacoes}`;

    const numero = "5598991711692";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});