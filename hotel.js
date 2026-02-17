function g(e) {
    return document.getElementById(e)
}
let everyarray = []
let everytimearray = []
const dat = new Date()

// Room1
let array = []
let timearray = []
function roomAdd() {
    if (array.length < 4) {
        let a = g('add').value
        if (a !== "") {
            array.push(a)
            timearray.push(dat)
            everyarray.push(a)
            everytimearray.push(dat)
            g('add').value = ""
            g('result').innerHTML = `Added to room`
            g('people').innerHTML = array.join('<br>')
            g('time').innerHTML = timearray.join('<br>')
            g('everyone').innerHTML = everyarray
            g('everytime').innerHTML = everytimearray
        }
        else {
            g('result').innerHTML = `Nothing there`
        }
    }
    else {
        g('result').innerHTML = `Room is full`
        g('add').value = ""
    }
}
function roomRemove() {
        let a = g('remove').value
        console.log(array.indexOf(a))
        let b = array.indexOf(a)
        if  (b !== -1) {
            array.splice(b,1)
            timearray.splice(b,1)
            console.log(timearray)
        }
        g('remove').value = ""
        g('result').innerHTML = `Removed from room`
        g('people').innerHTML = array.join('<br>')
        g('time').innerHTML = timearray.join('<br>')
}
function removeAll() {
    array.length = 0
    timearray.length = 0
    g('result').innerHTML = `Removed`
    g('people').innerHTML = 'ㅤ'
    g('time').innerHTML = 'ㅤ'
}
let lock = document.getElementById('lock')
let trufal = false
function lockswitch() {
    if (trufal === false) {
        trufal = true
        let a = g('add')
        let b = g('Added')
        let c = g('remove')
        let d = g('Removed')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        lock.textContent = 'Unlock the room';
    }
    else if (trufal === true) {
        trufal = false
        let a = g('add')
        let b = g('Added')
        let c = g('remove')
        let d = g('Removed')
        console.log(a)
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        lock.textContent = 'Lock the room';

    }
} 
// Room2
let array2 = []
let timearray2 = []
function roomAdd2() {
    if (array2.length < 4) {
        let a = g('add2').value
        if (a !== "") {
            array2.push(a)
            timearray2.push(dat)
            everyarray.push(a)
            everytimearray.push(dat)
            g('add2').value = ""
            g('result2').innerHTML = `Added to room`
            g('people2').innerHTML = array2.join('<br>')
            g('time2').innerHTML = timearray2.join('<br>')
            g('everyone').innerHTML = everyarray
            g('everytime').innerHTML = everytimearray
        }
        else {
            g('result2').innerHTML = `Nothing there`
        }
    }
    else {
        g('result2').innerHTML = `Room is full`
        g('add2').value = ""
    }
}
function roomRemove2() {
        let a = g('remove2').value
        console.log(array2.indexOf(a))
        let b = array2.indexOf(a)
        if  (b !== -1) {
            array2.splice(b,1)
            timearray2.splice(b,1)
            console.log(timearray2)
        }
        g('remove2').value = ""
        g('result2').innerHTML = `Removed from room`
        g('people2').innerHTML = array2.join('<br>')
        g('time2').innerHTML = timearray2.join('<br>')
}
function removeAll2() {
    array2.length = 0
    timearray2.length = 0
    g('result2').innerHTML = `Removed`
    g('people2').innerHTML = 'ㅤ'
    g('time2').innerHTML = 'ㅤ'
}
let lock2 = document.getElementById('lock2')
let trufal2 = false
function lockswitch2() {
    if (trufal2 === false) {
        trufal2 = true
        let a = g('add2')
        let b = g('Added2')
        let c = g('remove2')
        let d = g('Removed2')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        lock2.textContent = 'Unlock the room';
    }
    else if (trufal2 === true) {
        trufal2 = false
        let a = g('add2')
        let b = g('Added2')
        let c = g('remove2')
        let d = g('Removed2')
        console.log(a)
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        lock2.textContent = 'Lock the room';

    }
} 
// Room3
let array3 = []
let timearray3 = []
function roomAdd3() {
    if (array3.length < 4) {
        let a = g('add3').value
        if (a !== "") {
            array3.push(a)
            timearray3.push(dat)
            everyarray.push(a)
            everytimearray.push(dat)
            g('add3').value = ""
            g('result3').innerHTML = `Added to room`
            g('people3').innerHTML = array3.join('<br>')
            g('time3').innerHTML = timearray3.join('<br>')
            g('everyone').innerHTML = everyarray
            g('everytime').innerHTML = everytimearray
        }
        else {
            g('result3').innerHTML = `Nothing there`
        }
    }
    else {
        g('result3').innerHTML = `Room is full`
        g('add3').value = ""
    }
}
function roomRemove3() {
        let a = g('remove3').value
        console.log(array3.indexOf(a))
        let b = array3.indexOf(a)
        if  (b !== -1) {
            array3.splice(b,1)
            timearray3.splice(b,1)
            console.log(timearray3)
        }
        g('remove3').value = ""
        g('result3').innerHTML = `Removed from room`
        g('people3').innerHTML = array3.join('<br>')
        g('time3').innerHTML = timearray3.join('<br>')
}
function removeAll3() {
    array3.length = 0
    timearray3.length = 0
    g('result3').innerHTML = `Removed`
    g('people3').innerHTML = 'ㅤ'
    g('time3').innerHTML = 'ㅤ'
}
let lock3 = document.getElementById('lock3')
let trufal3 = false
function lockswitch3() {
    if (trufal3 === false) {
        trufal3 = true
        let a = g('add3')
        let b = g('Added3')
        let c = g('remove3')
        let d = g('Removed3')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        lock3.textContent = 'Unlock the room';
    }
    else if (trufal3 === true) {
        trufal3 = false
        let a = g('add3')
        let b = g('Added3')
        let c = g('remove3')
        let d = g('Removed3')
        console.log(a)
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        lock3.textContent = 'Lock the room';

    }
} 
// Room4
let array4 = []
let timearray4 = []
function roomAdd4() {
    if (array4.length < 4) {
        let a = g('add4').value
        if (a !== "") {
            array4.push(a)
            timearray4.push(dat)
            everyarray.push(a)
            everytimearray.push(dat)
            g('add4').value = ""
            g('result4').innerHTML = `Added to room`
            g('people4').innerHTML = array4.join('<br>')
            g('time4').innerHTML = timearray4.join('<br>')
            g('everyone').innerHTML = everyarray
            g('everytime').innerHTML = everytimearray
        }
        else {
            g('result4').innerHTML = `Nothing there`
        }
    }
    else {
        g('result4').innerHTML = `Room is full`
        g('add4').value = ""
    }
}
function roomRemove4() {
        let a = g('remove4').value
        console.log(array4.indexOf(a))
        let b = array4.indexOf(a)
        if  (b !== -1) {
            array4.splice(b,1)
            timearray4.splice(b,1)
            console.log(timearray4)
        }
        g('remove4').value = ""
        g('result4').innerHTML = `Removed from room`
        g('people4').innerHTML = array4.join('<br>')
        g('time4').innerHTML = timearray4.join('<br>')
}
function removeAll4() {
    array4.length = 0
    timearray4.length = 0
    g('result4').innerHTML = `Removed`
    g('people4').innerHTML = 'ㅤ'
    g('time4').innerHTML = 'ㅤ'
}
let lock4 = document.getElementById('lock4')
let trufal4 = false
function lockswitch4() {
    if (trufal4 === false) {
        trufal4 = true
        let a = g('add4')
        let b = g('Added4')
        let c = g('remove4')
        let d = g('Removed4')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        lock4.textContent = 'Unlock the room';
    }
    else if (trufal4 === true) {
        trufal4 = false
        let a = g('add4')
        let b = g('Added4')
        let c = g('remove4')
        let d = g('Removed4')
        console.log(a)
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        lock4.textContent = 'Lock the room';

    }
} 
// Room5
let array5 = []
let timearray5 = []
function roomAdd5() {
    if (array5.length < 4) {
        let a = g('add5').value
        if (a !== "") {
            array5.push(a)
            timearray5.push(dat)
            everyarray.push(a)
            everytimearray.push(dat)
            g('add5').value = ""
            g('result5').innerHTML = `Added to room`
            g('people5').innerHTML = array5.join('<br>')
            g('time5').innerHTML = timearray5.join('<br>')
            g('everyone').innerHTML = everyarray
            g('everytime').innerHTML = everytimearray
        }
        else {
            g('result5').innerHTML = `Nothing there`
        }
    }
    else {
        g('result5').innerHTML = `Room is full`
        g('add5').value = ""
    }
}
function roomRemove5() {
        let a = g('remove5').value
        console.log(array5.indexOf(a))
        let b = array5.indexOf(a)
        if  (b !== -1) {
            array5.splice(b,1)
            timearray5.splice(b,1)
            console.log(timearray5)
        }
        g('remove5').value = ""
        g('result5').innerHTML = `Removed from room`
        g('people5').innerHTML = array5.join('<br>')
        g('time5').innerHTML = timearray5.join('<br>')
}
function removeAll5() {
    array5.length = 0
    timearray5.length = 0
    g('result5').innerHTML = `Removed`
    g('people5').innerHTML = 'ㅤ'
    g('time5').innerHTML = 'ㅤ'
}
let lock5 = document.getElementById('lock5')
let trufal5 = false
function lockswitch5() {
    if (trufal5 === false) {
        trufal5 = true
        let a = g('add5')
        let b = g('Added5')
        let c = g('remove5')
        let d = g('Removed5')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        lock5.textContent = 'Unlock the room';
    }
    else if (trufal5 === true) {
        trufal5 = false
        let a = g('add5')
        let b = g('Added5')
        let c = g('remove5')
        let d = g('Removed5')
        console.log(a)
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        lock5.textContent = 'Lock the room';

    }
} 
// Room6
let array6 = []
let timearray6 = []
function roomAdd6() {
    if (array6.length < 4) {
        let a = g('add6').value
        if (a !== "") {
            array6.push(a)
            timearray6.push(dat)
            everyarray.push(a)
            everytimearray.push(dat)
            g('add6').value = ""
            g('result6').innerHTML = `Added to room`
            g('people6').innerHTML = array6.join('<br>')
            g('time6').innerHTML = timearray6.join('<br>')
            g('everyone').innerHTML = everyarray
            g('everytime').innerHTML = everytimearray
        }
        else {
            g('result6').innerHTML = `Nothing there`
        }
    }
    else {
        g('result6').innerHTML = `Room is full`
        g('add6').value = ""
    }
}
function roomRemove6() {
        let a = g('remove6').value
        console.log(array6.indexOf(a))
        let b = array6.indexOf(a)
        if  (b !== -1) {
            array6.splice(b,1)
            timearray6.splice(b,1)
            console.log(timearray6)
        }
        g('remove6').value = ""
        g('result6').innerHTML = `Removed from room`
        g('people6').innerHTML = array6.join('<br>')
        g('time6').innerHTML = timearray6.join('<br>')
}
function removeAll6() {
    array6.length = 0
    timearray6.length = 0
    g('result6').innerHTML = `Removed`
    g('people6').innerHTML = 'ㅤ'
    g('time6').innerHTML = 'ㅤ'
}
let lock6 = document.getElementById('lock6')
let trufal6 = false
function lockswitch6() {
    if (trufal6 === false) {
        trufal6 = true
        let a = g('add6')
        let b = g('Added6')
        let c = g('remove6')
        let d = g('Removed6')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        lock6.textContent = 'Unlock the room';
    }
    else if (trufal6 === true) {
        trufal6 = false
        let a = g('add6')
        let b = g('Added6')
        let c = g('remove6')
        let d = g('Removed6')
        console.log(a)
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        lock6.textContent = 'Lock the room';

    }
} 