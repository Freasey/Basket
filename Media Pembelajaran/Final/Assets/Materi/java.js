setTimeout (()=> {document.querySelector('#awal').style.opacity='1'},1000);

const opatext= (o) => {
for (let ix = 0; ix < document.querySelectorAll(".judul").length; ix++) {
    setTimeout(()=>{document.querySelectorAll(".judul")[ix].style.display= 'none'},1000)
    document.querySelectorAll(".judul")[ix].style.opacity= '0';
}
for (let ax = 0; ax < document.querySelectorAll(".box").length; ax++) {
    setTimeout(()=>{document.querySelectorAll(".box")[ax].style.display= 'none'},1000);
    document.querySelectorAll(".box")[ax].style.opacity= '0';
}
for (let cx = 0; cx < document.querySelectorAll("img").length; cx++) {
    setTimeout(()=>{document.querySelectorAll("img")[cx].style.display= 'none'},1000);
    document.querySelectorAll("img")[cx].style.opacity= '0';
}
if (o===1)
    {setTimeout( function() { window.location.href = 'teknik/teknik.html' }, 1000 );}

if (o===9) 
    {setTimeout( function() { window.location.href = 'peraturan/peraturan.html' }, 1000 );}

};



const turu = () => {
    document.getElementById("tekniks").src= 'button teknik 2-48.png';
    opatext(1);}  
    
const peraturan = () => {
    document.getElementById("peraturans").src= 'button peraturan 2-38.png';
        opatext(9);}
     
