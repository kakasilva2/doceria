// Seleciona todos os elementos <label>
const labels = document.querySelectorAll("label");

// Adiciona um evento de clique para cada elemento <label>
labels.forEach((label) => {
    label.addEventListener("click", () => {
        // Obtém o elemento <input> associado ao <label>
        const checkbox = label.querySelector("input[type=checkbox]");

        // Alterna a classe "checked" no <input>
        checkbox.classList.toggle("checked");
    });
});
