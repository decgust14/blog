function merrInfo () {
    let emri= document.getElementById('Emri').value
    let mbiemri= document.getElementById('Mbiemri').value

    document.getElementById('smsEmri').textContent = emri
    document.getElementById('smsMbiemri').textContent = mbiemri
}

function krahaso() {
    let numri_1 = Number(document.getElementById('numri_1').value)
    let numri_2 = Number(document.getElementById('numri_2').value)
}

// if (kushti) {instruksionet}
// if (numri_1 > numri_2) {
//     mesazh.textContent =
//     numri_1 + "me i madh se nunri" + numri_2;
// } else if (numri_1 === numri_2) {
//     mesazh.textContent =
//      numri_1 + "i barabarte me " + numri_2;
// } else {
// mesazh.textContent = 
//   numri_1 + "me i vogel se " + numri_2;
// }

// }

// // switch

// // switch () {
// //     case "":
// //         instruksioni
// //         break
// //         default:
// }

for (let i=1; i<=15; i++) { 
  if (i % 3 == 0 && i % 5 == 0) {
console.log('FizzyBuzz')
   else if(i % 3 == 0) { 
        console.log('Fizz')
    } else if (i % 5 == 0 ) {
        console.log('Buzz')
} else {
    console.log(i)
} 
  }
}