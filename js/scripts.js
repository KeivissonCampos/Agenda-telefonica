const formCadastro = document.querySelector('#cadastrar');
let colorIcone = ['img-red', 'img-blue','img-green'];
let listas = '';

formCadastro.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nomeContato = document.querySelector('#nome-contato');
    const telContato = document.querySelector('#tel-contato');

    const telefoneValido = validarTelefone(telContato.value);

    if (!telefoneValido) {
        alert("Por favor, insira um número de telefone válido.\nopções validas: \n\n'(11) 91234-5678' \n'11912345678' \n'11 91234 5678' \n'1123456789'");
        return;
    }

    let lista = `<li>`
    lista +=
    `   <div class="icone ${colorIcone[getRandomColor()]}">
            <img src="img/icon.png" alt="">
        </div>
        <div class="dados">
            <p>${nomeContato.value}</p>
            <p>${telContato.value}</p>
        </div>
    </li>    
    `;

    listas += lista;

    const listContato = document.querySelector('ul');
    listContato.innerHTML = listas;
    
});

function getRandomColor() {
    return Math.floor(Math.random() * colorIcone.length)
}

function validarTelefone(telefone) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);
}