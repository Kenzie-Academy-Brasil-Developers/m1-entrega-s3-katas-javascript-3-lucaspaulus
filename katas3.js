const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(result){
    console.log(result)
   
}

function kata1() { 
// implemente o código do kata 1 aqui
   
    let total = []
    
    for (let i = 1; i <= 25; i++) {

        total.push(i)


    }

    showResults("Kata-1: " + total.join(', '))
    return total

}
kata1()



function kata2() { 
// implemente o código do kata 2 aqui
    let total = []

    for (let i = 25; i >= 1; i--) {

        total.push(i)

    }
    showResults("Kata-2: " + total.join(', '))
    return total

}
kata2()



function kata3() { 
// implemente o código do kata 3 aqui

    let total = []

    for (let i = 1; i <= 25; i++) {

        total.push(i * -1)

    }
    showResults("Kata-3: " + total.join(', '))
    return total

}
kata3()



function kata4() { 
// implemente o código do kata 4 aqui
    let total = []

    for (let i = 25; i >= 1; i--) {

        total.push(i * -1)

    }
    showResults("Kata-4: " + total.join(', '))
    return total

}
kata4()



function kata5() { 
// implemente o código do kata 5 aqui
    let total = []

    for (let i = 25; i >= -25; i--) {

        total.push(i)

    }
    showResults("Kata-5: " + total.join(', '))
    return total

}
kata5()



function kata6() { 
// implemente o código do kata 6 aqui
    let total = []

    for (let i = 1; i <= 100; i++) {

        if (i % 3 == 0) {

            total.push(i)

        }

    }
    showResults("Kata-6: " + total.join(', '))
    return total

}
kata6()



function kata7() { 
// implemente o código do kata 7 aqui
    let total = []

    for (let i = 1; i <= 100; i++) {

        if (i % 7 == 0) {

            total.push(i)

        }

    }
    showResults("Kata-7: " + total.join(', '))
    return total

}
kata7()



function kata8() { 
// implemente o código do kata 8 aqui
    let total = []

    for (let i = 100; i >= 1; i--) {

        if (i % 3 == 0 || i % 7 == 0) {

            total.push(i)

        }

    }
    showResults("Kata-8: " + total.join(', '))
    return total

}
kata8()



function kata9() { 
// implemente o código do kata 9 aqui
    let total = []

    for (let i = 1; i <= 100; i++) {

        if (i % 2 !== 0 && i % 5 == 0) {

            total.push(i)

        }

    }
    showResults("Kata-9: " + total.join(', '))
    return total

}
kata9()



function kata10() { 
// implemente o código do kata 10 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        total.push(sampleArray[i])

    }
    showResults("Kata-10: " + total.join(', '))
    return total

}
kata10()



function kata11() { 
// implemente o código do kata 11 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 == 0) {

            total.push(sampleArray[i])

        }

    }
    showResults("Kata-11: " + total.join(', '))
    return total

}
kata11()



function kata12() { 
// implemente o código do kata 12 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 2 !== 0) {

            total.push(sampleArray[i])

        }

    }
    showResults("Kata-12: " + total.join(', '))
    return total

}
kata12()



function kata13() { 
// implemente o código do kata 13 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] % 8 == 0) {

            total.push(sampleArray[i])

        }

    }
    showResults("Kata-13: " + total.join(', '))
    return total

}
kata13()



function kata14() { 
// implemente o código do kata 14 aqui
    let total = []

    for (let i = 0; i < sampleArray.length; i++) {

        total.push(sampleArray[i] ** 2)

    }
    showResults("Kata-14: " + total.join(', '))
    return total

}
kata14()



function kata15() { 
// implemente o código do kata 15 aqui
    let result = 0

    for (let i = 1; i <= 20; i++) {

        result += i

    }
    showResults("Kata-15: " + result)
    return result

}
kata15()



function kata16() { 
// implemente o código do kata 16 aqui
    let result = 0

    for (let i = 0; i < sampleArray.length; i++) {

        result += sampleArray[i]

    }
    showResults("Kata-16: " + result)
    return result

}
kata16()



function kata17() {
// implemente o código do kata 17 aqui     
    let resultMin = 0

    for (let i = 0; i < sampleArray.length; i++) {


        if (sampleArray[i] < sampleArray[resultMin]) {

            resultMin = i

        }

    }
    showResults("Kata-17: " + sampleArray[resultMin])
    return resultMin

}
kata17()



function kata18() { 
// implemente o código do kata 18 aqui
    let resultMax = 0

    for (let i = 0; i < sampleArray.length; i++) {


        if (sampleArray[i] > sampleArray[resultMax]) {

            resultMax = i

        }

    }
    showResults("Kata-18: " + sampleArray[resultMax])
    return resultMax

}
kata18()



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

