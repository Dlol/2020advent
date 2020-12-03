var fs = require('fs'); 
var input;
input = fs.readFileSync("input",'utf-8')
var ipa = input.split("\n")
var trees = 0;
var x = 0;
var y = 0;
function slope(r,d){
    let x = 0
    let y = 0
    let trees = 0
    while (y < ipa.length) {
        
        if(ipa[y][x] == "#"){
            trees++
        }
        x+=r
        if(x >= ipa[y].length){
            x = x - ipa[y].length
        }
        y+=d
    }
    return trees
}

a = slope(1,1)
b = slope(3,1)
c = slope(5,1)
d = slope(7,1)
e = slope(1,2)
console.log(a*b*c*d*e)