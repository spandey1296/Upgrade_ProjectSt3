var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("em").value;


function validateform() 
{
      var name = document.myform.name.value;
      var mobile = document.myform.mobile.value;

      var x = document.myform.email.value;
      var atposition = x.indexOf("@");
      var dotposition = x.lastIndexOf(".");

      if (name.length<3 || name == "") 
      {
            alert("Name can't be blank");
            return false;
      }
     
      else if(atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
      alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
      return false;
}

}

function getAndUpdate() {
      console.log("Updating List...");
      n = document.getElementById('name').value;
      mob = document.getElementById('mobile').value;
      mail = document.getElementById('em').value;
      if (localStorage.getItem('itemsJson') == null) {
            itemJsonArray = [];
            itemJsonArray.push([n, mob, mail]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
      }
      else {
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
            itemJsonArray.push([n, mob, mail]);
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
      }
      update();
}
function update() {
      if (localStorage.getItem('itemsJson') == null) {
            itemJsonArray = [];
            localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
      }
      else {
            itemJsonArrayStr = localStorage.getItem('itemsJson')
            itemJsonArray = JSON.parse(itemJsonArrayStr);
      }
      // Populate the table
      let tableBody = document.getElementById("tableBody");
      let str = "";
      itemJsonArray.forEach((element, index) => {
            str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td>${element[2]}</td>
        <td>
            <button class="del" onclick="deleted(${index})">Delete</button></td> 
        </tr>`;
      });
      tableBody.innerHTML = str;
}
submit = document.getElementById("submit");
submit.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
      console.log("Delete", itemIndex);
      itemJsonArrayStr = localStorage.getItem('itemsJson')
      itemJsonArray = JSON.parse(itemJsonArrayStr);

      itemJsonArray.splice(itemIndex, 1);
      localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
      update();
}


