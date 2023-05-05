let submit=document.getElementById('submit').addEventListener('click', function loki(event){
event.preventDefault();
let name=document.getElementById('name').value
let amount=document.getElementById('amount').value
let email=document.getElementById('email').value
let date=document.getElementById('date').value
let type=document.getElementById('type').value
let obj={
    'name': name,
    'email':email,
    'date':date,
    'amount':amount,
    'type':type

}
let Name = document.getElementById("name");
let Email = document.getElementById("email");
let Date = document.getElementById("date");
let Amount = document.getElementById("amount");
let Type =document.getElementById("type")
Name.value = "";
Email.value = "";
Date.value = "";
Amount.value = "";    
Type.value ="";

let count = localStorage.getItem("UserCount") || 0;
    count++;
    let key = "USER" + count;
    let objstr = JSON.stringify(obj);
    localStorage.setItem("UserCount", count);
    localStorage.setItem(key, objstr);
    let input = localStorage.getItem(key);
    let ans = JSON.parse(input);


    let userInfo = document.getElementById("user-info");
    let listItem = document.createElement("li");
    let text = document.createTextNode(key + " - " + name + " - " + email);
    listItem.appendChild(text);
    userInfo.appendChild(listItem);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete User";
    deleteButton.setAttribute("id", "btn" + count);
    listItem.appendChild(deleteButton);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit User";
    editButton.setAttribute("id", "btn1");
    listItem.appendChild(editButton);

    deleteButton.addEventListener('click', function deleteUser(event) {
        listItem.remove();
        let d = event.target.parentNode.firstChild.textContent.split(" - ")[1];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = JSON.parse(localStorage.getItem(key));
            if (value.name === d) {
                localStorage.removeItem(key);
                break;
            }
        }
        console.log(d);
    });
    editButton.addEventListener('click', function editUser(event) {
        event.preventDefault();
         listItem.remove();
        let e = event.target.parentNode.firstChild.textContent.split(" - ")[1];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = JSON.parse(localStorage.getItem(key));
            if (value.name === e) {
                localStorage.removeItem(key);
                break;
            }
        }
        let nambu = document.querySelector("#name")
        let amtu  = document.querySelector("#amount")
        let mailbu = document.querySelector('#email')
        let typu= document.querySelector('#type')
        let datu = document.querySelector('#date')
        nambu.value=obj.name
        mailbu.value=obj.email
        amtu.value=obj.amount
        typu.value=obj.type
        datu.value=obj.date
})

})