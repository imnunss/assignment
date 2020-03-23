console.log("===== Thaivivat's Assignment =====")

anagrams()
Parentheses()

function anagrams() {
    const data = ["AMOR", "XISELA", "JAMON", "ROMA", "OMAR", "MORA", "ESPONJA", "RAMO", "JAPONES", "ARMO", "MOJAN", "MARO", "ORAM", "MONJA", "ALEXIS"]

    let listAscii = [],
        dic = {}

    for (const word of data) {
        let sumAscii = 0
        for (const text of word) {
            sumAscii += toAscii(text)
        }

        if (!listAscii.includes(sumAscii)) {
            if (dic[sumAscii] === undefined) dic[sumAscii] = `${word},`
            else dic[sumAscii] += `${word},`
        }
    }
    return console.log(Object.values(dic));

}

function Parentheses() {
    const txt = "(tavi(h(ia)v)t)"
    //(tavi(haiv)t)
    //(taviviaht)
    //thaivivat
    const test = txt

    let splitOpen = txt.split("(")
    
    for (const t of splitOpen) {
        if (t.includes(")"))  qq = t.split(")")
    }
    return ''
}

function toAscii(txt) {
    return txt.charCodeAt(0);
}

function reverse(str) {
    return str.split("").reverse().join("");
}



console.log("==================================")