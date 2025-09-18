function salary(){
    let basic = document.getElementById('salary').value;
    let housing = document.getElementById('house').value;
    let transport = document.getElementById('transport').value;
    let bonus = document.getElementById('bonus').value;


    let total = Number(basic) + Number(housing) +  Number(transport) + Number(bonus)
    window.total = total
    document.getElementById('gross').innerText = total


}

function deduc(){
  let info = document.getElementsByClassName('info');
  let total_info = 0;

  Array.from(info).forEach((each) => {
    total_info += Number(each.value) || 0; // add safely
  });

  // make it global if needed
  window.total_info = total_info;

  // display the total
  document.getElementById('deduc').innerText = total_info;

  netPay()
}


function netPay(){
    let net_pay = total - total_info;
    document.getElementById('net_pay').innerText = net_pay
}

function addmore(){

         let table = document.getElementById("tb");
         let add = document.createElement('tr')


         let rowCount = table.rows.length;
         let newRow = table.insertRow(rowCount - 1);

        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);



        cell1.innerHTML = `<input type = "text" >`
         cell2.innerHTML=`  <input type = "number" class = "info">
        <button type="button" id="remove" onclick="remove(this)">Remove</button> <br>`
}


function remove(meee){
 console.log(meee)
 meee.parentElement.parentElement.remove()

}

