var arr = [];
var p = document.getElementById('new');
document.getElementById('btn').onclick = arrOut;
function arrOut(){
    var x, y;
    p.innerHTML = "";
    x = document.getElementById('ind').value;
    y = document.getElementById('num').value;
    arr[x] = y;
    for (var i = 0; i < arr.length; i++){
        p.innerHTML += ", " + arr[i];
    }
}

document.getElementById('unshift').onclick = unshift;
function unshift(){
    var z = document.getElementById('add').value;
    arr.unshift(z);
    var str = arr + '';
	p.innerHTML = str;
}

document.getElementById('push').onclick = push;
function push(){
    var z = document.getElementById('add').value;
    arr.push(z);
    var str = arr + '';
	p.innerHTML = str;
}
document.getElementById('pop').onclick = pop;
function pop(){
    arr.pop();
    var str = arr + '';
	p.innerHTML = str;
}

document.getElementById('shift').onclick = shift;
function shift(){
    arr.shift();
    var str = arr + '';
	p.innerHTML = str;
}

