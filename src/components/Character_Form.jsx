import React, { useState } from "react";

const charcter_Creation_Form = () => {
  const [character, setCharacter] = useState({
    name: "",
    class: "",
    race: "",
    states: {
      strength: 0,
      dexterity: 0,
      constitution: 0,
      intelligence: 0,
      wisdom: 0,
      charisma: 0,
    },
  });
};

const handlnputChange = (e) => {
  const { name, value } = e.target;
  setCharacter((prevCharacter) => ({
    ...prevCharacter,
    [name]: value,
  }));
};

const handleStatChange = (statName, value) => {
  setCharacter((prevCharacter) => ({
    ...prevCharacter,
    stats: {
      ...prevCharacter.stats,
      [statName]: value,
    },
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(character);
};

export default charcter_Creation_Form;
