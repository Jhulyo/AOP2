// codigo simples de como é feito uma requisição

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        var div = document.getElementById("test");
         div.innerHTML = xhr.responseText
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

xhr.send();