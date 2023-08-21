function addition() {
    var A = parseFloat(document.getElementById("a").value);
    var B = parseFloat(document.getElementById("b").value);
    var C = parseFloat(document.getElementById("c").value);
	 var D = parseFloat(document.getElementById("d").value);
    if (A > 100 || B > 100 || C > 100 || A <= 0 || B <= 0 || C <= 0||D>100||D<=0)
        document.getElementById("output").value = "INVALID INPUT";
    else
	{
        document.getElementById("output").value="CUTTOFF:"+(A/2 + B / 2 + C / 2 +D/2);
		
		}
}
