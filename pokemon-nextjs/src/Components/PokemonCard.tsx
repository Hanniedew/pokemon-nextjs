// Card component in home page
import Link from "next/link";

function PokemonCard({ name, id }: { name: string; id: number }) {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/pokemons/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Handle success, like updating UI or refreshing data
        window.location.reload();
        console.log("Pokemon deleted successfully");
      } else {
        // Handle error
        console.error("Failed to delete pokemon");
      }
    } catch (error) {
      console.error("Failed to delete pokemon", error);
    }
  };
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 sm:w-65 w-80">
      <div className="text-lg">{name}</div>
      <div className="flex flex-row">
        <div className="text-xs text-green-600">
          <Link href={`/pokemons/${name}`}>More Details</Link>{" "}
          {/* //          <Link href={`/pokemons?name=${name}`}>More Details</Link> */}
        </div>
        <div className="text-xs"> &nbsp;| &nbsp;</div>
        <div
          className="text-xs text-red-500 cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
