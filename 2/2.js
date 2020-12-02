var fs = require('fs'); 
var input;
input = fs.readFileSync("input",'utf-8')
var ipa = input.split("\n")
var ipb = []
var minmax
var letter
var pass
var passcount = 0;
console.time()
ipa.forEach(element => {
    ipb[ipb.length] =  element.split(" ")
});
ipb.forEach(element => {
    element[0] = element[0].split("-")
    element[1] = element[1]
});
for (let i = 0; i < ipb.length; i++) {
    const a = ipb[i];
    for (let o = 0; o < a.length; o++) {
        const s = a[o];
        // console.log(s)
        if(typeof s == 'object'){
            minmax = s
        }
        else if (s.length == 2){
            letter = s[0]
        }
        else{
            pass = s
        }
    }
    if ( checkPassword(minmax,letter,pass) ) {
        passcount ++
    }
}

console.log(passcount)
console.timeEnd()
function checkPassword(mm, l, p){
    let count = 0
    for (let i = 0; i < p.length; i++) {
        const lette = p[i];
        if (lette == l){
            count++
        }
    }
    if(count > mm[1] | count < mm[0]){
        return false
    }
    else{
        return true
    }
}
function checkPassword2(mm, l, p){
    if(p[mm[0]-1] == l ^ p[mm[1]-1] == l){
        return true
    }
    return false
}