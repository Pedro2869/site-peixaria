function validarFormulario() {
    let name = document.getElementById("#nameUser").value
    let age = document.getElementById("#ageUser").value

    if (name === "" || age === "") {
        alert("Por favor, preencha todos os campos.")
        return false
    }
}

