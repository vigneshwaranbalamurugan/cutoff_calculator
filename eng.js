function addition() {
    var A = parseFloat(document.getElementById("a").value);
    var B = parseFloat(document.getElementById("b").value);
    var C = parseFloat(document.getElementById("c").value);
    if (A > 100 || B > 100 || C > 100 || A <= 0 || B <= 0 || C <= 0)
        document.getElementById("output").value = "INVALID INPUT";
    else
	{
        document.getElementById("output").value="CUTOFF:"+(A + B / 2 + C / 2);
		
		}
}
function agri(){
   window.location.href ="agriculture.html";
}
	function message(){
		document.getElementById("message").innerHTML="";
	}
	function mes(){
		document.getElementById("message").innerHTML="Enter To Calculate";
	}
