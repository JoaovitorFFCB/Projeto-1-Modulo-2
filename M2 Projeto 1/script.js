function mudarSelect(){
    let select = document.getElementById('select');
    let option = select.options[select.selectedIndex];
    let text = option.value;
    let caixaIncremento = document.getElementById('incremento');

    if(text == 'cesar'){
        if(caixaIncremento.classList.contains('hide') == true){
            caixaIncremento.removeAttribute('class')
        }
    } else{
        caixaIncremento.setAttribute('class', 'hide')
    }  

}

function changeBtn(val){
    if(val == 1){
        document.getElementById('btn-descrip').style.display='none';
        document.getElementById('btn-crip').style.display='block';
    } else{
        document.getElementById('btn-descrip').style.display='block';
        document.getElementById('btn-crip').style.display='none';
    }

}

function exeBtn(){

    let select = document.getElementById('select');
    let option = select.options[select.selectedIndex];
    let text = option.value;
    
    if(text == 'base64'){
    
        function criptBase64(){
            let btnCrip = document.getElementById('btnCrip');
            let textIn = document.getElementById('text-in').value;
            let textOut = document.getElementById('text-out');
        
            textOut.innerText = btoa(textIn);
        }
        
        function dcriptBase64(){
            let btnCrip = document.getElementById('btnCrip');
            let textIn = document.getElementById('text-in').value;
            let textOut = document.getElementById('text-out');
        
            textOut.innerText = atob(textIn);
        }

        btnCrip.addEventListener('click', criptBase64)
        btnDcrip.addEventListener('click', dcriptBase64)
        
    } else{

        let btnCrip = document.getElementById('btnCrip');
        function criptCesar(){
    
            let textIn = document.getElementById('text-in').value;
            let textOut = document.getElementById('text-out');
            
            let newString = '';
            let incremento = parseInt(document.getElementById('number').value);
            let i = 0;

            while(i < textIn.length){
                let num = textIn[i].charCodeAt()

                if(num >= 65 && num <= 90){
                    newString += String.fromCharCode(((num - 65 + incremento) % 26)+65);
                } else if(num >= 97 && num <= 122){
                    newString += String.fromCharCode(((num - 97 + incremento) % 26)+97);
                } else{
                    newString += textIn[i];
                }

                i++
            }
            textOut.innerText = newString  
        }

        let btnDcrip = document.getElementById('btnDcrip');
        function dcriptCesar(){
            let textIn = document.getElementById('text-in').value;
            let textOut = document.getElementById('text-out');
            
            let newString = '';
            let incremento = parseInt(document.getElementById('number').value);
            let i = 0;

            while(i < textIn.length){
                let num = textIn[i].charCodeAt()

                if(num >= 65 && num <= 90){
                    newString += String.fromCharCode(((num - 65 - incremento) % 26)+65);
                } else if(num >= 97 && num <= 122){
                    newString += String.fromCharCode(((num - 97 - incremento) % 26)+97);
                } else{
                    newString += textIn[i];
                }

                i++
            }
            textOut.innerText = newString  
        }

        btnCrip.addEventListener('click', criptCesar)
        btnDcrip.addEventListener('click', dcriptCesar)

    }

        
}

    btnCrip.addEventListener('click', exeBtn)
    btnDcrip.addEventListener('click', exeBtn)








    
    
    










