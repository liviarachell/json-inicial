document.addEventListener("DOMContentLoaded", async () => {
    const resultado = document.createElement("div");
    document.body.appendChild(resultado);

    try {
        const response = await fetch("./DATA/aluno.json");
        const dados = await response.json();

        resultado.innerHTML = "<h2>Lista de Alunos</h2>";

        dados.alunos.forEach(aluno => {
            resultado.innerHTML += `
                <div class="card">
                    <h3>${aluno.nome}</h3>
                    <p>ID: ${aluno.idaluno}</p>
                    <p>Série: ${aluno.serie}</p>
                </div>
            `;
        });

    } catch (erro) {
        resultado.innerHTML = `
            <h2>Erro ao carregar aluno.json</h2>
            <p>${erro.message}</p>
        `;
        console.error(erro);
    }
});