function sphereVolume() {
    let r = document.getElementById("radius").value;
    let v = document.getElementById("volume");
    v.value = (4/3*(Math.PI*(r**3))).toFixed(2);
}