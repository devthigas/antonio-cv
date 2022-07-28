
// Objeto da biblioteca do typeit. Recebe o id do Dom, a mensagem para a animação, 
// o tempo da mensagem, e se ela ficará visivel ou não.

new TypeIt("#animate", {
    strings: " Bem-vindo ao meu portifólio! Desenvolvo aplicações utilizando HTML, CSS e JavaScript.",
    speed: 100,
    waitUntilVisible: true,
}).go();

// Enviar alerta ao clicar no botão 
function btnMsg(){
    alert("Formulario em construção")
}