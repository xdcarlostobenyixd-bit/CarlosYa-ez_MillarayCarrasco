function validatePet(name, age, type){

    if(name.trim() === ""){
        alert("El nombre es obligatorio");
        return false;
    }

    if(age <= 0 || age === ""){
        alert("Edad inválida");
        return false;
    }

    if(type === ""){
        alert("Seleccione un tipo");
        return false;
    }

    return true;
}