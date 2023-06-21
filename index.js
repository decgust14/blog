// console.log("Hello")

// let nr1 = 5; //int
// let nr2= 2.5 // float
// let nr3= 4
// let nr4= '5'
// console.log(nr1 == nr4) // 5=='5'
// console.log(nr1 == nr4) // 5 == '5' 
// console.log(nr1 === nr4) // 5==='5' -> false => 5 == 5 && number ==

// console.log(typeof(nr4))

// // Operatoret llogjik: and => &&; or =>  ||; not => ! 
// console.log (nr1== nr2 && nr1 < nr3)

// // and

// // T && T => T
// // T && F => F
// // F && T => F
// // F && F => F

// console.log (nr1== nr2 || nr1 < nr3)

// // T || T => T
// // T || F => T
// // F || T => T
// // F || F => F

// // not => !

// // F => !F =>T
// console.log (!(nr1== nr2))


// 1>5 && 6 == '6' || 5>9 || (! 5==='5')
// // F && T || F || ! (!F)
// // F && T || F || ! T
// // F || F || T
// // F || T
// // T


// // console.log (nr1 != nr2) // kur ! bashkohet me = lexohet "ndryshe"
// // console.log(nr1 !==nr4) // true


// // let nr6 = parseInt(window.prompt("Vendos numrin e pare!"))
// // let nr7 = window.prompt("Vendos numrin e dyte")

// // console.log(nr6 + parseInt(nr7))
// // console.log(nr6 + ' eshte ' + typeof (nr6))
// // console.log(nr7 + ' eshte ' + typeof (nr7))


// // let nr6 = parseFloat(window.prompt("Vendos numrin e pare!"))
// // let nr7 = window.prompt("Vendos numrin e dyte")

// // console.log(nr6 + parseFloat(nr7))
// // console.log(nr6 + ' eshte ' + typeof (nr6))
// // console.log(nr7 + ' eshte ' + typeof (nr7))\


//  let n = parseFloat("10",2);

//  console.log(n)



// Funksion pa parametra
function sum() {
    let numri_1 = Number(document.getElementById('numri_1').value)
    let numri_2 = Number(document.getElementById('numri_2').value)

    let shuma = numri_1 + numri_2
    document.getElementById('sms').textContent = shuma
}