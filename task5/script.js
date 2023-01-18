function insert_Row() {
    const x = document.getElementById("sampleTable");
    const row = x.insertRow(0);
    const c1 = row.insertCell(0);
    const c2 = row.insertCell(1);
        c1.innerHTML = "New row";
        c2.innerHTML = "New row";
}