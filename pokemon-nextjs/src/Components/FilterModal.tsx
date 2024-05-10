"use client";
import Image from "next/image";
import FilterIcon from "../Icons/filter.svg";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

function FilterModal() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        // <div className="relative">
        //   <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 shadow-md rounded-lg p-4">
        //     {/* Modal Content */}
        //     <div className="text-lg font-bold mb-4">Filter Pokémon</div>
        //     <div className="flex flex-col">
        //       <label className="text-gray-700 mb-2">Enter Pokémon name:</label>
        //       <input
        //         id="pokemonName"
        //         type="text"
        //         className="w-full px-6 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full focus:outline-none"
        //         placeholder="Pokémon name"
        //       />
        //     </div>
        //   </div>
        // </div>
        <div>tes</div>
      )}
    </>
  );
}
export default FilterModal;
