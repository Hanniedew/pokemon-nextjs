"use client";
import React, { createContext, useContext, useState } from "react";

interface FilterContextType {
  type1: string;
  type2: string;
  generation: string;
  legendary: string;
  setType1: (type1: string) => void;
  setType2: (type2: string) => void;
  setGeneration: (generation: string) => void;
  setLegendary: (legendary: string) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [generation, setGeneration] = useState("");
  const [legendary, setLegendary] = useState("");

  return (
    <FilterContext.Provider
      value={{
        type1,
        type2,
        generation,
        legendary,
        setType1,
        setType2,
        setGeneration,
        setLegendary,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
