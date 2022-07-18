var contacts = [
    document.querySelector("#delete-1"),
    document.querySelector("#delete-2")
]


function remove(id){
    element=contacts[id]
    console.log(element)
    contacts[id].innerHTML.remove();
}

function login(element){
    element.innerText = "Logout"
}
function likeNinja(){
    alert("Ninja was liked!");
}