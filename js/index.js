function marcador(){
    const check1 = document.getElementById("check1");
    const check2 = document.getElementById("check2");
    const check3 = document.getElementById("check3");

    let ver = check1.value;
    let ver2 = check2.value;
    let ver3 = check3.value;
    
    if(ver.checked == true){
        ver2.checked = false;
    }

}
