// 1. Confirmación de eliminación (Requisito CRUD)
function confirmarEliminar(titulo) {
    return confirm(`¿Estás seguro de que deseas eliminar el libro "${titulo}"?`);
}

console.log("JS: Delete confirmation logic loaded.");