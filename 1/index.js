var fs = require('fs'); 
var report;
report = fs.readFileSync("report",'utf-8')
var rpa = report.split("\n")
console.time()
for (let i = 0; i < rpa.length; i++) {
    const num = Number(rpa[i]);
    for (let i = 0; i < rpa.length; i++) {
        const num2 = Number(rpa[i]);
        if(num == num2){
            continue
        }
        for (let i = 0; i < rpa.length; i++) {
            const num3 = Number(rpa[i]);
            if(num3 == num2 | num3 == num){
                continue
            }
            if(num + num2 + num3 == 2020){
                console.table({num,num2,num3})
                console.log(num*num2*num3)
            }
        }
    }
}
console.timeEnd()