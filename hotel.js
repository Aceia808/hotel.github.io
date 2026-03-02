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
            g('everyone').innerHTML = everyarray.join('<br>')
            g('everytime').innerHTML = everytimearray.join('<br>')
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
        a.disabled = true
        b.disabled = true
        lock.textContent = 'Unlock the room';
    }
    else if (trufal === true) {
        trufal = false
        let a = g('add')
        let b = g('Added')
        console.log(a)
        a.disabled = false
        b.disabled = false
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
            g('everyone').innerHTML = everyarray.join('<br>')
            g('everytime').innerHTML = everytimearray.join('<br>')
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
        a.disabled = true
        b.disabled = true
        lock2.textContent = 'Unlock the room';
    }
    else if (trufal2 === true) {
        trufal2 = false
        let a = g('add2')
        let b = g('Added2')
        console.log(a)
        a.disabled = false
        b.disabled = false
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
            g('everyone').innerHTML = everyarray.join('<br>')
            g('everytime').innerHTML = everytimearray.join('<br>')
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
        a.disabled = true
        b.disabled = true
        lock3.textContent = 'Unlock the room';
    }
    else if (trufal3 === true) {
        trufal3 = false
        let a = g('add3')
        let b = g('Added3')
        console.log(a)
        a.disabled = false
        b.disabled = false
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
            g('everyone').innerHTML = everyarray.join('<br>')
            g('everytime').innerHTML = everytimearray.join('<br>')
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
        a.disabled = true
        b.disabled = true
        lock4.textContent = 'Unlock the room';
    }
    else if (trufal4 === true) {
        trufal4 = false
        let a = g('add4')
        let b = g('Added4')
        console.log(a)
        a.disabled = false
        b.disabled = false
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
            g('everyone').innerHTML = everyarray.join('<br>')
            g('everytime').innerHTML = everytimearray.join('<br>')
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
        a.disabled = true
        b.disabled = true
        lock5.textContent = 'Unlock the room';
    }
    else if (trufal5 === true) {
        trufal5 = false
        let a = g('add5')
        let b = g('Added5')
        console.log(a)
        a.disabled = false
        b.disabled = false
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
            g('everyone').innerHTML = everyarray.join('<br>')
            g('everytime').innerHTML = everytimearray.join('<br>')
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
        a.disabled = true
        b.disabled = true
        lock6.textContent = 'Unlock the room';
    }
    else if (trufal6 === true) {
        trufal6 = false
        let a = g('add6')
        let b = g('Added6')
        console.log(a)
        a.disabled = false
        b.disabled = false
        lock6.textContent = 'Lock the room';

    }
} 
let masterlock = document.getElementById('masterlock')
let trufal7 = false
function lockrooms() {
    if (trufal7 === false) {
        trufal = true
        trufal2 = true
        trufal3 = true
        trufal4 = true
        trufal4 = true
        trufal6 = true
        trufal7 = true
        // room 1
        let a = g('add')
        let b = g('Added')
        let c = g('remove')
        let d = g('Removed')
        let e = g('AllRemoved')
        let f = g('lock')
        a.disabled = true
        b.disabled = true
        c.disabled = true
        d.disabled = true
        e.disabled = true
        f.disabled = true
        // room 2
        let a2 = g('add2')
        let b2 = g('Added2')
        let c2 = g('remove2')
        let d2 = g('Removed2')
        let e2 = g('AllRemoved2')
        let f2 = g('lock2')
        a2.disabled = true
        b2.disabled = true
        c2.disabled = true
        d2.disabled = true
        e2.disabled = true
        f2.disabled = true
        // room 3
        let a3 = g('add3')
        let b3 = g('Added3')
        let c3 = g('remove3')
        let d3 = g('Removed3')
        let e3 = g('AllRemoved3')
        let f3 = g('lock3')
        a3.disabled = true
        b3.disabled = true
        c3.disabled = true
        d3.disabled = true
        e3.disabled = true
        f3.disabled = true
        // room 4
        let a4 = g('add4')
        let b4 = g('Added4')
        let c4 = g('remove4')
        let d4 = g('Removed4')
        let e4 = g('AllRemoved4')
        let f4 = g('lock4')
        a4.disabled = true
        b4.disabled = true
        c4.disabled = true
        d4.disabled = true
        e4.disabled = true
        f4.disabled = true
        // room 5
        let a5 = g('add5')
        let b5 = g('Added5')
        let c5 = g('remove5')
        let d5 = g('Removed5')
        let e5 = g('AllRemoved5')
        let f5 = g('lock5')
        a5.disabled = true
        b5.disabled = true
        c5.disabled = true
        d5.disabled = true
        e5.disabled = true
        f5.disabled = true
        // room 6
        let a6 = g('add6')
        let b6 = g('Added6')
        let c6 = g('remove6')
        let d6 = g('Removed6')
        let e6 = g('AllRemoved6')
        let f6 = g('lock6')
        a6.disabled = true
        b6.disabled = true
        c6.disabled = true
        d6.disabled = true
        e6.disabled = true
        f6.disabled = true
        lock.textContent = 'Unlock the room';
        lock2.textContent = 'Unlock the room';
        lock3.textContent = 'Unlock the room';
        lock4.textContent = 'Unlock the room';
        lock5.textContent = 'Unlock the room';
        lock6.textContent = 'Unlock the room';
        masterlock.textContent = 'Lockdown over';
    }
    else if (trufal7 === true) {
        trufal = false
        trufal2 = false
        trufal3 = false
        trufal4 = false
        trufal5 = false
        trufal6 = false
        trufal7 = false
        // room 1
        let a = g('add')
        let b = g('Added')
        let c = g('remove')
        let d = g('Removed')
        let e = g('AllRemoved')
        let f = g('lock')
        a.disabled = false
        b.disabled = false
        c.disabled = false
        d.disabled = false
        e.disabled = false
        f.disabled = false
        // room 2
        let a2 = g('add2')
        let b2 = g('Added2')
        let c2 = g('remove2')
        let d2 = g('Removed2')
        let e2 = g('AllRemoved2')
        let f2 = g('lock2')
        a2.disabled = false
        b2.disabled = false
        c2.disabled = false
        d2.disabled = false
        e2.disabled = false
        f2.disabled = false
        // room 3
        let a3 = g('add3')
        let b3 = g('Added3')
        let c3 = g('remove3')
        let d3 = g('Removed3')
        let e3 = g('AllRemoved3')
        let f3 = g('lock3')
        a3.disabled = false
        b3.disabled = false
        c3.disabled = false
        d3.disabled = false
        e3.disabled = false
        f3.disabled = false
        // room 4
        let a4 = g('add4')
        let b4 = g('Added4')
        let c4 = g('remove4')
        let d4 = g('Removed4')
        let e4 = g('AllRemoved4')
        let f4 = g('lock4')
        a4.disabled = false
        b4.disabled = false
        c4.disabled = false
        d4.disabled = false
        e4.disabled = false
        f4.disabled = false
        // room 5
        let a5 = g('add5')
        let b5 = g('Added5')
        let c5 = g('remove5')
        let d5 = g('Removed5')
        let e5 = g('AllRemoved5')
        let f5 = g('lock5')
        a5.disabled = false
        b5.disabled = false
        c5.disabled = false
        d5.disabled = false
        e5.disabled = false
        f5.disabled = false
        // room 6
        let a6 = g('add6')
        let b6 = g('Added6')
        let c6 = g('remove6')
        let d6 = g('Removed6')
        let e6 = g('AllRemoved6')
        let f6 = g('lock6')
        a6.disabled = false
        b6.disabled = false
        c6.disabled = false
        d6.disabled = false
        e6.disabled = false
        f6.disabled = false
        lock.textContent = 'Lock the room';
        lock2.textContent = 'Lock the room';
        lock3.textContent = 'Lock the room';
        lock4.textContent = 'Lock the room';
        lock5.textContent = 'Lock the room';
        lock6.textContent = 'Lock the room';
        masterlock.textContent = 'Lockdown the hotel';

    }
}
function kickall() {
    array.length = 0
    timearray.length = 0
    array2.length = 0
    timearray2.length = 0
    array3.length = 0
    timearray3.length = 0
    array4.length = 0
    timearray4.length = 0
    array5.length = 0
    timearray5.length = 0
    array6.length = 0
    timearray6.length = 0
    g('result').innerHTML = `Evacuated`
    g('people').innerHTML = 'ㅤ'
    g('time').innerHTML = 'ㅤ'
    g('result2').innerHTML = `Evacuated`
    g('people2').innerHTML = 'ㅤ'
    g('time2').innerHTML = 'ㅤ'
    g('result3').innerHTML = `Evacuated`
    g('people3').innerHTML = 'ㅤ'
    g('time3').innerHTML = 'ㅤ'
    g('result4').innerHTML = `Evacuated`
    g('people4').innerHTML = 'ㅤ'
    g('time4').innerHTML = 'ㅤ'
    g('result5').innerHTML = `Evacuated`
    g('people5').innerHTML = 'ㅤ'
    g('time5').innerHTML = 'ㅤ'
    g('result6').innerHTML = `Evacuated`
    g('people6').innerHTML = 'ㅤ'
    g('time6').innerHTML = 'ㅤ'
}
function erase() {
    array.length = 0
    timearray.length = 0
    array2.length = 0
    timearray2.length = 0
    array3.length = 0
    timearray3.length = 0
    array4.length = 0
    timearray4.length = 0
    array5.length = 0
    timearray5.length = 0
    array6.length = 0
    timearray6.length = 0
    everytimearray.length = 0
    everyarray.length = 0
    g('result').innerHTML = `ㅤ`
    g('people').innerHTML = 'ㅤ'
    g('time').innerHTML = 'ㅤ'
    g('result2').innerHTML = `ㅤ`
    g('people2').innerHTML = 'ㅤ'
    g('time2').innerHTML = 'ㅤ'
    g('result3').innerHTML = `ㅤ`
    g('people3').innerHTML = 'ㅤ'
    g('time3').innerHTML = 'ㅤ'
    g('result4').innerHTML = `ㅤ`
    g('people4').innerHTML = 'ㅤ'
    g('time4').innerHTML = 'ㅤ'
    g('result5').innerHTML = `ㅤ`
    g('people5').innerHTML = 'ㅤ'
    g('time5').innerHTML = 'ㅤ'
    g('result6').innerHTML = `ㅤ`
    g('people6').innerHTML = 'ㅤ'
    g('time6').innerHTML = 'ㅤ'
    g('everyone').innerHTML = 'ㅤ'
    g('everytime').innerHTML = 'ㅤ'
}
function opacitychange() {
    if (g('mastercontrols').style.opacity === "0") {
        g('mastercontrols').style.opacity = "1"
    }
    else {
        g('mastercontrols').style.opacity = "0"
    }
}
