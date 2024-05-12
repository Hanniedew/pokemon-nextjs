function PokemonCard({ name }: { name: string }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 sm:w-65 w-80">
      <div className="text-lg">{name}</div>
      <div className="flex flex-row">
        <div className="text-xs text-green-600">More Details </div>
        <div className="text-xs"> &nbsp;| &nbsp;</div>
        <div className="text-xs text-red-500">Delete</div>
      </div>
    </div>
  );
}

export default PokemonCard;
