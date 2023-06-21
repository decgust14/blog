// 1.Array -> lista,vektor
let array1 = [1,8,true, 'a', 'anna',[1,7.2,81,4]]
array1[4] = 'Jane'
console.log(array1)

let array2 = []
array2[5]='g'
array2['two']=8

console.log(array2)

let array3 = new Array(2,14,false, [2, 'a', 'y'])

// numri i elementeve
let lengthArray = array1.length

console.log(lengthArray)

// heqja nga fundi
let newArray = array1.pop()
console.log(array1)

// shtim nga fundi
// 
array1.push("add ele")
console.log(array1)

// console.log("'Thenia'-Emri Mbiemri") 
// "Thenia"-Emri Mbiemri

let takePart = array1.slice(-1)
console.log(takePart)


// for
for (let i = 0; i <array1.length; i++) {
    console.log("Ne indeksin "  +  i +  " ndodhet elementi "  +  array1[i])
}

// for in 
for (let j in array1) {
    console.log("Ne indeksin " + j + " ndodhet elementi" + array1[j])
}

// 2.objekt
let person= {
    emri:'Jane',
    mbiemri:'Doe',
    mosha: 30,
    trajnime:['Web','C++','Java'],
    muzika: {
kengetari : "X",
zhaner: 'pop'
    },
libra : [
    {
        auth: "auth1",
        titull : "titull 1"
    },
    {
        auth: "auth2",
        titull: "titull2"
    },
]
}
// console.log(person.muzika.zhaner[pop])
// nqs ke kllapa [] vendos nr kurse kur jan {} vendos me . si psh person.libra[1].auth


for (let individ in person) {
    console.log("Ne key " + individ+ " gjendet vlera" + person[individ])
}

// HideShow

function hideShow () {
    let lista =document.getElementById('lista')
    if(lista.style.display=='block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}