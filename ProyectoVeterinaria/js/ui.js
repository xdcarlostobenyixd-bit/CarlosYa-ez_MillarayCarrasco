function renderPets(pets){

    const petList = document.getElementById("petList");

    petList.innerHTML = "";

    pets.forEach((pet, index) => {

        petList.innerHTML += `
        
        <div class="col-md-4">

            <div class="card card-pet shadow">

                <div class="card-body">

                    <h5>${pet.name}</h5>

                    <p>
                        Edad: ${pet.age}
                    </p>

                    <p>
                        Tipo: ${pet.type}
                    </p>

                    <p>
                        Dueño: ${pet.owner}
                    </p>

                    <button 
                        class="btn btn-warning"
                        onclick="editPet(${index})">
                        Editar
                    </button>

                    <button 
                        class="btn btn-danger"
                        onclick="deletePet(${index})">
                        Eliminar
                    </button>

                </div>

            </div>

        </div>
        `;
    });

}