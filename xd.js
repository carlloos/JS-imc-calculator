function main(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento){
        evento.preventDefault() //previne a pagina de att ao enviar o form

        //pego as informações que sao colocadas no form
    
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');


        if(isNaN(peso.value)){
            resultado.innerHTML = `<p>Peso Inválido</p>`

        }else if(isNaN(altura.value)){
            resultado.innerHTML = `<p>Altura inválida</p>`
        }

        else{
        const imc = peso.value/(altura.value * altura.value);
        let condition;

        if(imc <= 18.5){
            condition = 'Abaixo do peso';
        }else if(imc > 18.5 && imc <= 24.9){
            condition = 'Peso ideal';
        }else if(imc > 24.9 && imc <= 29.9){
            condition = 'Levemente acima do peso'
        }else if(imc > 29.9 && imc <= 34.9){
            conditon = 'Obesidade grau 1';
        }else if(imc >34.9 && imc <= 39.9 ){
            condition = 'Obesdidade grau 2';
        }else{
            condition = 'Obesidade grau 3';
        }
    
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (${condition})</p>` //escrevo as informações na pagina
        
    
    }
}

    form.addEventListener('submit',recebeEventoForm) 
}
main();