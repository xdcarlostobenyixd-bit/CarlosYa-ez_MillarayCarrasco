function savePets(pets){
    localStorage.setItem("pets", JSON.stringify(pets));
}

function getPets(){
    return JSON.parse(localStorage.getItem("pets")) || [];
}