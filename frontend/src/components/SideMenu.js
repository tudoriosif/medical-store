import React, { useState } from "react";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import "../styles/SideMenu.css";

function SideMenu() {
  // Variabila de stare ca sa verificam daca este afisat formul
  const [isFormShown, setFormShow] = useState(false);

  // Daca apasam butonul de add se afiseaza componenta AddProduct
  const showFormAdd = () => {
    return (
      <div className="operation-form">
        <AddProduct />
      </div>
    );
  };

  // Daca apasam butonul de add se afiseaza componenta RemoveProduct
  const showFormRemove = () => {
    return (
      <div className="operation-form">
        <RemoveProduct />
      </div>
    );
  };

  return (
    <div className="sidemenu-container">
      <button
        className="add-button"
        onClick={() =>
          isFormShown === false ? setFormShow("add") : setFormShow(false)
        }
      >
        <FaPlusCircle size={60} />
      </button>
      <button
        className="remove-button"
        onClick={() =>
          isFormShown === false ? setFormShow("remove") : setFormShow(false)
        }
      >
        <FaTimesCircle size={60} />
      </button>
      {
        isFormShown === "add" &&
          showFormAdd() /* daca am setat variabila de stare ca afiseaza add apelam functia showFormAdd() pentru a o afisa*/
      }
      {
        isFormShown === "remove" &&
          showFormRemove() /* daca am setat variabila de stare ca afiseaza remove apelam functia showFormRemove() pentru a o afisa*/
      }
    </div>
  );
}

export default SideMenu;
