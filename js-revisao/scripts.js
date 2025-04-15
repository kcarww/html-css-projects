const alunos = [
    {nome: "Falcão", curso: "Fullstack", nota: 10},
    {nome: "Maria", curso: "Marketing", nota: 9.5}
]

const listarAlunos = (alunos) => {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    for (const [index, aluno] of alunos.entries()) {
        tbody.innerHTML += `
        <tr>
            <td>${aluno.nome}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.nota}</td>
            <td>
                <button class="btn btn-secondary" onclick="editar(${index})">
                    Editar
                </button>
                <button class="btn btn-danger" onclick="deletar(${index})">
                    Deletar
                </button>
            </td>
        </tr>`
    }
}

function adicionarAluno() {
    const inputNome = document.getElementById('nome')
    const inputCurso = document.getElementById('curso')
    const inputNota = document.getElementById('nota')
    
    const aluno = {
        nome: inputNome.value, 
        curso: inputCurso.value, 
        nota: Number(inputNota.value)
    }
    
    alunos.push(aluno)
    listarAlunos(alunos)
    alert('Aluno Cadastrado com sucesso!')
    limparCampos()
}

function limparCampos() {
    const inputNome = document.getElementById('nome')
    const inputCurso = document.getElementById('curso')
    const inputNota = document.getElementById('nota')
    const inputFiltro = document.getElementById('nota-filtro')

    inputNome.value = ''
    inputCurso.value = ''
    inputNota.value = ''
    inputFiltro.value = ''
    inputNome.focus()
}

function filtrar() {
    const inputFiltro = document.getElementById('nota-filtro')
    const notaDigitada = Number(inputFiltro.value)

    const alunosFiltrados = alunos.filter(
        (aluno) => {
            return aluno.nota >= notaDigitada
        }
    )
    listarAlunos(alunosFiltrados)
    limparCampos()
}

listarAlunos(alunos)
