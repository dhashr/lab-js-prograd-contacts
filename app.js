//Enter your code here..

document.querySelector("#btnGet").addEventListener("click", () =>{
    function contactlist(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(contact => {
                if(!contact.ok){
                    throw Error("Error")
                }
                return contact.json();
            }).then(result => {
                console.log(result);
                var player='<h2>Lists of Users</h2>';
                    result.forEach(function(user) {
                        player+=
                    `<div class="player">
                        <div class="strength">Name : ${user.name}</div>
                        <div>Email   : ${user.email}</div>
                        <div>Phone   : ${user.phone}</div>
                        <div>Website : ${user.website}</div>
                        <div>Company : ${user.company.name}</div>
                        <div>City    : ${user.address.city}</div>
                        <div>Zipcode : ${user.address.zipcode}</div>
                        </div>`
                    })
                document.querySelector("#message").insertAdjacentHTML("afterbegin",player);
            }).catch((error) => {
                console.log('Promise rejected.');
                console.log(error.message);
              });
    
    }
    contactlist()
});


// let contactdetails ;  
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(con => con.json())
// .then(json => contactdetails = JSON.stringify(json));
// let contacts = document.querySelector("#message");
//  contacts.innerHTML = contactdetails;



 
