document.onkeydown=function(){
    var e = window.event||arguments[0];
	var kzt = document.getElementById('kzt');
	var ydm= document.getElementById('ydm');
	var bc = document.getElementById('bc');
	var span = document.querySelector('.gb');
    if(e.keyCode===123){
    	document.getElementById('audio').play();
		kzt.style.display = "block";
		return false;
    }else if((e.ctrlKey)&&(e.keyCode===85)){
        document.getElementById('audio').play();
		ydm.style.display = "block";
        return false;
    }else if((e.ctrlKey)&&(e.keyCode===83)){
        document.getElementById('audio').play();
		bc.style.display = "block";
        return false;
    }
	var span = document.querySelector('.gb');
	span.onclick = function(){
		var kzt = document.getElementById('kzt');
		var ydm= document.getElementById('ydm');
		var bc = document.getElementById('bc');
		kzt.style.display = "none";
		ydm.style.display = "none";
		bc.style.display = "none";
    }
}
