import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import { useState } from 'react';

function FilterModal() {

  const [type1, setType1] = useState('');

  const handleType1Change = (event: SelectChangeEvent) => {
    setType1(event.target.value);
  };

  const [type2, setType2] = useState('');

  const handleType2Change = (event: SelectChangeEvent) => {
    setType2(event.target.value);
  };

  const [generation, setGeneration] = useState('');

  const handleGenChange = (event: SelectChangeEvent) => {
    setGeneration(event.target.value);
  };
  return (
   
    <div className="relative">
      <div className="mt-10">
        
        <div className="text-lg font-bold mb-6 text-center">Filter Pokémon</div>
        {/* Container to hold filter criterion */}

        {/* Pokémon name */}
        <div className="flex flex-row"> 
          <div className="flex flex-col mr-4">
            <label className="text-gray-700 mb-2 ml-3">Pokémon name:</label>
            <input
              id="pokemonName"
              type="text"
              className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 rounded-full focus:outline-none"
              placeholder="Enter Pokémon name"
            />
          </div>

        {/* Type 1 */}
          <div className="flex flex-col mr-4">
            <label className="text-gray-700 ml-3">Type 1:</label>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={type1}
                onChange={handleType1Change}
                displayEmpty
                sx={{ height: '40px', width: '150px' }}
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                <MenuItem value={1}>Ice</MenuItem>
                <MenuItem value={2}>Water</MenuItem>
                <MenuItem value={3}>Grass</MenuItem>
                <MenuItem value={4}>Dragon</MenuItem>
                <MenuItem value={5}>Fairy</MenuItem>
                <MenuItem value={6}>Electric</MenuItem>
                <MenuItem value={7}>Normal</MenuItem>
                <MenuItem value={8}>Physic</MenuItem>
                <MenuItem value={9}>Bug</MenuItem>
                <MenuItem value={10}>Fire</MenuItem>
                <MenuItem value={11}>Poison</MenuItem>
                <MenuItem value={12}>Steel</MenuItem>
                <MenuItem value={13}>Fighting</MenuItem>
                <MenuItem value={14}>Flying</MenuItem>
                <MenuItem value={15}>Dark</MenuItem>
                <MenuItem value={16}>Ground</MenuItem>
                <MenuItem value={17}>Ghost</MenuItem>
                <MenuItem value={18}>Rock</MenuItem>
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
                sx={{ height: '40px', width: '150px' }}
              >
                <MenuItem value="">
                  <em>Please select</em>
                </MenuItem>
                <MenuItem value={1}>Ice</MenuItem>
                <MenuItem value={2}>Water</MenuItem>
                <MenuItem value={3}>Grass</MenuItem>
                <MenuItem value={4}>Dragon</MenuItem>
                <MenuItem value={5}>Fairy</MenuItem>
                <MenuItem value={6}>Electric</MenuItem>
                <MenuItem value={7}>Normal</MenuItem>
                <MenuItem value={8}>Physic</MenuItem>
                <MenuItem value={9}>Bug</MenuItem>
                <MenuItem value={10}>Fire</MenuItem>
                <MenuItem value={11}>Poison</MenuItem>
                <MenuItem value={12}>Steel</MenuItem>
                <MenuItem value={13}>Fighting</MenuItem>
                <MenuItem value={14}>Flying</MenuItem>
                <MenuItem value={15}>Dark</MenuItem>
                <MenuItem value={16}>Ground</MenuItem>
                <MenuItem value={17}>Ghost</MenuItem>
                <MenuItem value={18}>Rock</MenuItem>
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
                sx={{ height: '40px', width: '150px' }}
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
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Legendary</FormLabel>
            <RadioGroup
              aria-labelledby="legendary-radio-buttons-group-label"
              name="legendary-radio-buttons-group"
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </FormControl>
        
        </div>
        
      </div>
    </div>
     
     
  );
}
export default FilterModal;
