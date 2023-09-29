/* /*Lab:exp_5_Part2_Decoder
	File name: addtbl_exp5p2.js
  content: inert  into table, sorting teh table, remove duplicate row.
    Author:Prakriti Dhang */

    /* Table creation */
    var tabrowindex = 2;
    var arr = [];
    var table;
    var clmns, vlt, columns, rest;
    var dataPoints = [];
    /*var d1;
    var d11=d1.split("");*/
    var table, rows, switching, i, x, y, shouldSwitch;
    function aintbl(){
        table = document.getElementById("mytable1");
        //var y1 = document.getElementById("inp").value.split("");
        //arr[1] = document.getElementById("out").value;
        
        arr[0]=decimal;
        //alert(arr[0]);
    
        arr[1]=sinp[0];
        arr[2]=sinp[1];
        arr[3]=sinp[2];
        arr[4]=sinp[3];

        arr[5]=d11[0];
        arr[6]=d11[1];
        arr[7]=d11[2];
        arr[8]=d11[3];
        arr[9]=d11[4];
        arr[10]=d11[5];
        arr[11]=d11[6];
        arr[12]=d11[7];
        arr[13]=d11[8];
        arr[14]=d11[9];
        arr[15]=d11[10];
        arr[16]=d11[11];
        arr[17]=d11[12];
        arr[18]=d11[13];
        arr[19]=d11[14];
        arr[20]=d11[15];

        
    
        tabrowindex + 1;
        
           
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 21; q++) {
    
            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
    
        }
        sortTable();
        
        deleterow(); /* Delete duplicate row */
       
        
    }
    
    
        function sortTable() {
         
          table = document.getElementById("mytable1");
          swap = true;
          /*Make a loop that will continue until
          no swaping has been done:*/
          while (swap) {
            //start by saying: no swap is done:
            swap = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 3; i < (rows.length - 1); i++) {
              //start by saying there should be no swap:
              shouldswap = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("td")[0];
              y = rows[i + 1].getElementsByTagName("td")[0];
              //check if the two rows should swap place:
              if (Number(x.innerHTML) > Number(y.innerHTML)) {
                //if so, mark as a swap and break the loop:
                shouldswap = true;
                break;
              }
    
              
    
            }
            if (shouldswap) {
              /*If a swap has been marked, make the swap
              and mark that a switch has been done:*/
              rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
              swap = true;
              
    
            }
           
           
          }
        }
        
    
      
       
        function deleterow()
        {
          
          table = document.getElementById("mytable1");
          var rowCount = table.rows.length;
          swap = true;
          /*Make a loop that will continue until
          no swaping has been done:*/
          while (swap) {
            //start by saying: no swap is done:
            swap = false;
            rows = table.rows;
            /*Loop through all table rows (except the
            first, which contains table headers):*/
            for (i = 3; i < (rows.length - 1); i++) {
              //start by saying there should be no swap:
              shouldswap = false;
              /*Get the two elements you want to compare,
              one from current row and one from the next:*/
              x = rows[i].getElementsByTagName("td")[0];
              y = rows[i + 1].getElementsByTagName("td")[0];
              //check if the two rows should swap place:
              if (Number(x.innerHTML) == Number(y.innerHTML)) {
                //if so, mark as a swap and break the loop:
                shouldswap = true;
                alert("Already Inserted");
                break;
              }
           
            }
            if (shouldswap) {
              /*If a swap has been marked, make the swap
              and mark that a switch has been done:*/
              rows[i].remove(rows[i + 1]);
              rowCount--;
              i--;
              tabrowindex--;
              swap = true;
            
              
    
            }
           
           
          }
          }