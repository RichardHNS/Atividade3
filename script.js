let vetor = [];
let id  = 1;

function Insira() {
      let pri = Number(document.getElementById("input1").value);
      vetor.push(pri);
      id = id++;
      console.log('inserio',vetor);
      document.getElementById('lista').innerHTML = vetor.join(', ');

}
function Remover() {
    let remo = vetor.pop();
    console.log('remover =',vetor);
}
function Inevert() {
    
    let  reversed = vetor.reverse();
    console.log('reversed =', reversed);
}
function Mostrar() {
    
}