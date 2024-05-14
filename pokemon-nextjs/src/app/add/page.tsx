"use client";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

function PokemonAddPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [pokedex, setPokedex] = useState("");
  const handlePokedexChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokedex(event.target.value);
  };

  const [type1, setType1] = useState("");
  const handleType1Change = (event: SelectChangeEvent) => {
    setType1(event.target.value);
  };

  const [type2, setType2] = useState("");
  const handleType2Change = (event: SelectChangeEvent) => {
    setType2(event.target.value);
  };

  const [Hp, setHp] = useState("");
  const handleHpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHp(event.target.value);
  };

  const [attack, setAttack] = useState("");
  const handleAttackChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttack(event.target.value);
  };

  const [defense, setDefense] = useState("");
  const handleDefenseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDefense(event.target.value);
  };
  const [SpAttack, setSpAttack] = useState("");
  const handleSpAttackChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpAttack(event.target.value);
  };
  const [SpDefense, setSpDefense] = useState("");
  const handleSpDefenseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpDefense(event.target.value);
  };
  const [speed, setSpeed] = useState("");
  const handleSpeedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target.value);
  };

  const [generation, setGeneration] = useState("");
  const handleGenChange = (event: SelectChangeEvent) => {
    setGeneration(event.target.value);
  };

  const [legendary, setLegendary] = useState("");
  const handleLegendaryChange = (event: SelectChangeEvent) => {
    setLegendary(event.target.value);
  };

  const [showError, setShowError] = useState(false);

  const handleAddPokemon = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Editing Pokémon");
    console.log("New Name: " + name);
    console.log("New Pokedex: " + pokedex);
    console.log("New Type 1: " + type1);
    console.log("New Type 2: " + type2);
    console.log("New HP: " + Hp);
    console.log("New Attack: " + attack);
    console.log("New Defense: " + defense);
    console.log("New Sp.Attack: " + SpAttack);
    console.log("New Sp.Defense: " + SpDefense);
    console.log("New Speed: " + speed);
    console.log("Generation: " + generation);
    console.log("Legendary: " + legendary);

    const pokemonData = {
      name,
      pokedex,
      type1,
      type2,
      Hp,
      attack,
      defense,
      SpAttack,
      SpDefense,
      speed,
      generation,
      legendary,
    };

    if (
      name === "" ||
      pokedex === "" ||
      type1 === "" ||
      Hp === "" ||
      attack === "" ||
      defense === "" ||
      SpAttack === "" ||
      SpDefense === "" ||
      speed === "" ||
      generation === "" ||
      legendary === ""
    ) {
      setShowError(true);
      return;
    }
    setShowError(false);

    try {
      const response = await fetch(`http://localhost:5000/pokemons`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemonData),
      });

      if (!response.ok) {
        throw new Error("Failed to add Pokémon");
      }

      console.log("Pokémon added successfully");
      router.push(`/`);
      // Optionally, handle success response
    } catch (error) {
      console.error("Error updating Pokémon:", error);
      // Optionally, handle error
    }
  };

  const handleClearFilter = () => {
    setName("");
    setPokedex("");
    setType1("");
    setType2("");
    setHp("");
    setAttack("");
    setDefense("");
    setSpAttack("");
    setSpDefense("");
    setSpeed("");
    setGeneration("");
    setLegendary("");
  };

  return (
    <div>
      <div className="flex justify-center mt-8 text-2xl">
        Add New Pokemon
        {/* Name, Pokedex, Type 1, Type 2, Total: 318, HP: 45, Attack: 49, Defense: 49, Special Attack: 65,
        Special Defense: 65, Speed: 45, Generation: 1, Legendary: No */}
      </div>

      <div className="flex flex-col items-center mt-10">
        {/* Pokémon name*/}
        <div className="flex flex-col">
          <input
            id="pokemonName"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter new Pokémon name"
            value={name}
            onChange={handleNameChange}
          />
          {showError && name === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>
        {/* Pokédex */}
        <div className="flex flex-col">
          <input
            id="pokedex"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New Pokédex"
            value={pokedex}
            onChange={handlePokedexChange}
          />
          {showError && pokedex === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-2"></div>

        {/* Type 1 */}
        <div className="flex flex-col">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={type1}
              onChange={handleType1Change}
              displayEmpty
              sx={{ height: "40px", width: "240px" }}
            >
              <MenuItem value="">
                <em>Select New Type 1</em>
              </MenuItem>
              <MenuItem value="Ice">Ice</MenuItem>
              <MenuItem value="Water">Water</MenuItem>
              <MenuItem value="Grass">Grass</MenuItem>
              <MenuItem value="Dragon">Dragon</MenuItem>
              <MenuItem value="Fairy">Fairy</MenuItem>
              <MenuItem value="Electric">Electric</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Psychic">Psychic</MenuItem>
              <MenuItem value="Bug">Bug</MenuItem>
              <MenuItem value="Fire">Fire</MenuItem>
              <MenuItem value="Poison">Poison</MenuItem>
              <MenuItem value="Steel">Steel</MenuItem>
              <MenuItem value="Fighting">Fighting</MenuItem>
              <MenuItem value="Flying">Flying</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
              <MenuItem value="Ground">Ground</MenuItem>
              <MenuItem value="Ghost">Ghost</MenuItem>
              <MenuItem value="Rock">Rock</MenuItem>
            </Select>
            {showError && type1 === "" && (
              <div className="text-red-600 text-xs ml-1">
                * Field cannot be empty
              </div>
            )}
          </FormControl>
        </div>
        <div className="mb-2"></div>

        {/* Type 2 */}
        <div className="flex flex-col">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={type2}
              onChange={handleType2Change}
              displayEmpty
              sx={{ height: "40px", width: "240px" }}
            >
              <MenuItem value="">
                <em>Select New Type 2</em>
              </MenuItem>
              <MenuItem value="NA">NA</MenuItem>
              <MenuItem value="Ice">Ice</MenuItem>
              <MenuItem value="Water">Water</MenuItem>
              <MenuItem value="Grass">Grass</MenuItem>
              <MenuItem value="Dragon">Dragon</MenuItem>
              <MenuItem value="Fairy">Fairy</MenuItem>
              <MenuItem value="Electric">Electric</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Psychic">Psychic</MenuItem>
              <MenuItem value="Bug">Bug</MenuItem>
              <MenuItem value="Fire">Fire</MenuItem>
              <MenuItem value="Poison">Poison</MenuItem>
              <MenuItem value="Steel">Steel</MenuItem>
              <MenuItem value="Fighting">Fighting</MenuItem>
              <MenuItem value="Flying">Flying</MenuItem>
              <MenuItem value="Dark">Dark</MenuItem>
              <MenuItem value="Ground">Ground</MenuItem>
              <MenuItem value="Ghost">Ghost</MenuItem>
              <MenuItem value="Rock">Rock</MenuItem>
            </Select>
            <div className="text-xs ml-1 mb-2 italic">
              Select NA to leave empty
            </div>
          </FormControl>
        </div>

        {/* HP */}
        <div className="flex flex-col">
          <input
            id="hp"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New HP"
            value={Hp}
            onChange={handleHpChange}
          />
          {showError && Hp === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>

        {/* Attack*/}
        <div className="flex flex-col">
          <input
            id="attack"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New Attack Points"
            value={attack}
            onChange={handleAttackChange}
          />
          {showError && attack === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>

        {/* Defense */}
        <div className="flex flex-col">
          <input
            id="defense"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New Defense Points"
            value={defense}
            onChange={handleDefenseChange}
          />
          {showError && defense === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>

        {/* Sp. Attack*/}
        <div className="flex flex-col">
          <input
            id="SpAttack"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New Sp.Attk Points"
            value={SpAttack}
            onChange={handleSpAttackChange}
          />
          {showError && SpAttack === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>

        {/* Sp. Defense */}
        <div className="flex flex-col">
          <input
            id="SpDefense"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New Sp.Def Points"
            value={SpDefense}
            onChange={handleSpDefenseChange}
          />
          {showError && SpDefense === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>

        {/* Speed */}
        <div className="flex flex-col">
          <input
            id="speed"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none"
            placeholder="Enter New Speed"
            value={speed}
            onChange={handleSpeedChange}
          />
          {showError && speed === "" && (
            <div className="text-red-600 text-xs ml-1">
              * Field cannot be empty
            </div>
          )}
        </div>
        <div className="mb-4"></div>

        {/* Generation */}
        <div className="flex flex-col">
          <FormControl sx={{ m: 1, minWidth: 120, marginBottom: 2 }}>
            <Select
              value={generation}
              onChange={handleGenChange}
              displayEmpty
              sx={{ height: "40px", width: "240px" }}
            >
              <MenuItem value="">
                <em>Select New Generation</em>
              </MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
            {showError && generation === "" && (
              <div className="text-red-600 text-xs ml-1">
                * Field cannot be empty
              </div>
            )}
          </FormControl>
        </div>

        {/* Legendary */}
        <div className="flex flex-col mr-16 mb-4">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Legendary</FormLabel>
            <RadioGroup
              aria-labelledby="legendary-radio-buttons-group-label"
              name="legendary-radio-buttons-group"
              value={legendary}
              onChange={handleLegendaryChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
            {showError && legendary === "" && (
              <div className="text-red-600 text-xs ml-1">
                * Field cannot be empty
              </div>
            )}
          </FormControl>
        </div>

        {/* Add Button */}

        <div className="flex flex-row mb-4">
          <button
            className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-10 rounded-md mr-2"
            onClick={handleAddPokemon}
          >
            Add
          </button>

          <button
            className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-md ml-2"
            onClick={handleClearFilter}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokemonAddPage;
