function onclikBtn(){

var a = document.getElementById("a").value;
 var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
 var d = document.getElementById("d").value;
     
 output.innerHTML =  output.innerHTML + 
   '<table><tr><th>firstname</th><th>lastname</th><th colspan="">Age</th>    <th colspan="">Email</th> </tr><tr><td>'+ a +'</td><td>'+ b +'</td> <td>'+ c +'</td> <td>'+ d +'</td>    </tr></table>';
}
