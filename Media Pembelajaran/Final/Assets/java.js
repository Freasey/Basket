const bask= document.getElementsByClassName('bask')[0];
const backhome= document.getElementsByClassName("back-halaman-awal")[0];


//opacity judul
const delayopa= ()=>{
    for (let i = 0; i < document.querySelectorAll('.maintitle').length; i++) {
        document.querySelectorAll('.maintitle')[i].style.opacity="1"};
        document.getElementsByClassName('tujuan')[0].style.opacity="1";
        document.getElementsByClassName('profil')[0].style.opacity="1";
        document.getElementsByClassName('daftar')[0].style.opacity="1";
    };

//Materi
const delaydisp= ()=>{for (let n = 0; n < document.querySelectorAll('.maintitle').length; n++) {
            document.querySelectorAll('.maintitle')[n].style.display='block';
            document.querySelectorAll('.maintitle')[n].style.opacity="0"}
            setTimeout(() => delayopa(), 3000);
            document.getElementsByClassName('tujuan')[0].style.display="inline";
            document.getElementsByClassName('profil')[0].style.display="inline";
            document.getElementsByClassName('daftar')[0].style.opacity="inline";
        };
//delay back basket
const delaybackbasket= ()=>{bask.style.transform= 'translate(-600px, 420px)';
                            document.getElementsByClassName('back-halaman-awal')[0].style.display="inline";
                            setTimeout(() => {
                                document.getElementsByClassName('back-halaman-awal')[0].style.opacity="1";
                                bask.style.transform= 'translate(-600px, 307px)'
                            }, 1000);
        };


//delay Pemainconst
const delaypemain = ()=>{document.getElementsByClassName('pemain')[1].style.transform='translate(-600px,210px)'
                                document.getElementsByClassName('pemain')[0].style.transform='translate(1400px,310px)'
                            setTimeout(() => {document.getElementsByClassName('pemain')[0].style.display='none';
                            document.getElementsByClassName('pemain')[1].style.display='none';
                                },3000)
                        };




//delay text judul transition: all 1s;
const delayhome = () => {
                        document.getElementById("texthome").style.display="none";
                        bask.style.transform= 'translate(0px,420px)';
                        document.getElementsByClassName('basket')[0].style.width='10%'; 
                        setTimeout(()=> delaybackbasket(), 1000)
                        document.getElementById("tombolmulai").style.display="none";
                        delaydisp();
                            ;};
//materi
const materi =()=> {                   
                    document.getElementById('awal').style.display='inline';
                    document.getElementById('awal').style.backgroundColor='#f3d8a0';
                    setTimeout( function() { document.getElementById('awal').style.opacity='1'; }, 50 );
                    setTimeout( function() { window.location.href = 'Materi/materi.html' }, 1000 );
                    document.getElementsByClassName("maintitle")[0].src= 'button materi 2-12.png';
                    

                    
                    };
                    
const soal =()=> {  document.getElementById('awal').style.display='inline';
                    setTimeout( function() { document.getElementById('awal').style.opacity='1'; }, 50 );
                    document.getElementsByClassName("maintitle")[1].src= 'button soal 2-14.png';
                    setTimeout( function() { window.location.href = 'Soal/Index.html' }, 1000 );
                    
                    

                    
                    };

//Klik Basket
const turu = () => {
        bask.style.transform= 'translate(0px,-500px)';
        document.getElementById("texthome").style.marginTop= "750px";
        document.getElementById("tombolmulai").style.opacity="0";
        document.getElementById("tombolmulai").src= 'button-03.png';
        setTimeout(() => delayhome(), 2000);
        delaypemain();
    
    };
        
        







    


