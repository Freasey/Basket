const awal= document.getElementById('awal')
const boxes= document.getElementsByClassName('boxes')[0]
const kanan= document.getElementById('kanan')
const kiri= document.getElementById('kiri')
const profil= document.getElementById('profil')


const pindah= (bx) =>{
    if (bx===1) {
        boxes.style.transform= 'translate(0, 0)';  
        kiri.setAttribute('onclick','pindah(1)');
        kanan.setAttribute('onclick','pindah(2)');
    }
    if (bx===2) {
        boxes.style.transform= 'translate(-1500px, 0)'; 
        kiri.setAttribute('onclick','pindah(1)');
        kanan.setAttribute('onclick','pindah(3)'); 
    }
    if (bx===3) {
        boxes.style.transform= 'translate(-3000px, 0)';  
        kiri.setAttribute('onclick','pindah(2)');
        kanan.setAttribute('onclick','pindah(4)');
    }
    if (bx===4) {
        boxes.style.transform= 'translate(-4520px, 0)';  
        kiri.setAttribute('onclick','pindah(3)');
        kanan.setAttribute('onclick','pindah(5)');
    }
    if (bx===5) {
        boxes.style.transform= 'translate(-6050px, 0)';
        kiri.setAttribute('onclick','pindah(4)');
        kanan.setAttribute('onclick','pindah(6)');  
    }
    if (bx===6) {
        boxes.style.transform= 'translate(-7550px, 0)'; 
        kiri.setAttribute('onclick','pindah(5)');
        kanan.setAttribute('onclick','pindah(6)'); 
    }
}


const kembali= ()=>{
    profil.style.opacity='0'
    
    setTimeout(() => { 
        awal.style.display='inline'
        setTimeout(() => {
            awal.style.opacity='1'
        }, 1000);
        
        profil.style.display='none'

    }, 2000);
}

const turu = (bx) => {
    profil.style.display='flex'
    awal.style.opacity='0'
    setTimeout(() => { 
        awal.style.display='none'
        pindah(bx)
        setTimeout(() => {
            profil.style.opacity='1'
        }, 1000);
        
        








    }, 1000);
}
