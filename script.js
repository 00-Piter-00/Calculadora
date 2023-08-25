var res = document.getElementById('res')
var txtn1 = ''
var txtn2 = ''
var s = ''
var cel = 1

function um() {
    if (cel == 1) {
        txtn1 += '1'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '1'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function dois() {
    if (cel == 1) {
        txtn1 += '2'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '2'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function tres() {
    if (cel == 1) {
        txtn1 += '3'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '3'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function quatro() {
    if (cel == 1) {
        txtn1 += '4'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '4'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function cinco() {
    if (cel == 1) {
        txtn1 += '5'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '5'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function seis() {
    if (cel == 1) {
        txtn1 += '6'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '6'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function sete() {
    if (cel == 1) {
        txtn1 += '7'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '7'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function oito() {
    if (cel == 1) {
        txtn1 += '8'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '8'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function nove() {
    if (cel == 1) {
        txtn1 += '9'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '9'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}
function zero() {
    if (cel == 1) {
        txtn1 += '0'
        res.innerHTML = `${txtn1}`
    } else {
        txtn2 += '0'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
}

function adição() {
    cel = 2
    s = '+'
    res.innerHTML = `${txtn1} ${s}`
}
function subtração() {
    if (txtn2 == '' && cel == 2) {
        txtn2 += '-'
        res.innerHTML = `${txtn1} ${s} ${txtn2}`
    }
    if (txtn1 != '' && cel == 1) {
        cel = 2
        s = '-'
        res.innerHTML = `${txtn1} ${s}`
    }
    if (txtn1 == '') {
        txtn1 += '-'
        res.innerHTML = `${txtn1}`
    }
}
function mutiplicação() {
    cel = 2
    s = '*'
    res.innerHTML = `${txtn1} ${s}`
}
function divisão() {
    cel = 2
    s = '/'
    res.innerHTML = `${txtn1} ${s}`
}

function somar() {
    var n1 = Number(txtn1)
    var n2 = Number(txtn2)
    var r = ''
    if (s == '+') {
        r = n1 + n2
        res.innerHTML = `${n1} ${s} ${n2} = ${r}`
    }
    if (s == '-') {
        r = n1 - n2
        res.innerHTML = `${n1} ${s} ${n2} = ${r}`
    }
    if (s == '*') {
        r = n1 * n2
        res.innerHTML = `${n1} ${s} ${n2} = ${r}`
    }
    if (s == '/') {
        r = n1 / n2
        res.innerHTML = `${n1} ${s} ${n2} = ${r}`
    }
}

function reset() {
    //location.reload()
    cel = 1
    txtn1 = ''
    txtn2 = ''
    n1 = ''
    n2 = ''
    s = ''
    r = ''
    res.innerHTML = ``
}
