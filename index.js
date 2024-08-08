
let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qrImage");
let qrtext = document.getElementById("qrtext");
function generateQr(){
    // if(qrImage.value.length >0){
    //     qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "  +  qrImage.value; 
    // imgbox.classList.add("show-img"); 
    // }
    // else{
    //     qrtext.classList.add('error');
    //     setTimeout(()=>{
    //         qrtext.classList.remove('error');
    //     },1000);
    // }
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "  +  qrImage.value; 
    imgbox.classList.add("show-img"); 
}