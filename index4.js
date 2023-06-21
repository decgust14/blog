// text
function changeText(text, colorText, fontText) {
    let h1 = document.getElementById('text');
   h1.textContent = text;
   h1.style.color = colorText;
   h1.style.fontSize = fontText;
}

// Image
function changeImg() {
    let image= document.getElementById('imgChange')
    if(image.src.match( 'images/img3.jpg')) {
        image.src = 'images/img4.jpg'
    } else {
        image.src = 'images/img3.jpg' 
    }
    
}

// Form
function validate() {
    let username= document.getElementById('username').value 
    let pass1= document.getElementById('pass1').value
    let pass2= document.getElementById('pass2').value

    if(username == '') {
        document.getElementById('sms').textContent = 'Fusha duhet te plotesohet'
    }

    if(pass1.length <= 8){
        document.getElementById('sms').textContent = 'Ka me pak se 8 karaktere'
    }

    if(pass1 != pass2) {
        document.getElementById('sms').textContent = 'Passwordi nuk eshte njesoj'
    } else{
        document.getElementById('sms').textContent = 'Ok'
    }
}




// jQuery
$(document).ready(function(){
    console.log('Hello')
    $('div + p')

})