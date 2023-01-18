function changeContent() {
    rn = window.prompt("Input row number (0-2)", "0");
    cn = window.prompt("Input column number (0-1)", "0");
    content = window.prompt("Input content");
    const x=document.getElementById("myTable").rows[parseInt(rn,10)].cells;
    x[parseInt(cn,10)].innerHTML=content;
}