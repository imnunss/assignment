console.log("===== Thaivivat's Assignment =====")

anagrams()
Parentheses()

function anagrams() {
    console.log(`##### Question 1 #####`)
    const data = ["AMOR", "XISELA", "JAMON", "ROMA", "OMAR", "MORA", "ESPONJA", "RAMO", "JAPONES", "ARMO", "MOJAN", "MARO", "ORAM", "MONJA", "ALEXIS"]

    let listAscii = [],
        collectionAscii = {}

    for (const word of data) {
        let sumAscii = 0
        for (const text of word) {
            sumAscii += toAscii(text)
        }

        if (!listAscii.includes(sumAscii)) {
            if (collectionAscii[sumAscii] === undefined) collectionAscii[sumAscii] = `${word}`
            else collectionAscii[sumAscii] += `,${word}`
        }
    }

    let result = []
    for (var key in collectionAscii) {
        let categoryAscii = []
        var value = collectionAscii[key];
        categoryAscii.push(value)
        result.push(categoryAscii)
    }

    return console.log(result);

}

function Parentheses() {
    console.log(`##### Question 2 #####`)
    const txt = "(tavi(h(ia)v)t)"
    //(tavi(h(ia)v)t)
    //(tavi(haiv)t)
    //(taviviaht)
    //thaivivat

    let splitClose
    let splitOpen = txt.split("(")

    for (const t of splitOpen) {
        if (t.includes(")")) splitClose = t.split(")"), delete splitOpen[splitOpen.length - 1]
    }
    let collectionData = []
    collectionData = cleanData(collectionData.concat(splitOpen).concat(splitClose))
    let boo = true
    while (boo) {
        let result = ''
        if (collectionData.length > 1) {
            let centerIndex
            centerIndex = Math.floor(collectionData.length / 2)
            let newWord = collectionData[centerIndex - 1] + reverse(collectionData[centerIndex]) + collectionData[centerIndex + 1]
            delete collectionData[centerIndex - 1]
            delete collectionData[centerIndex]
            delete collectionData[centerIndex + 1]
            collectionData[centerIndex - 1] = newWord

        } else break;
        collectionData = cleanData(collectionData)
    }
    return console.log(reverse(collectionData[0]))
}

function toAscii(txt) {
    return txt.charCodeAt(0);
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function cleanData(list) {
    return list.filter(n => n)
}



console.log("==================================")