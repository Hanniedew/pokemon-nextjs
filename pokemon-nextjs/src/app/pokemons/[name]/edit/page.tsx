"use client";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useState, ChangeEvent, useEffect } from "react";

function PokemonEditPage({
  params,
}: {
  params: {
    name: string;
  };
}) {
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

  const handleEditSubmit = () => {
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
        Editing Details for {params.name}
        {/* Name, Pokedex, Type 1, Type 2, Total: 318, HP: 45, Attack: 49, Defense: 49, Special Attack: 65,
        Special Defense: 65, Speed: 45, Generation: 1, Legendary: No */}
      </div>

      <div className="flex flex-col items-center mt-10">
        {/* Pokémon name*/}
        <div className="flex flex-col mr-4">
          <input
            id="pokemonName"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter new Pokémon name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        {/* Pokédex */}
        <div className="flex flex-col mr-4">
          <input
            id="pokedex"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New Pokédex"
            value={pokedex}
            onChange={handlePokedexChange}
          />
        </div>

        {/* Type 1 */}
        <div className="flex flex-col mr-4">
          <FormControl sx={{ m: 1, minWidth: 120, marginBottom: 2 }}>
            <Select
              value={type1}
              onChange={handleType1Change}
              displayEmpty
              sx={{ height: "40px", width: "240px" }}
            >
              <MenuItem value="">
                <em>Select New Type 1</em>
              </MenuItem>
              <MenuItem value="ice">Ice</MenuItem>
              <MenuItem value="water">Water</MenuItem>
              <MenuItem value="grass">Grass</MenuItem>
              <MenuItem value="dragon">Dragon</MenuItem>
              <MenuItem value="fairy">Fairy</MenuItem>
              <MenuItem value="electric">Electric</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="psychic">Psychic</MenuItem>
              <MenuItem value="bug">Bug</MenuItem>
              <MenuItem value="fire">Fire</MenuItem>
              <MenuItem value="poison">Poison</MenuItem>
              <MenuItem value="steel">Steel</MenuItem>
              <MenuItem value="fighting">Fighting</MenuItem>
              <MenuItem value="flying">Flying</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="ground">Ground</MenuItem>
              <MenuItem value="ghost">Ghost</MenuItem>
              <MenuItem value="rock">Rock</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Type 2 */}
        <div className="flex flex-col mr-4">
          <FormControl sx={{ m: 1, minWidth: 120, marginBottom: 2 }}>
            <Select
              value={type2}
              onChange={handleType2Change}
              displayEmpty
              sx={{ height: "40px", width: "240px" }}
            >
              <MenuItem value="">
                <em>Select New Type 2</em>
              </MenuItem>
              <MenuItem value="ice">Ice</MenuItem>
              <MenuItem value="water">Water</MenuItem>
              <MenuItem value="grass">Grass</MenuItem>
              <MenuItem value="dragon">Dragon</MenuItem>
              <MenuItem value="fairy">Fairy</MenuItem>
              <MenuItem value="electric">Electric</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="psychic">Psychic</MenuItem>
              <MenuItem value="bug">Bug</MenuItem>
              <MenuItem value="fire">Fire</MenuItem>
              <MenuItem value="poison">Poison</MenuItem>
              <MenuItem value="steel">Steel</MenuItem>
              <MenuItem value="fighting">Fighting</MenuItem>
              <MenuItem value="flying">Flying</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
              <MenuItem value="ground">Ground</MenuItem>
              <MenuItem value="ghost">Ghost</MenuItem>
              <MenuItem value="rock">Rock</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* HP */}
        <div className="flex flex-col mr-4">
          <input
            id="hp"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New HP"
            value={Hp}
            onChange={handleHpChange}
          />
        </div>

        {/* Attack*/}
        <div className="flex flex-col mr-4">
          <input
            id="attack"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New Attack Points"
            value={attack}
            onChange={handleAttackChange}
          />
        </div>

        {/* Defense */}
        <div className="flex flex-col mr-4">
          <input
            id="defense"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New Defense Points"
            value={defense}
            onChange={handleDefenseChange}
          />
        </div>

        {/* Sp. Attack*/}
        <div className="flex flex-col mr-4">
          <input
            id="SpAttack"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New Sp.Attk Points"
            value={SpAttack}
            onChange={handleSpAttackChange}
          />
        </div>

        {/* Sp. Defense */}
        <div className="flex flex-col mr-4">
          <input
            id="SpDefense"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New Sp.Def Points"
            value={SpDefense}
            onChange={handleSpDefenseChange}
          />
        </div>

        {/* Speed */}
        <div className="flex flex-col mr-4">
          <input
            id="speed"
            type="text"
            className="w-full px-3 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-md focus:outline-none mb-4"
            placeholder="Enter New Speed"
            value={speed}
            onChange={handleSpeedChange}
          />
        </div>

        {/* Generation */}
        <div className="flex flex-col mr-4">
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
          </FormControl>
        </div>

        {/* Filter Submit Button */}

        <div className="flex flex-row mb-4">
          <button
            className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-10 rounded-md mr-4"
            onClick={handleEditSubmit}
          >
            Edit
          </button>

          <button
            className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-md mr-4"
            onClick={handleClearFilter}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokemonEditPage;
