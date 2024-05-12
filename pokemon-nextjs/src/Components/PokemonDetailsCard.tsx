// Card component in more details page
import React from "react";

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

function PokemonDetailsCard({ pokemon }: { pokemon: Pokemon }) {
  const {
    id,
    pokedex,
    name,
    type_1,
    type_2,
    total,
    hp,
    attack,
    defense,
    sp_atk,
    sp_def,
    speed,
    generation,
    legendary,
  } = pokemon;

  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 sm:w-65 w-80 mt-12 flex flex-col">
      <h2 className="flex justify-center font-bold mb-4">{name}</h2>
      {/* Horizontal line */}
      <p className="mb-2">Pokedex: {pokedex}</p>
      <p className="mb-2">Type 1: {type_1}</p>
      {type_2 && <p className="mb-2">Type 2: {type_2}</p>}
      <p className="mb-2">Total: {total}</p>
      <p className="mb-2">HP: {hp}</p>
      <p className="mb-2">Attack: {attack}</p>
      <p className="mb-2">Defense: {defense}</p>
      <p className="mb-2">Special Attack: {sp_atk}</p>
      <p className="mb-2">Special Defense: {sp_def}</p>
      <p className="mb-2">Speed: {speed}</p>
      <p className="mb-2">Generation: {generation}</p>
      <p className="mb-2">Legendary: {legendary ? "Yes" : "No"}</p>
      <button className="bg-emerald-600 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg">
        Edit Pokémon
      </button>{" "}
    </div>
  );
}

export default PokemonDetailsCard;
