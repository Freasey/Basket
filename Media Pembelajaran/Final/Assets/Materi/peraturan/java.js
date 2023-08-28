const bask= document.getElementsByClassName('basket')[0];

const opatext= () => {
for (let ix = 0; ix < document.querySelectorAll("h1").length; ix++) {
    document.querySelectorAll("h1")[ix].style.display= 'none';
}
for (let ax = 0; ax < document.querySelectorAll("h3").length; ax++) {
    document.querySelectorAll("h3")[ax].style.display= 'none';
}
for (let bx = 0; bx < document.querySelectorAll("h2").length; bx++) {
    document.querySelectorAll("h2")[bx].style.display= 'none';
}};



const turu = () => {
    opatext();
    bask.style.display= 'inline';
    setTimeout = ()=>{ bask.style.transform= 'translate(677px, 320px)'}, 1000;}
        
