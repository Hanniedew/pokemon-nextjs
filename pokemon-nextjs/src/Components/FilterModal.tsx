import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { useState, ChangeEvent } from "react";
import { useFilterContext } from "../Contexts/FilterContext";

function FilterModal() {
  // const [name, setName] = useState("");
  // const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  // const [type1, setType1] = useState("");
  // const handleType1Change = (event: SelectChangeEvent) => {
  //   setType1(event.target.value);
  // };

  // const [type2, setType2] = useState("");
  // const handleType2Change = (event: SelectChangeEvent) => {
  //   setType2(event.target.value);
  // };

  // const [generation, setGeneration] = useState("");
  // const handleGenChange = (event: SelectChangeEvent) => {
  //   setGeneration(event.target.value);
  // };

  // const [legendary, setLegendary] = useState("");
  // const handleLegendaryChange = (event: SelectChangeEvent) => {
  //   setLegendary(event.target.value);
  // };
  const {
    type1,
    setType1,
    type2,
    setType2,
    generation,
    setGeneration,
    legendary,
    setLegendary,
  } = useFilterContext();

  const handleType1Change = (event: SelectChangeEvent) => {
    setType1(event.target.value);
  };

  const handleType2Change = (event: SelectChangeEvent) => {
    setType2(event.target.value);
  };

  const handleGenChange = (event: SelectChangeEvent) => {
    setGeneration(event.target.value);
  };

  const handleLegendaryChange = (event: SelectChangeEvent) => {
    setLegendary(event.target.value);
  };

  const handleFilterSubmit = () => {
    console.log("Filtering Pokémon");
    console.log("Type 1: " + type1);
    console.log("Type 2: " + type2);
    console.log("Generation: " + generation);
    console.log("Legendary: " + legendary);
  };

  const handleClearFilter = () => {
    setType1("");
    setType2("");
    setGeneration("");
    setLegendary("");
  };

  return (
    <div className="relative">
      <div className="mt-10">
        <div className="text-lg font-bold mb-6 text-center">Filter Pokémon</div>
        {/* Container to hold filter criterion */}
        <div className="flex flex-col sm:flex-row">
          {/* Type 1 */}
          <div className="flex flex-col mr-4">
            <label className="text-gray-700 ml-3">Type 1:</label>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={type1}
                onChange={handleType1Change}
                displayEmpty
                sx={{ height: "40px", width: "150px" }}
              >
                <MenuItem value="">
                  <em>Please select</em>
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
            <label className="text-gray-700 ml-3">Type 2:</label>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={type2}
                onChange={handleType2Change}
                displayEmpty
                sx={{ height: "40px", width: "150px" }}
              >
                <MenuItem value="">
                  <em>Please select</em>
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

          {/* Generation */}
          <div className="flex flex-col mr-6">
            <label className="text-gray-700 ml-3">Generation:</label>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={generation}
                onChange={handleGenChange}
                displayEmpty
                sx={{ height: "40px", width: "150px" }}
              >
                <MenuItem value="">
                  <em>Please select</em>
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
          <div className="flex flex-col mr-6">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Legendary
              </FormLabel>
              <RadioGroup
                aria-labelledby="legendary-radio-buttons-group-label"
                name="legendary-radio-buttons-group"
                value={legendary}
                onChange={handleLegendaryChange}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="False"
                />
              </RadioGroup>
            </FormControl>
          </div>

          {/* Filter Submit Buttong */}

          <div className="flex flex-col">
            <div className="flex flex-col">
              <button
                className="bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md mt-2"
                onClick={handleFilterSubmit}
              >
                Apply
              </button>
            </div>

            <div className="flex flex-col">
              <button
                className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-md mt-2"
                onClick={handleClearFilter}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 w-full mt-6"></div>{" "}
        {/* Horizontal line */}
      </div>
    </div>
  );
}
export default FilterModal;
