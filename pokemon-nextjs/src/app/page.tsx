import SearchBar from "@/Components/SearchBar";
import PokemonCard from "@/Components/PokemonCard";
import sample from "../../public/sample.json";

export default function Home() {
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
        {sample.map((pokemon) => (
          <div key={pokemon.id} className="flex justify-center items-center">
            <PokemonCard name={pokemon.name} />
          </div>
        ))}
      </div>
    </>
  );
}
