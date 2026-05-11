let pets = getPets();

renderPets(pets);

const form = document.getElementById("petForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const id = document.getElementById("petId").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const type = document.getElementById("type").value;
    const owner = document.getElementById("owner").value;

    if(!validatePet(name, age, type)){
        return;
    }

    const pet = {
        name,
        age,
        type,
        owner
    };

    if(id === ""){

        pets.push(pet);

    }else{

        pets[id] = pet;

    }

    savePets(pets);

    renderPets(pets);

    form.reset();

    document.getElementById("petId").value = "";

});

function deletePet(index){

    if(confirm("¿Eliminar mascota?")){

        pets.splice(index,1);

        savePets(pets);

        renderPets(pets);

    }

}

function editPet(index){

    const pet = pets[index];

    document.getElementById("petId").value = index;
    document.getElementById("name").value = pet.name;
    document.getElementById("age").value = pet.age;
    document.getElementById("type").value = pet.type;
    document.getElementById("owner").value = pet.owner;

}

document.getElementById("search")
.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    const filtered = pets.filter(pet =>
        pet.type.toLowerCase().includes(value)
    );

    renderPets(filtered);

});