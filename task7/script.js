function createTable() {
    r = window.prompt("Input row number ", 1);
    c = window.prompt("Input column number ", 1);
    for(let i=0; i<parseInt(r,10); i++) {
        const x=document.getElementById("myTable").insertRow(i);
        for(let j=0; j<parseInt(c,10);j++) {
            const y = x.insertCell(j)
            y.innerHTML="Row-"+i+" Column-"+j;
        }
    }
}