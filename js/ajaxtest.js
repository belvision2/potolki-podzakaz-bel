window.onload = function(){
    document.querySelector('#uspex').onclick = function(){
        ajaxGet();
    }
    }




    function ajaxGet(){

        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if(request.readyState == 4 && request.status == 200){

               document.querySelector('#open2').innerHTML = request.responseText;
            }
        }

        request.open('GET','sendtest.php');
        request.send();
    }
