document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    // Validação do nome
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/; // Apenas letras e espaços
    const wordsCount = name.trim().split(/\s+/).length; // Contagem de palavras

    if (!nameRegex.test(name)) {
        alert("O nome só pode conter letras e espaços.");
        return;
    }

    if (name.length < 4 || name.length > 8) {
        alert("O nome deve ter entre 4 e 8 caracteres.");
        return;
    }

    if (wordsCount < 2 || wordsCount > 5) {
        alert("O nome deve conter entre 2 e 5 palavras.");
        return;
    }

    // Validação do telefone
    const phoneRegex = /^[0-9]+$/; // Apenas números
    if (!phoneRegex.test(phone)) {
        alert("O telefone só pode conter números.");
        return;
    }

    // Adicionar a nova linha à tabela
    const table = document.getElementById("contact-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.textContent = name;
    cell2.textContent = phone;

    // Limpar o formulário após o envio
    document.getElementById("contact-form").reset();
});
