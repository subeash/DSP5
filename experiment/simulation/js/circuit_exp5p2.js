/*Lab:exp_5_Part2_Decoder
	File name: circuit_exp5p2.js
    Author:Prakriti Dhang */
    
    var d1;
    var d11;
    var sinp;
    var decimal;
    

function ledchng(){

    var image1 = document.getElementById('b1'); /* GND */
    var image2 = document.getElementById('b2'); /* VCC */
    var image3 = document.getElementById('b3'); /* G1 of first decoder */
    var image4 = document.getElementById('b4'); /* G2A', G2B' of first decoder. G1 of second decoder */
    var image5 = document.getElementById('b5'); /* C */
    var image6 = document.getElementById('b6');  /* B */
    var image7 = document.getElementById('b7');  /* A */
    
      
    if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/off.png" ){
       
        document.getElementById('led0').src="images/led_onc.png";
        document.getElementById('led0').style.visibility='hidden';
        document.getElementById('led1').src="images/led_onc.png";
        document.getElementById('led1').style.visibility='visible';
        document.getElementById('led2').src="images/led_onc.png";
        document.getElementById('led2').style.visibility='visible';
        document.getElementById('led3').src="images/led_onc.png";
        document.getElementById('led3').style.visibility='visible';
        document.getElementById('led4').src="images/led_onc.png";
        document.getElementById('led4').style.visibility='visible';
        document.getElementById('led5').src="images/led_onc.png";
        document.getElementById('led5').style.visibility='visible';
        document.getElementById('led6').src="images/led_onc.png";
        document.getElementById('led6').style.visibility='visible';
        document.getElementById('led7').src="images/led_onc.png";
        document.getElementById('led7').style.visibility='visible';
        document.getElementById('led8').src="images/led_onc.png";
        document.getElementById('led8').style.visibility='visible';
        document.getElementById('led9').src="images/led_onc.png";
        document.getElementById('led9').style.visibility='visible';
        document.getElementById('led10').src="images/led_onc.png";
        document.getElementById('led10').style.visibility='visible';
        document.getElementById('led11').src="images/led_onc.png";
        document.getElementById('led11').style.visibility='visible';
        document.getElementById('led12').src="images/led_onc.png";
        document.getElementById('led12').style.visibility='visible';
        document.getElementById('led13').src="images/led_onc.png";
        document.getElementById('led13').style.visibility='visible';
        document.getElementById('led14').src="images/led_onc.png";
        document.getElementById('led14').style.visibility='visible';
        document.getElementById('led15').src="images/led_onc.png";
        document.getElementById('led15').style.visibility='visible';
        
        //document.getElementById('inp').value='000' ;
       // document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
        
        decimal="0";
        sinp="0000".split("");
        d1="0111111111111111";
        d11=d1.split("");

        document.getElementById('add').style.visibility='visible';

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='hidden';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="1";
    sinp="0001".split("");
    d1="1011111111111111";
    d11=d1.split("");

    document.getElementById('add').style.visibility='visible';

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='hidden';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="2";
    sinp="0010".split("");
    d1="1101111111111111";
    d11=d1.split("");

}


else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='hidden';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="3";
    sinp="0011".split("");
    d1="1110111111111111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='hidden';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="4";
    sinp="0100".split("");
    d1="1111011111111111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='hidden';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="5";
    sinp="0101".split("");
    d1="1111101111111111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='hidden';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="6";
    sinp="0110".split("");
    d1="1111110111111111";
    d11=d1.split("");

}


else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='hidden';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="7";
    sinp="0111".split("");
    d1="1111111011111111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='hidden';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="8";
    sinp="1000".split("");
    d1="1111111101111111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='hidden';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="9";
    sinp="1001".split("");
    d1="1111111110111111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='hidden';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="10";
    sinp="1010".split("");
    d1="1111111111011111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='hidden';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="11";
    sinp="1011".split("");
    d1="1111111111101111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='hidden';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="12";
    sinp="1100".split("");
    d1="1111111111110111";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/off.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='hidden';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="13";
    sinp="1101".split("");
    d1="1111111111111011";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/off.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='hidden';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='visible';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="14";
    sinp="1110".split("");
    d1="1111111111111101";
    d11=d1.split("");

}

else if (image2.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image7.getAttribute('src')=="images/on.png" ){
       
    document.getElementById('led0').src="images/led_onc.png";
    document.getElementById('led0').style.visibility='visible';
    document.getElementById('led1').src="images/led_onc.png";
    document.getElementById('led1').style.visibility='visible';
    document.getElementById('led2').src="images/led_onc.png";
    document.getElementById('led2').style.visibility='visible';
    document.getElementById('led3').src="images/led_onc.png";
    document.getElementById('led3').style.visibility='visible';
    document.getElementById('led4').src="images/led_onc.png";
    document.getElementById('led4').style.visibility='visible';
    document.getElementById('led5').src="images/led_onc.png";
    document.getElementById('led5').style.visibility='visible';
    document.getElementById('led6').src="images/led_onc.png";
    document.getElementById('led6').style.visibility='visible';
    document.getElementById('led7').src="images/led_onc.png";
    document.getElementById('led7').style.visibility='visible';
    document.getElementById('led8').src="images/led_onc.png";
    document.getElementById('led8').style.visibility='visible';
    document.getElementById('led9').src="images/led_onc.png";
    document.getElementById('led9').style.visibility='visible';
    document.getElementById('led10').src="images/led_onc.png";
    document.getElementById('led10').style.visibility='visible';
    document.getElementById('led11').src="images/led_onc.png";
    document.getElementById('led11').style.visibility='visible';
    document.getElementById('led12').src="images/led_onc.png";
    document.getElementById('led12').style.visibility='visible';
    document.getElementById('led13').src="images/led_onc.png";
    document.getElementById('led13').style.visibility='visible';
    document.getElementById('led14').src="images/led_onc.png";
    document.getElementById('led14').style.visibility='visible';
    document.getElementById('led15').src="images/led_onc.png";
    document.getElementById('led15').style.visibility='hidden';
    
    //document.getElementById('inp').value='000' ;
    //document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of D\u0305C\u0305B\u0305A\u0305 = D+C+B+A";
    
    decimal="15";
    sinp="1111".split("");
    d1="1111111111111110";
    d11=d1.split("");

}

    else{


        document.getElementById('led0').src="images/led_onc.png";
        document.getElementById('led0').style.visibility='hidden';
        document.getElementById('led1').src="images/led_onc.png";
        document.getElementById('led1').style.visibility='hidden';
        document.getElementById('led2').src="images/led_onc.png";
        document.getElementById('led2').style.visibility='hidden';
        document.getElementById('led3').src="images/led_onc.png";
        document.getElementById('led3').style.visibility='hidden';
        document.getElementById('led4').src="images/led_onc.png";
        document.getElementById('led4').style.visibility='hidden';
        document.getElementById('led5').src="images/led_onc.png";
        document.getElementById('led5').style.visibility='hidden';
        document.getElementById('led6').src="images/led_onc.png";
        document.getElementById('led6').style.visibility='hidden';
        document.getElementById('led7').src="images/led_onc.png";
        document.getElementById('led7').style.visibility='hidden';
    }


 


/* check G1 connection and VCC */
 if (image3.getAttribute('src')=="images/off.png"   && image2.getAttribute('src')=="images/on.png") {
        document.getElementById('g1').style.visibility='visible';
        document.getElementById('showalt').style.visibility='visible';
        document.getElementById('v').style.visibility='hidden';
        document.getElementById('gnd').style.visibility='hidden';

}
else if (image3.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/off.png") {
    document.getElementById('g1').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='visible';
    document.getElementById('gnd').style.visibility='hidden';

}
else if (image3.getAttribute('src')=="images/on.png" && image2.getAttribute('src')=="images/on.png") {
    document.getElementById('g1').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='hidden';
    document.getElementById('v').style.visibility='hidden';
    


}
else if(image3.getAttribute('src')=="images/off.png" && image2.getAttribute('src')=="images/off.png"){
    document.getElementById('g1').style.visibility='visible';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='visible';
    
}


else{
    document.getElementById('v').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='hidden';
    document.getElementById('gnd').style.visibility='hidden';
    document.getElementById('g1').style.visibility='hidden';

}


  


/* check GND connection */
 if(image1.getAttribute('src')=="images/on.png"){
    document.getElementById('gnd').style.visibility='visible';
    document.getElementById('showalt').style.visibility='visible';

        document.getElementById('led0').src="images/led_onc.png";
        document.getElementById('led0').style.visibility='hidden';
        document.getElementById('led1').src="images/led_onc.png";
        document.getElementById('led1').style.visibility='hidden';
        document.getElementById('led2').src="images/led_onc.png";
        document.getElementById('led2').style.visibility='hidden';
        document.getElementById('led3').src="images/led_onc.png";
        document.getElementById('led3').style.visibility='hidden';
        document.getElementById('led4').src="images/led_onc.png";
        document.getElementById('led4').style.visibility='hidden';
        document.getElementById('led5').src="images/led_onc.png";
        document.getElementById('led5').style.visibility='hidden';
        document.getElementById('led6').src="images/led_onc.png";
        document.getElementById('led6').style.visibility='hidden';
        document.getElementById('led7').src="images/led_onc.png";
        document.getElementById('led7').style.visibility='hidden';
    
}
else {
    document.getElementById('gnd').style.visibility='hidden';
   
    
}
}








function a1() {
    var image = document.getElementById('b1');	

    if (image.getAttribute('src')=="images/off.png") 
{
    image.src = "images/on.png";
    document.getElementById('b1r').style.display="none";
    document.getElementById('b1g').style.display="block";

    
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b1r').style.display="block";
    document.getElementById('b1g').style.display="none";
    //var i1='0';
    }
ledchng();

}
function a2() {
    var image = document.getElementById('b2');		
    if (image.getAttribute('src')=="images/off.png")
{
    image.src = "images/on.png";
    document.getElementById('b2r').style.display="none";
    document.getElementById('b2g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b2r').style.display="block";
    document.getElementById('b2g').style.display="none";
    //var i1='0';
    }
    ledchng();
}
function a3() {
    var image = document.getElementById('b3');		
    if (image.getAttribute('src')=="images/off.png")
{
    image.src = "images/on.png";
    document.getElementById('b3r').style.display="none";
    document.getElementById('b3g').style.display="block";
    //var i3='1'	;
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
   // var i3='0'	;
    }
    ledchng();
}

/* select input D */
function a4() {
    var image = document.getElementById('b4');		
    if (image.getAttribute('src')=="images/off.png") 
{
    image.src = "images/on.png";
    document.getElementById('b4r').style.display="none";
    document.getElementById('b4g').style.display="block";
    var i4='1'	;	
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b4r').style.display="block";
    document.getElementById('b4g').style.display="none";
    var i4='0'	;
    }
    ledchng();
}


/* select input C */
function a5() {
    var image = document.getElementById('b5');		
   if (image.getAttribute('src')=="images/off.png") 
{
    image.src = "images/on.png";
    document.getElementById('b5r').style.display="none";
    document.getElementById('b5g').style.display="block";
    var i5='1'	;
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b5r').style.display="block";
    document.getElementById('b5g').style.display="none";
    var i5='0'	;
    }
    ledchng();
    
}
/* select input B */
function a6() {
    var image = document.getElementById('b6');		
    if (image.getAttribute('src')=="images/off.png") 
{
    image.src = "images/on.png";
    document.getElementById('b6r').style.display="none";
    document.getElementById('b6g').style.display="block";
    var i6='1'	;	
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
    var i6='0';
    }
    ledchng();
}
 /* select input A */
function a7() {
    var image = document.getElementById('b7');		
   if (image.getAttribute('src')=="images/off.png") 
{
    image.src = "images/on.png";
    document.getElementById('b7r').style.display="none";
    document.getElementById('b7g').style.display="block";
    var i7='1'	;	
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b7r').style.display="block";
    document.getElementById('b7g').style.display="none";
    var i7='0';
    }
    ledchng();
}