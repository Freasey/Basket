document.getElementById('menu').style.display='block'
setTimeout (()=> {document.getElementById('menu').style.opacity='1'},1000)

 const opa = (lkl)=>{
    
    document.getElementById('menu').style.opacity='0';

    setTimeout (()=> {document.getElementById('menu').style.display='none';
        document.querySelector('html,body').style.backgroundColor='#9fe9fc';},1000)

    document.querySelector('nav').style.display='block';

    setTimeout (()=> {document.querySelector('nav').style.opacity='1'},1000)

    document.querySelector('#materiteknik').style.display='block';
    setTimeout (()=> {document.querySelector('#materiteknik').style.opacity='1'},1000)

    if (lkl===1) {
      dispmateri(1)
      document.querySelectorAll('.boxes img')[0].src='button dribbling 2-32.png';
    }
    if (lkl===2) {
      dispmateri(2)
      document.querySelectorAll('.boxes img')[1].src='button passing 2-34.png';
    }
    if (lkl===3) {
      dispmateri(3)
      document.querySelectorAll('.boxes img')[2].src='button shooting 2-36.png';
    }
    if (lkl===4) {
      dispmateri(4)
      document.querySelectorAll('.boxes img')[3].src='button pivot 2-28.png';
    }
    if (lkl===5) {
      dispmateri(5)
      document.querySelectorAll('.boxes img')[4].src='button rebound 2-30.png';
    }

 } 

 const navbox = () =>{
    document.querySelector('#navbox').style.display='block';
    document.querySelector('nav img').setAttribute('onclick','navboxclose()');
 }
 const navboxclose = () =>{
    document.querySelector('#navbox').style.display='none';
    document.querySelector('nav img').setAttribute('onclick','navbox()');
    
 }
 const navboxteknik = () =>{
   document.querySelector('#navboxteknik').style.display='block';
   document.querySelector('#teknik').setAttribute('onclick','navboxteknikclose()');
   
 }
 const navboxteknikclose = () =>{
   document.querySelector('#navboxteknik').style.display='none';
   document.querySelector('#teknik').setAttribute('onclick','navboxteknik()');
}

const dispmateri =(lka)=>{
   isimateri()
   if (lka===1) {
      document.querySelector('#dribbling').style.display='block';
   }
   if (lka===2) {
      document.querySelector('#passing').style.display='block';
   }
   if (lka===3) {
      document.querySelector('#shooting').style.display='block';
   }
   if (lka===4) {
      document.querySelector('#pivot').style.display='block';
   }
   if (lka===5) {
      document.querySelector('#rebound').style.display='block';
   }
}



const isimateri =() =>{
   document.querySelector('#dribbling').style.display='none';
   document.querySelector('#passing').style.display='none';
   document.querySelector('#shooting').style.display='none';
   document.querySelector('#pivot').style.display='none';
   document.querySelector('#rebound').style.display='none';
}

const pose =(px)=>{
   document.querySelectorAll('video')[px].pause();
   document.getElementsByClassName('vids')[px].src='../../play.png';
   document.getElementsByClassName('vids')[px].setAttribute('onclick','ply('+px+')');
}
const ply =(py)=>{
   document.querySelectorAll('video')[py].play();
   document.getElementsByClassName('vids')[py].src='../../pause.png';
   document.getElementsByClassName('vids')[py].setAttribute('onclick','pose('+py+')');
}
const opavids= (ops) =>{
   document.querySelectorAll('.vids')[ops].style.opacity="1";
}
const opaoff= (opa)=>{
   document.querySelectorAll('.vids')[opa].style.opacity="0";
}