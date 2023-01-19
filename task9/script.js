function countItems() {
    const x = document.getElementById("colorSelect");
    t = "Number of items: " + document.getElementById("colorSelect").length;
    for (let i=0;i<x.length;i++) {
        t = t + "\n" + x.options[i].text;
    }
    alert(t);
}