"use client";
import PokemonDetailsCard from "@/Components/PokemonDetailsCard";
import { useEffect, useState } from "react";

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

function PokemonDetailsPage({
  params,
}: {
  params: {
    name: string;
  };
}) {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(
        `http://localhost:5000/pokemons?name=${params.name}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setPokemonDetails(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log(pokemonDetails);
  return (
    <div>
      <div className="flex justify-center mt-8 text-2xl">
        Pokémons Details for {params.name}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1">
          {pokemonDetails.length > 0 ? (
            pokemonDetails.map((pokemon: Pokemon) => (
              <PokemonDetailsCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <div className="text-2xl mt-24">No data Available</div>
          )}
        </div>
      </div>
      {/* <div>
        <div>Ppokemon {params.name}</div>
      </div> */}
    </div>
  );
}

export default PokemonDetailsPage;
