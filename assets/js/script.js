// // Towers_wrapper
// //capturando a section que embrulha as sections
// const towers = document.querySelector('#towers_wrapper');

// //Towers_listener
// //ouvinte da torre 1
// const tower1 = document.querySelector('.t-1');
// tower1.addEventListener('click', (e) =>{
//     console.log('TARGET',(e.target));
// });

// //ouvinte da torre 2
// const tower2 = document.querySelector('.t-2');
// tower2.addEventListener('click', (e) =>{
//     console.log('TARGET',(e.target));
// });

// //ouvinte da torre 3
// const tower3 = document.querySelector('.t-3');
// tower3.addEventListener('click', (e) =>{
//     console.log('TARGET',(e.target));
// });

// //Creating_discs
// //cria os discos principais da tela
// const inner_discs =()=>{
//     for(let i=1; i<6; i++){
//         const disc = document.createElement('span');
//         disc.id = i;
//         disc.className = 'item';
//         disc.innerHTML = i;
//         disc.style.cursor = 'pointer'
//         disc.style.border = '1px solid';
//         disc.draggable = true;
//         tower1.appendChild(disc);
//     }
//     return inner_discs;
// }
// inner_discs();

// //Items(discs)_functions
// //ouvinte quando clica e começa a arrastar o item
// const items = document.querySelectorAll('.item');
// items.forEach(item => {
//     item.addEventListener('dragstart', dragStart);
//     item.addEventListener('dragstart', dragEnd);
// });

// //quando começa a arrastar o item roda essa func;
// //que adiciona uma classe no item que fica com opacity 0.5
// function dragStart (e){
//     e.currentTarget.classList.add('dragging');
// }

// //quando termina de arrastar o item roda essa func;
// //remove a classe opacity
// function dragEnd(e){
//     e.currentTarget.classList.remove('dragging');
// }

// //Dropping_area
// //Area onde se pode dropar os items
// const drop_area = document.querySelectorAll('.drop_area');
// drop_area.forEach(area => {
//     area.addEventListener('dragover', dragOver);
//     area.addEventListener('dragleave', dragLeave);
//     area.addEventListener('drop', drop);
// });

// //pega o id quando movimentado
// // let itmov = document.querySelector('.item')
// // itmov.addEventListener("move", (e)=>{
// //     console.log(itmov('TARGET',e.target))
// // });


// //Roda sempre que arrastar um item e o item pasar por cima
// // da area do evento no caso as drop-areas
// function dragOver (e){
//     e.currentTarget.classList.add('hover');
//     e.preventDefault(); 

//     console.log('passou por min'+'TARGET',(e.target))

//     // console.log(itmov)
// }

// //Roda quando o item arrastado sai de uma area dropavel
// //Onde se pode soltar o item 
// function dragLeave (e){
//     e.currentTarget.classList.remove('hover');

//     console.log('saiu'+'TARGET',(e.target))
// }

// //Dropping do item
// //Quando soltar o item
// function drop (e){
//     e.currentTarget.classList.remove('hover');

    

//     console.log('dropou na '+'TARGET',(e.target))
//     console.log('TARGET',(e.target))
// }

// //e.preventDefault(); 
// //libera o drop do item que por padrão e negado;


// Towers_wrapper
//capturando a section que embrulha as sections
const towers = document.querySelector('#towers_wrapper');

//Towers_listener
//ouvinte da torre 1
const tower1 = document.querySelector('#twr_1');
tower1.addEventListener('mouseenter', (e) =>{
    // console.log('TARGET',(e.target));
    // e.currentTarget.classList.add('moving');
});
//ouvinte da torre 2
const tower2 = document.querySelector('#twr_2');
tower2.addEventListener('mouseenter', (e) =>{
    // console.log('TARGET',(e.target));
});
//ouvinte da torre 3
const tower3 = document.querySelector('#twr_3');
tower3.addEventListener('mouseenter', (e) =>{
    // console.log('TARGET',(e.target));
});

//==>O mesmo codigo de ecima resumido
//==>Porem deixei que vou ter de rever depois tenho que rever esse codigo que monitora as torres
// const towers_listener = document.querySelectorAll('.drop_area');
// towers_listener.forEach(towerArea => {
//     towerArea.addEventListener('mouseenter', (e) =>{
//     // console.log('TARGET',(e.target));
// });

//============================== CRIAÇÃO DOS DISCOS =========================================

//Função que adiciona os discos
function addDiscs(qtd){
  for(let i=1;i<=qtd;i++){
    const tower1 = document.querySelector('#twr_1');
    const disc = document.createElement("span");
    disc.id = (qtd-i+1); //usamos para indentificar os discos
    disc.classList = 'disc'; //Usamos para captar todos os discos
    disc.innerHTML = (qtd-i+1);//não apaga confia!
    disc.style.cursor = 'pointer';
    disc.style.border = '1px solid';
    disc.draggable = true;
    tower1.appendChild(disc);
  }
  return addDiscs;
}

//adicionando os discos na div Torre1
addDiscs(5)

//============================= CAPTURANDO OS DISCOS E TORRES =====================================

//Selecionando todos os discos
const discs = document.querySelectorAll(".disc") // pegar todos os discos

//=========================== FUNÇŌES PARA OS DISCOS ============================================

//Adicionando funçōes APENAS PARA OS DISCOS 
//=> dragStart(Iniciando o movimento do disco)
//=> drag(Quando o disco estiver em movimento)
//=> dragend(Quando finalizar o movimento do disco)
discs.forEach(disc => {
  disc.addEventListener("dragstart", dragStart) //quando comeca a mover
  disc.addEventListener("drag", drag) // esta movendo
  disc.addEventListener("dragend", dragEnd) //quando termina
})

//=> dragStart(Iniciando o movimento do disco)
function dragStart(e){
  //console.log("Começou a mover!")
  e.currentTarget.classList.add('moving');
//   console.log(e.currentTarget)
}

//=> drag(Quando o disco estiver em movimento)
function drag(e){
  //console.log("Movendo!")
}

//=> dragend(Quando finalizar o movimento do disco)
function dragEnd(e){
  //console.log("Terminou de mover!")
  e.currentTarget.classList.remove('moving');
}

//========================= FUNÇŌES PARA AS TORRES ==============================================

//Adicionando funçōes APENAS PARA AS TORRES
//=> dragenter(Quando ENTRAR na torre)
//=> dragover(Quando ESTIVER dentro da torre)
//=> dragleave(Quando SAIR da torre)
//=> drop(Quando SOLTA NA torre)

//Selecionando todas as torres
const torres = document.querySelectorAll(".tower") //pegar todas as torres

torres.forEach(torre =>{
  torre.addEventListener("dragenter", dragenter);
  torre.addEventListener("dragover", dragover);
  torre.addEventListener("dragleave", dragleave);
  torre.addEventListener("drop", drop);
  return torre;
})


//=> dragenter(Quando ENTRAR na torre)
function dragenter(e){
//   console.log("Entrou na torre!");
  let torreID = (e).currentTarget;
//   console.log(torreID)
    const idg = e.target.lastChild;

  let itemID = document.querySelector('.moving');
//   console.log(itemID)
}

//=> dragover(Quando ESTIVER dentro da torre)
function dragover(e){

    //Define uma variavel com elemento da torre que o item esta em cima
    let torreID = (e).currentTarget;
    // console.log(torreID)

    //Define uma variavel com a tag do item que esta em movimento
    let itemID = document.querySelector('.moving');
    // console.log(itemID)

    //verifise o item arrastado esta na area permitida para liberar o sinal de mais 
    //de que pode dropar ainda irei mexer
    // if((e.target.querySelector('.disc') === null) || (idg.id < itemID.id)){
        // e.preventDefault(itemID); 
    // }else{return false}

    //variavel que seleciona o ultimo elemento que estiver na coluna
    const idg = e.target.lastChild;
    // console.log(idg.id);

    //validação para permitir o drop nas colunas
    if((e.target.querySelector('.disc') === null) || (idg.id > itemID.id)){
        e.preventDefault(itemID); 
        e.target.classList.add('yes');
    }else{
        e.target.classList.add('noo');
    }

}

//=> dragleave(Quando SAIR da torre)
function dragleave(e){
    e.target.classList.remove('yes');
    e.target.classList.remove('noo');
}
//ainda irei mexer

//=> drop(Quando SOLTA NA torre)
function drop(e){
    //Define uma variavel com a tag do item que esta em movimento
    let itemID = document.querySelector('.moving');
    // console.log(e.target)
    const idg = e.target.lastChild;
    // console.log(idg);

    //validação para permitir o drop nas colunas
    if((e.target.querySelector('.disc') === null) || (idg.id > itemID.id)){
        e.target.appendChild(itemID);
    }

    //remove classes yes or no
    e.currentTarget.classList.remove('moving');
    e.target.classList.remove('yes');
}
