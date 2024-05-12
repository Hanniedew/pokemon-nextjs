"use client";
import SearchBar from "@/Components/SearchBar";
import PokemonCard from "@/Components/PokemonCard";
import sample from "../../public/sample.json";
import { useState, useEffect, ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";

interface Pokemon {
  id: number;
  pokedex: number;
  name: string;
  type_1: string;
  type_2: string;
  total: number;
  hp: number;
  attack: number;
  defense: number;
  sp_atk: number;
  sp_def: number;
  speed: number;
  generation: number;
  legendary: boolean;
}

export default function Home() {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/pokemons");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visiblePokemons = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <SearchBar />

      <div className="flex justify-center items-center mt-8 mb-8">
        <h1 className="text-2xl">Pokémons</h1>
        <button className="ml-4 bg-violet-400 hover:bg-violet-800 text-white px-4 py-2 rounded-lg">
          Add Pokémon
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-4 ml-8 mr-8">
        {visiblePokemons.map((pokemon: Pokemon) => (
          <div key={pokemon.id} className="flex justify-center items-center">
            <PokemonCard name={pokemon.name} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 mb-8">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </div>
    </>
  );
}
