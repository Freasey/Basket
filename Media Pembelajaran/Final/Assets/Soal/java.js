const hasil1= document.querySelector("#hasil1")
const hasil= document.querySelector("#hasil")
const home= document.getElementsByClassName('home')[0]
const home1= document.getElementsByClassName('home')[1]

setTimeout (()=> {document.querySelector('#awal').style.opacity='1'},1000);


function turu(){
    document.getElementsByClassName('lanjut')[9].src='button kirim 2-40.png';
    
    

                
            setTimeout (()=> {
            hitung()           
            selesai()
            const ins =  document.querySelectorAll("input");
            for (let i = 0; i < ins.length; i++) {
            ins[i].disabled=true;}

            const ina =  document.querySelectorAll("section label");
            for (let o = 0; o < ina.length; o++) {
            ina[o].style.cursor="default";}      
             
            for (let lax = 0; lax < document.querySelectorAll('.lanjut').length; lax++) {
                document.querySelectorAll('.lanjut')[lax].style.display='none';
                
            }},200);        
    }
const hitung =()=>{
    const int =  document.querySelectorAll("p");
            for (let m = 0; m < int.length; m++) {
            int[m].style.display="inline";}
            checks()

    var total=0;
        if(document.getElementById("prop1b").checked){
            total+=10;
        document.getElementById("j1").style.display="none";
    }
            if(document.getElementById("prop2e").checked){
                total+=10;
                document.getElementById("j2").style.display="none";
            }
                if(document.getElementById("prop3a").checked){
                    total+=10;
                    document.getElementById("j3").style.display="none";
                }
                    if(document.getElementById("prop4c").checked){
                        total+=10;
                        document.getElementById("j4").style.display="none";
                    }
                    if(document.getElementById("prop5b").checked){
                        total+=10;
                        document.getElementById("j5").style.display="none";
                    }
                    if(document.getElementById("prop6d").checked){
                        total+=10;
                        document.getElementById("j6").style.display="none";
                    }
                    if(document.getElementById("prop7d").checked){
                        total+=10;
                        document.getElementById("j7").style.display="none";
                    }
                    if(document.getElementById("prop8a").checked){
                        total+=10;
                        document.getElementById("j8").style.display="none";
                    }
                    if(document.getElementById("prop9d").checked){
                        total+=10;
                        document.getElementById("j9").style.display="none";
                    }
                    if(document.getElementById("prop10a").checked){
                        total+=10;
                        document.getElementById("j10").style.display="none";
                    }
            

            home1.style.display='inline'
            hasil1.textContent= "Nilai";
            document.getElementById('turu').style.display='inline'
            hasil.textContent= total;
            
}
const lanjut= (r) =>{
    
    if (r===2) {
        document.getElementsByClassName('lanjut')[0].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal2').style.display='flex'},200);
        
    }
    if (r===3) {document.getElementsByClassName('lanjut')[1].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
            document.querySelector('#soal3').style.display='flex'},200);
    }
    if (r===4) {document.getElementsByClassName('lanjut')[2].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal4').style.display='flex'},200);
    }
    if (r===5) {document.getElementsByClassName('lanjut')[3].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal5').style.display='flex'},200);
    }
    if (r===6) {document.getElementsByClassName('lanjut')[4].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal6').style.display='flex'},200);
    }
    if (r===7) {document.getElementsByClassName('lanjut')[5].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal7').style.display='flex'},200);
    }
    if (r===8) {document.getElementsByClassName('lanjut')[6].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal8').style.display='flex'},200);
    }
    if (r===9) {document.getElementsByClassName('lanjut')[7].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal9').style.display='flex'},200);
    }
    if (r===10) {document.getElementsByClassName('lanjut')[8].src='button lanjut 2-46.png';
        setTimeout (()=> {hapus();
        document.querySelector('#soal10').style.display='flex'},200);
    }

}
const hapus =()=>{
    document.querySelector('#soal1').style.display='none';
    document.querySelector('#soal2').style.display='none';
    document.querySelector('#soal3').style.display='none';
    document.querySelector('#soal4').style.display='none';
    document.querySelector('#soal5').style.display='none';
    document.querySelector('#soal6').style.display='none';
    document.querySelector('#soal7').style.display='none';
    document.querySelector('#soal8').style.display='none';
    document.querySelector('#soal9').style.display='none';
}

const selesai =()=>{
    document.querySelector('#soal1').style.display='inline';
    document.querySelector('#soal2').style.display='inline';
    document.querySelector('#soal3').style.display='inline';
    document.querySelector('#soal4').style.display='inline';
    document.querySelector('#soal5').style.display='inline';
    document.querySelector('#soal6').style.display='inline';
    document.querySelector('#soal7').style.display='inline';
    document.querySelector('#soal8').style.display='inline';
    document.querySelector('#soal9').style.display='inline';
    document.querySelector('#soal10').style.display='inline';
}


const checks= ()=>{
    const cheks= document.querySelectorAll('input[type="radio"]:checked+label')
            for (let cx = 0; cx < cheks.length; cx++) {
            cheks[cx].style.background='url(salah2-53.png) orange  no-repeat center center';
            cheks[cx].style.backgroundSize='cover';
            cheks[cx].style.color='black';
            }
            lx(1)
            lx(9)
            lx(10)
            lx(17)
            lx(21)
            lx(28)
            lx(33)
            lx(35)
            lx(43)
            lx(45)

            
}

const lx= (gh)=>{
            document.querySelectorAll('label')[gh].style.background='url(bener2-54.png)orange  no-repeat center center';
            document.querySelectorAll('label')[gh].style.backgroundSize='cover';
            document.querySelectorAll('label')[gh].style.color='black';
                }

const pose =(px)=>{
    document.querySelectorAll('video')[px].pause();
    document.getElementsByClassName('vids')[px].src='../play.png';
    document.getElementsByClassName('vids')[px].setAttribute('onclick','ply('+px+')');
 }
 const ply =(py)=>{
    document.querySelectorAll('video')[py].play();
    document.getElementsByClassName('vids')[py].src='../pause.png';
    document.getElementsByClassName('vids')[py].setAttribute('onclick','pose('+py+')');
 }
 const yakin =()=>{
    home1.src="button coba lagi 2-60.png";
    setTimeout(() => {
        document.getElementById('yakin').style.display='flex'
        home1.src="button coba lagi 1-59.png";
    }, 100);
 }
 const yakint=()=>{
    document.getElementById('yakin').style.display='none'
 }
 const opavids= (ops) =>{
    document.querySelectorAll('.vids')[ops].style.opacity="1";
 }
 const opaoff= (opa)=>{
    document.querySelectorAll('.vids')[opa].style.opacity="0";
 }