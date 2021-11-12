const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() { 
// implemente o código do kata 1 aqui
    let total = []

    for (let i = 1; i <= 25; i++) {

        total.push(i)

    }

    return "Kata-1: " + total.join(', ')

}
console.log(kata1())



function kata2() { 
// implemente o código do kata 2 aqui
    let total = []

    for (let i = 25; i >= 1; i--) {

        total.push(i)

    }

    return "Kata-2: " + total.join(', ')

}
console.log(kata2())



function kata3() { 
// implemente o código do kata 3 aqui

    let total = []

    for (let i = 1; i <= 25; i++) {

        total.push(i * -1)

    }

    return "Kata-3: " + total.join(', ')

}
console.log(kata3())



function kata4() { 
// implemente o código do kata 4 aqui
    let total = []

    for (let i = 25; i >= 1; i--) {

        total.push(i * -1)

    }

    return "Kata-4: " + total.join(', ')

}



console.log(kata4())

function kata5() { 
// implemente o código do kata 5 aqui
    let total = []

    for (let i = 25; i >= -25; i--) {

        total.push(i)

    }

    return "Kata-5: " + total.join(', ')

}
console.log(kata5())



function kata6() { 
// implemente o código do kata 6 aqui
    let total = []

    for (let i = 1; i <= 100; i++) {

        if (i % 3 == 0) {

            total.push(i)

        }

    }

    return "Kata-6: " + total.join(', ')

}
console.log(kata6())



function kata7() { 
// implemente o código do kata 7 aqui
    let total = []

    for (let i = 1; i <= 100; i++) {

        if (i % 7 == 0) {

            total.push(i)

        }

    }

    return "Kata-7: " + total.join(', ')

}
console.log(kata7())



function kata8() { 
// implemente o código do kata 8 aqui
    let total = []

    for (let i = 100; i >= 1; i--) {

        if (i % 3 == 0 || i % 7 == 0) {

            total.push(i)

        }

    }

    return "Kata-8: " + total.join(', ')

}
console.log(kata8())



function kata9() { 
// implemente o código do kata 9 aqui
    let total = []

    for (let i = 1; i <= 100; i++) {

        if (i % 2 !== 0 && i % 5 == 0) {

            total.push(i)

        }

    }

    return "Kata-9: " + total.join(', ')

}
console.log(kata9())



function kata10() { 
// implemente o código do kata 10 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        total.push(sampleArray[i])

    }

    return "Kata-10: " + total.join(', ')

}
console.log(kata10())



function kata11() { 
// implemente o código do kata 11 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 == 0) {

            total.push(sampleArray[i])

        }

    }

    return "Kata-11: " + total.join(', ')

}
console.log(kata11())



function kata12() { 
// implemente o código do kata 12 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 !== 0) {

            total.push(sampleArray[i])

        }

    }

    return "Kata-12: " + total.join(', ')

}
console.log(kata12())



function kata13() { 
// implemente o código do kata 13 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 8 == 0) {

            total.push(sampleArray[i])

        }

    }

    return "Kata-13: " + total.join(', ')

}
console.log(kata13())



function kata14() { 
// implemente o código do kata 14 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        total.push(sampleArray[i] ** 2)

    }

    return "Kata-14: " + total.join(', ')

}
console.log(kata14())



function kata15() { 
// implemente o código do kata 15 aqui
    let result = 0

    for (let i = 1; i <= 20; i++) {

        result += i

    }

    return "Kata-15: " + result

}
console.log(kata15())



function kata16() { 
// implemente o código do kata 16 aqui
    let result = 0

    for (let i = 0; i < sampleArray.length; i++) {

        result += sampleArray[i]

    }

    return "Kata-16: " + result

}
console.log(kata16())



function kata17() {
// implemente o código do kata 17 aqui     
    let resultMin = 0

    for (let i = 0; i < sampleArray.length; i++) {


        if (sampleArray[i] < sampleArray[resultMin]) {

            resultMin = i

        }

    }

    return "Kata-17: " + sampleArray[resultMin]

}
console.log(kata17())



function kata18() { 
// implemente o código do kata 18 aqui
    let resultMax = 0

    for (let i = 0; i < sampleArray.length; i++) {


        if (sampleArray[i] > sampleArray[resultMax]) {

            resultMax = i

        }

    }

    return "Kata-18: " + sampleArray[resultMax]

}
console.log(kata18())



/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() { // implemente o código do kata bonus 1 aqui
}

function kataBonus2() { // implemente o código do kata bonus 2 aqui
}

function kataBonus3() { // implemente o código do kata bonus 3 aqui
}

function kataBonus4() { // implemente o código do kata bonus 4 aqui
}

function kataBonus5() { // implemente o código do kata bonus 5 aqui
}

