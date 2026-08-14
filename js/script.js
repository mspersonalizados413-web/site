const produtoSelect = document.getElementById("produto");
const opcoesBlusa = document.getElementById("opcoesBlusa");

produtoSelect.addEventListener("change", function () {

    if (produtoSelect.value === "Blusa Personalizada") {
        opcoesBlusa.style.display = "block";
    } else {
        opcoesBlusa.style.display = "none";
    }

});


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

    const tamanho = document.getElementById("tamanho").value;
    const corBlusa = document.getElementById("corBlusa").value;
    const localEstampa = document.getElementById("localEstampa").value;

    let detalhesBlusa = "";

    if (produto === "Blusa Personalizada") {

        detalhesBlusa =
`👕 Tamanho: ${tamanho}

🎨 Cor da blusa: ${corBlusa}

📍 Local da estampa: ${localEstampa}

`;

    }

    const mensagem =
`*NOVO PEDIDO - M's Personalizados*

👤 Nome: ${nome}

📱 WhatsApp: ${telefone}

📧 E-mail: ${email}

🛍️ Produto: ${produto}

${detalhesBlusa}🎨 Arte:
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