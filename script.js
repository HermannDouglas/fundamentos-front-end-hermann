window.onload = function() {
    let botoes = document.querySelectorAll("a.excluir");
    botoes.forEach(item => {
        item.addEventListener("click", () => {
            if(confirm("Deseja realmente excluir?")) {
                item.parentNode.parentNode.remove();
            }
        })
    });
}