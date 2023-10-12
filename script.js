function addition(){
        myTable.innerHTML = ""
   var firstInput=rowNum.value;
   var secondInput=colNum.value;
   
   for(i=1; i<=Number(firstInput); i++){
    add = `<tr>`
    for (j=1; j<=Number(secondInput);j++){
        add +=`<td style=" width: 400px"> ${i} + ${j} =${i + j} </td>`;
    }
    add += `</tr>`
    myTable.innerHTML += add
    }
    if (rowNum.value == "" || colNum.value == "") {
        makeTab.innerHTML=`<p style="text-align: center; font-size: 30px; font-weight: 400; color:red;">Input value must be enter</p>`
    } else {
        makeTab.innerHTML=``
    }
}
function subtraction(){
   var firstInput=rowNum.value;
   var secondInput=colNum.value;
   myTable.innerHTML = "";
   for(i=1; i<=Number(firstInput); i++){
    sub = `<tr class="styleTable">`;
    for (j=1; j<=Number(secondInput);j++){
        sub+=`<td> ${i} - ${j} =${i - j} </td>`;
    }
    sub += `</tr>`
    myTable.innerHTML += sub
    }
    if (rowNum.value == "" || colNum.value == "") {
        makeTab.innerHTML=`<p style="text-align: center; font-size: 30px; font-weight: 400; color:red;">Input value must be enter</p>`
    } else {
        makeTab.innerHTML=``
    }
}
function multiplication(){
   var firstInput=rowNum.value;
   var secondInput=colNum.value;
   myTable.innerHTML = ""
   for(i=1; i<=Number(firstInput); i++){
    mult = `<tr>`
    for (j=1; j<=Number(secondInput);j++){
        mult +=`<td style= " width: 200px"> ${i} x ${j} =${i * j} </td>`
    }
    mult += `</tr>`
    myTable.innerHTML += mult
    }
    if (rowNum.value == "" || colNum.value == "") {
        makeTab.innerHTML=`<p style="text-align: center; font-size: 30px; font-weight: 400; color:red;">Input value must be enter</p>`

    } else {
        makeTab.innerHTML=``
    }
}
function division(){
   var firstInput=rowNum.value;
   var secondInput=colNum.value;
   myTable.innerHTML = ""
   for(i=1; i<=Number(firstInput); i++){
    div = `<tr>`
    for (j=1; j<=Number(secondInput);j++){
        var answer =i / j
        div +=`<td style=" width: 200px;"> ${i} / ${j} =${answer.toFixed(2)} </td>`
    }
    div += `</tr>`
    myTable.innerHTML +=div
    }
    if (rowNum.value == "" || colNum.value == "") {
        makeTab.innerHTML=`<p style="text-align: center; font-size: 30px; font-weight: 400; color:red;">Input value must be enter</p>`

    } else {
        makeTab.innerHTML=``
    }
}

