// Seleção correta dos elementos de conteúdo das abas
let tabs = document.querySelectorAll(".shows-tabs-button");
let tabContents = document.querySelectorAll(".tab-content > div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        // Remove a classe 'active' de todos os conteúdos
        tabContents.forEach((content) => {
            content.classList.remove("active");
        });
        
        // Remove a classe 'active' de todas as abas
        tabs.forEach(t => {
            t.classList.remove("active");
        });

        // Adiciona a classe 'active' ao conteúdo da aba selecionada
        tabContents[index].classList.add("active");
        
        // Adiciona a classe 'active' à aba clicada
        tab.classList.add("active");
    });
});


let lastScrollTop = 0; // Variável para guardar a posição anterior do scroll

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Pega a posição atual do scroll
    if (currentScroll > lastScrollTop) {
        // Se a posição atual for maior que a anterior, o usuário está rolando para baixo
        document.querySelector("header").classList.add("hidden");
    } else {
        // Se for menor, está rolando para cima
        document.querySelector("header").classList.remove("hidden");
    }
    lastScrollTop = currentScroll; // Atualiza a posição anterior do scroll para a atual
}, false);