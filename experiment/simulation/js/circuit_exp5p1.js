/*Lab:exp_5_Part1_Decoder
	File name: circuit_exp5p1.js
    Author:Prakriti Dhang */
    
    var d1;
    var d11;
    var sinp;
    var decimal;
    

function ledchng(){

    var image1 = document.getElementById('b1'); /* G1 */
    var image2 = document.getElementById('b2'); /* GND */
    var image3 = document.getElementById('b3'); /* C */
    var image4 = document.getElementById('b4'); /* B */
    var image5 = document.getElementById('b5'); /* A */
    var image6 = document.getElementById('b6');  /* VCC */
    
       /* G1 on, VCC on, C off, B off, A off */
    if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/off.png" ){
        /*document.getElementById('y1').src="ciry1.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='8px';
        document.getElementById('y1').style.height='450px' ; */
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
        
        //document.getElementById('inp').value='000' ;
        document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y0 </span> = complement of C\u0305B\u0305A\u0305 = C+B+A";
        
        decimal="0";
        sinp="000".split("");
        d1="01111111";
        d11=d1.split("");
        

    }


      /* G1 on, VCC on, C off, B off, A on */
    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/on.png" ){
        /*document.getElementById('y1').src="ciry1.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='8px';
        document.getElementById('y1').style.height='450px' ; */
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
        
       // document.getElementById('inp').value='001' ;
        document.getElementById('eq').innerHTML = "Equation:<span id=addbar> Y1 </span>= complement of C\u0305B\u0305A = C+B+A\u0305";
        decimal="1";
        sinp="001".split("");
        d1="10111111";
        d11=d1.split("");

    }

     /* G1 on, VCC on, C off, B on, A off */
    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/off.png" ){
        /*document.getElementById('y1').src="ciry2.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='6px';*/
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

       // document.getElementById('inp').value='010' ;
        document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y2 </span>= complement of C\u0305BA\u0305 = C+B\u0305+A";
        decimal="2";
         sinp="010".split("");
        d1="11011111";
        d11=d1.split("");

    }

     /* G1 on, VCC on, C off, B on, A on */

    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/off.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/on.png" ){
       /* document.getElementById('y1').src="ciry3.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='-30px';*/

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
        //document.getElementById('inp').value='011' ;
        document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y3 </span>= complement of C\u0305BA = C+B\u0305+A\u0305";
        decimal="3";
        sinp="011".split("");
        d1="11101111";
        d11=d1.split("");
    }

     /* G1 on, VCC on, C on, B off, A off */
    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/off.png" ){
       /* document.getElementById('y1').src="ciry4.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='6px'; */
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
        //document.getElementById('inp').value='100' ;
        document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y4 </span>= complement of CB\u0305A\u0305 = C\u0305+B+A";
        decimal="4";
         sinp="100".split("");
        d1="11110111";
        d11=d1.split("");
    }

     /* G1 on, VCC on, C on, B off, A on */
    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/off.png" && image5.getAttribute('src')=="images/on.png" ){
        /* document.getElementById('y1').src="ciry5.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='2px'; */
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
        //document.getElementById('inp').value='101' ;
        document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y5 </span>= complement of CB\u0305A = C\u0305+B+A\u0305";
        decimal="5";
         sinp="101".split("");
        d1="11111011";
        d11=d1.split("");
    }

     /* G1 on, VCC on, C on, B on, A off */
    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/off.png" ){
       /*  document.getElementById('y1').src="ciry6.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='2px'; */
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
       // document.getElementById('inp').value='110' ;
        document.getElementById('eq').innerHTML = "Equation: <span id=addbar> Y6 </span>= complement of CBA\u0305 = C\u0305+B\u0305+A";
        decimal="6";
        sinp="110".split("");
        d1="11111101";
        d11=d1.split("");
    }
     /* G1 on, VCC on, C on, B on, A on */
    else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" && image3.getAttribute('src')=="images/on.png" && image4.getAttribute('src')=="images/on.png" && image5.getAttribute('src')=="images/on.png" ){
        /* document.getElementById('y1').src="ciry7.jpg";
        document.getElementById('y1').style.visibility='visible';
        document.getElementById('y1').style.right='2px'; */
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
        //document.getElementById('inp').value='111' ;
        document.getElementById('eq').innerHTML = " Equation: <span id=addbar> Y7 </span>= complement of CBA = C\u0305+B\u0305+A\u0305";
        decimal="7";
        sinp="111".split("");
        d1="11111110";
        d11=d1.split("");
    }


 /* G1 off, VCC off, C off, B off, A off */
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
 if (image1.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/on.png" ) {
        document.getElementById('g1').style.visibility='visible';
        document.getElementById('showalt').style.visibility='visible';
        document.getElementById('v').style.visibility='hidden';
        document.getElementById('gnd').style.visibility='hidden';

}
else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/off.png" ) {
    document.getElementById('g1').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='visible';
    document.getElementById('v').style.visibility='visible';
    document.getElementById('gnd').style.visibility='hidden';

}
else if (image1.getAttribute('src')=="images/on.png" && image6.getAttribute('src')=="images/on.png" ) {
    document.getElementById('g1').style.visibility='hidden';
    document.getElementById('showalt').style.visibility='hidden';
    document.getElementById('v').style.visibility='hidden';
    


}
else if(image1.getAttribute('src')=="images/off.png" && image6.getAttribute('src')=="images/off.png" ){
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
 if(image2.getAttribute('src')=="images/on.png"){
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
    var i3='1'	;
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b3r').style.display="block";
    document.getElementById('b3g').style.display="none";
    var i3='0'	;
    }
    ledchng();
}
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
function a6() {
    var image = document.getElementById('b6');		
    if (image.getAttribute('src')=="images/off.png")
{
    image.src = "images/on.png";
    document.getElementById('b6r').style.display="none";
    document.getElementById('b6g').style.display="block";
    //ar i1='1'	;	
    } 
else
{
    image.src = "images/off.png";
    document.getElementById('b6r').style.display="block";
    document.getElementById('b6g').style.display="none";
    //var i1='0';
    }
    ledchng();
}


