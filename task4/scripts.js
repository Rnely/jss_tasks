function getAttributes() {
    const href = document.getElementById('w3r').href;
    const hreflang = document.getElementById('w3r').hreflang;
    const rel = document.getElementById('w3r').rel;
    const target = document.getElementById('w3r').target;
    const type = document.getElementById('w3r').type;
    console.log("href:" + href, "hreflang:" + hreflang, "rel:" +rel, "targer:" + target, "type:" + type);
}