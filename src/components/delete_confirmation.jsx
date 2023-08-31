import React from "react";
import Swal from "sweetalert2";
import borrar from "../assets/papelera.png";

function delete_confirmation({ onConfirm }) {
  const showDeleteConfirmation = () => {
    Swal.fire({
      title: "Eliminar comentario",
      text: "¿Estás seguro de que deseas eliminar este comentario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
        Swal.fire("Eliminado", "El comentario ha sido eliminado", "success");
      }
    });
  };

  return (
    <button onClick={showDeleteConfirmation} className="px-3 py-2 rounded">
      <img src={borrar} className="h-10 w-10" alt="" />
    </button>
  );
}

export default delete_confirmation;
