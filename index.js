// elementos criados para não ficar repetindo código

function createLabel (text, htmlFor) {
    const label = document.createElement('label') //criou um elemento LABEL aqui, vai gerar uma LABEL para gente
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function createInput (id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input') //criou um elemento INPUT que vai ser gerado
    input.id = id
    input.value = value
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input
}

const addPlayerBtn = document.getElementById('addPlayerBtn')
const form = document.getElementById('jogadorForm') //Pegou o FORM do elemento
const players = []
let inputRows = 0

addPlayerBtn.addEventListener('click', function(ev){
    const positionInput = document.getElementById('positionInput') //a lista do ul

    const newRow = document.createElement('li')
    const indiceRow = inputRows
    inputRows++ //ele vai adicionando de +1 em +1
    newRow.id = 'inputRow-' + indiceRow // para cada elemento que criar, ele vai criar um id diferente (no caso de +1 em +1)
    newRow.className = 'inputRow' //criou a class 'inputRow'

    const playerNameLabel = createLabel('Time: ', 'playerName-' + indiceRow) //adicionando o nome que foi proposto + playerName(variavel)
    const playerNameInput = createInput('playerName-' + indiceRow, null, 'playerName')

    const posiLabel = createLabel('Posições: ')
    const id1 = 'posiRadio-' + indiceRow + '.1'
    const posiRadio1 = createInput(id1, 'Goleiro', 'playPosi-' + indiceRow, 'radio') // id, value, name, type
    const posiLabel1 = createLabel('Goleiro', id1)
    const id2 = 'posiRadio-' + indiceRow + '.2'
    const posiRadio2 = createInput(id2, 'Zagueiro', 'playPosi-' + indiceRow, 'radio') // id, value, name, type
    const posiLabel2 = createLabel('Zagueiro', id2)
    const id3 = 'posiRadio-' + indiceRow + '.3'
    const posiRadio3 = createInput(id3, 'Meio-De-Campo', 'playPosi-' + indiceRow, 'radio') // id, value, name, type
    const posiLabel3 = createLabel('Meio-De-Campo', id3)
    const id4 = 'posiRadio-' + indiceRow + '.4'
    const posiRadio4 = createInput(id4, 'Atacante', 'playPosi-' + indiceRow, 'radio') // id, value, name, type
    const posiLabel4 = createLabel('Atacante', id4)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.id = 'btnDesclassificar'
    removeRowBtn.innerText = 'Desclassificar'
    removeRowBtn.addEventListener('click', function () {
        positionInput.remove(newRow) //vai remover o filho dela, no caso, uma <li> que for escolhida
    alert('Jogador desclassificado')
    })

    newRow.append ( //a gente vai acrescentar nós filhos nele (appendChild)
    playerNameLabel, playerNameInput, posiLabel, posiRadio1, posiLabel1, posiRadio2, posiLabel2, posiRadio3, posiLabel3, posiRadio4, posiLabel4, removeRowBtn
    )
    positionInput.appendChild(newRow)
})

form.addEventListener('submit', function (ev){
    ev.preventDefault() //nao atualiza a pagina

    const fullnameInput = document.getElementById('fullname') // pegou o numero la no html
    const numberplayerInput = document.getElementById('numberplayer') //pegou o numero lá do html
    const inputRows = document.querySelectorAll('.inputRow')

    let lineupPlayer = []
    inputRows.forEach(function (row){
        // rowId input (name="techName")
        const playerName = document.querySelector('#' + row.id + ' input[name="playerName"]').value // ele nao pegar o input de outras linhas, só dessa
        const playerPosition = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value // vai pegar o item apenas checkado
        lineupPlayer.push({name: playerName, playerPosition: playerPosition})
    })

    const newPlayer = {fullname: fullnameInput.value, numberplayer: numberplayerInput.value, lineupPlayer: lineupPlayer}
    players.push(newPlayer)
    alert('Jogador Convocado para o time')
    fullnameInput.value = ''
    numberplayerInput.value = ''
    inputRows.forEach(function (row){
        row.remove() // ele vai remover o elemento
    })

    console.log(players)
})

