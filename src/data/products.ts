export type ProductRecipe = {
  name: string;
  outputPerMinute: number;
  building: string;
  ingredients: {
    name: string;
    amountPerMinute: number;
  }[];
};

export const products: ProductRecipe[] = [
  {
    name: "Eisenbarren",
    outputPerMinute: 30,
    building: "Schmelzofen",
    ingredients: [
      { name: "Eisenerz", amountPerMinute: 30 },
    ],
  },

  {
    name: "Eisenplatte",
    outputPerMinute: 20,
    building: "Konstruktor",
    ingredients: [
      { name: "Eisenbarren", amountPerMinute: 30 },
    ],
  },

  {
    name: "Eisenstange",
    outputPerMinute: 15,
    building: "Konstruktor",
    ingredients: [
      { name: "Eisenbarren", amountPerMinute: 15 },
    ],
  },

  {
    name: "Schrauben",
    outputPerMinute: 40,
    building: "Konstruktor",
    ingredients: [
      { name: "Eisenstange", amountPerMinute: 10 },
    ],
  },

  {
    name: "Verstärkte Eisenplatte",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Eisenplatte", amountPerMinute: 30 },
      { name: "Schrauben", amountPerMinute: 60 },
    ],
  },

  {
    name: "Modularer Rahmen",
    outputPerMinute: 2,
    building: "Assembler",
    ingredients: [
      { name: "Verstärkte Eisenplatte", amountPerMinute: 3 },
      { name: "Eisenstange", amountPerMinute: 12 },
    ],
  },

  {
    name: "Kupferbarren",
    outputPerMinute: 30,
    building: "Schmelzofen",
    ingredients: [
      { name: "Kupfererz", amountPerMinute: 30 },
    ],
  },

  {
    name: "Draht",
    outputPerMinute: 30,
    building: "Konstruktor",
    ingredients: [
      { name: "Kupferbarren", amountPerMinute: 15 },
    ],
  },

  {
    name: "Kabel",
    outputPerMinute: 30,
    building: "Konstruktor",
    ingredients: [
      { name: "Draht", amountPerMinute: 60 },
    ],
  },

  {
    name: "Kupferblech",
    outputPerMinute: 10,
    building: "Konstruktor",
    ingredients: [
      { name: "Kupferbarren", amountPerMinute: 20 },
    ],
  },

  {
    name: "Beton",
    outputPerMinute: 15,
    building: "Konstruktor",
    ingredients: [
      { name: "Kalkstein", amountPerMinute: 45 },
    ],
  },

  {
    name: "Rotor",
    outputPerMinute: 4,
    building: "Assembler",
    ingredients: [
      { name: "Eisenstange", amountPerMinute: 20 },
      { name: "Schrauben", amountPerMinute: 100 },
    ],
  },

  {
    name: "Stator",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Stahlrohr", amountPerMinute: 15 },
      { name: "Draht", amountPerMinute: 40 },
    ],
  },

  {
    name: "Motor",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Rotor", amountPerMinute: 10 },
      { name: "Stator", amountPerMinute: 10 },
    ],
  },
  {
    name: "Stahlbarren",
    outputPerMinute: 45,
    building: "Gießerei",
    ingredients: [
      { name: "Eisenerz", amountPerMinute: 45 },
      { name: "Kohle", amountPerMinute: 45 },
    ],
  },

  {
    name: "Stahlträger",
    outputPerMinute: 15,
    building: "Konstruktor",
    ingredients: [
      { name: "Stahlbarren", amountPerMinute: 60 },
    ],
  },

  {
    name: "Stahlrohr",
    outputPerMinute: 20,
    building: "Konstruktor",
    ingredients: [
      { name: "Stahlbarren", amountPerMinute: 30 },
    ],
  },

  {
    name: "Stahlbetonträger",
    outputPerMinute: 6,
    building: "Assembler",
    ingredients: [
      { name: "Stahlträger", amountPerMinute: 18 },
      { name: "Beton", amountPerMinute: 36 },
    ],
  },  {
    name: "Schwerer modularer Rahmen",
    outputPerMinute: 2,
    building: "Hersteller",
    ingredients: [
      { name: "Modularer Rahmen", amountPerMinute: 10 },
      { name: "Stahlrohr", amountPerMinute: 40 },
      { name: "Stahlbetonträger", amountPerMinute: 10 },
      { name: "Schrauben", amountPerMinute: 240 },
    ],
  },

  {
    name: "Kunststoff",
    outputPerMinute: 20,
    building: "Raffinerie",
    ingredients: [
      { name: "Rohöl", amountPerMinute: 30 },
    ],
  },

  {
    name: "Gummi",
    outputPerMinute: 20,
    building: "Raffinerie",
    ingredients: [
      { name: "Rohöl", amountPerMinute: 30 },
    ],
  },

  {
    name: "Leiterplatte",
    outputPerMinute: 7.5,
    building: "Assembler",
    ingredients: [
      { name: "Kupferblech", amountPerMinute: 15 },
      { name: "Kunststoff", amountPerMinute: 30 },
    ],
  },

  {
    name: "KI-Begrenzer",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Kupferblech", amountPerMinute: 25 },
      { name: "Quickwire", amountPerMinute: 100 },
    ],
  },

  {
    name: "Hochgeschwindigkeitsverbinder",
    outputPerMinute: 3.75,
    building: "Hersteller",
    ingredients: [
      { name: "Quickwire", amountPerMinute: 210 },
      { name: "Kabel", amountPerMinute: 37.5 },
      { name: "Leiterplatte", amountPerMinute: 3.75 },
    ],
  },

  {
    name: "Computer",
    outputPerMinute: 2.5,
    building: "Hersteller",
    ingredients: [
      { name: "Leiterplatte", amountPerMinute: 10 },
      { name: "Kabel", amountPerMinute: 20 },
      { name: "Kunststoff", amountPerMinute: 40 },
    ],
  },  {
    name: "Cateriumbarren",
    outputPerMinute: 15,
    building: "Schmelzofen",
    ingredients: [
      { name: "Cateriumerz", amountPerMinute: 45 },
    ],
  },

  {
    name: "Quickwire",
    outputPerMinute: 60,
    building: "Konstruktor",
    ingredients: [
      { name: "Cateriumbarren", amountPerMinute: 12 },
    ],
  },

  {
    name: "Quarzkristall",
    outputPerMinute: 22.5,
    building: "Konstruktor",
    ingredients: [
      { name: "Rohquarz", amountPerMinute: 37.5 },
    ],
  },

  {
    name: "Quarzsand",
    outputPerMinute: 37.5,
    building: "Konstruktor",
    ingredients: [
      { name: "Rohquarz", amountPerMinute: 22.5 },
    ],
  },

  {
    name: "Oszillator",
    outputPerMinute: 1,
    building: "Hersteller",
    ingredients: [
      { name: "Quarzkristall", amountPerMinute: 18 },
      { name: "Kabel", amountPerMinute: 14 },
      { name: "Verstärkte Eisenplatte", amountPerMinute: 2.5 },
    ],
  },  {
    name: "Aluminiumoxidlösung",
    outputPerMinute: 120,
    building: "Raffinerie",
    ingredients: [
      { name: "Bauxit", amountPerMinute: 120 },
      { name: "Wasser", amountPerMinute: 180 },
    ],
  },

  {
    name: "Aluminiumschrott",
    outputPerMinute: 360,
    building: "Raffinerie",
    ingredients: [
      { name: "Aluminiumoxidlösung", amountPerMinute: 240 },
      { name: "Kohle", amountPerMinute: 120 },
    ],
  },

  {
    name: "Aluminiumbarren",
    outputPerMinute: 60,
    building: "Gießerei",
    ingredients: [
      { name: "Aluminiumschrott", amountPerMinute: 90 },
      { name: "Quarzsand", amountPerMinute: 75 },
    ],
  },

  {
    name: "Alclad-Aluminiumblech",
    outputPerMinute: 30,
    building: "Assembler",
    ingredients: [
      { name: "Aluminiumbarren", amountPerMinute: 30 },
      { name: "Kupferbarren", amountPerMinute: 10 },
    ],
  },

  {
    name: "Aluminiumgehäuse",
    outputPerMinute: 60,
    building: "Konstruktor",
    ingredients: [
      { name: "Aluminiumbarren", amountPerMinute: 90 },
    ],
  },  {
    name: "Kühlkörper",
    outputPerMinute: 7.5,
    building: "Assembler",
    ingredients: [
      { name: "Alclad-Aluminiumblech", amountPerMinute: 37.5 },
      { name: "Kupferblech", amountPerMinute: 22.5 },
    ],
  },

  {
    name: "Kühlsystem",
    outputPerMinute: 6,
    building: "Blender",
    ingredients: [
      { name: "Kühlkörper", amountPerMinute: 12 },
      { name: "Gummi", amountPerMinute: 12 },
      { name: "Wasser", amountPerMinute: 30 },
      { name: "Stickstoffgas", amountPerMinute: 150 },
    ],
  },

  {
    name: "Verschmolzener modularer Rahmen",
    outputPerMinute: 1.5,
    building: "Blender",
    ingredients: [
      { name: "Schwerer modularer Rahmen", amountPerMinute: 1.5 },
      { name: "Aluminiumgehäuse", amountPerMinute: 75 },
      { name: "Stickstoffgas", amountPerMinute: 37.5 },
    ],
  },

  {
    name: "Funksteuerungseinheit",
    outputPerMinute: 2.5,
    building: "Hersteller",
    ingredients: [
      { name: "Aluminiumgehäuse", amountPerMinute: 40 },
      { name: "Oszillator", amountPerMinute: 1.25 },
      { name: "Computer", amountPerMinute: 2.5 },
    ],
  },

  {
    name: "Turbomotor",
    outputPerMinute: 1.875,
    building: "Hersteller",
    ingredients: [
      { name: "Kühlsystem", amountPerMinute: 7.5 },
      { name: "Funksteuerungseinheit", amountPerMinute: 3.75 },
      { name: "Motor", amountPerMinute: 7.5 },
      { name: "Gummi", amountPerMinute: 45 },
    ],
  },  {
    name: "Treibstoff",
    outputPerMinute: 40,
    building: "Raffinerie",
    ingredients: [
      { name: "Rohöl", amountPerMinute: 60 },
    ],
  },

  {
    name: "Verdichtete Kohle",
    outputPerMinute: 25,
    building: "Assembler",
    ingredients: [
      { name: "Kohle", amountPerMinute: 25 },
      { name: "Schwefel", amountPerMinute: 25 },
    ],
  },

  {
    name: "Turbotreibstoff",
    outputPerMinute: 18.75,
    building: "Raffinerie",
    ingredients: [
      { name: "Treibstoff", amountPerMinute: 22.5 },
      { name: "Verdichtete Kohle", amountPerMinute: 15 },
    ],
  },

  {
    name: "Salpetersäure",
    outputPerMinute: 30,
    building: "Blender",
    ingredients: [
      { name: "Stickstoffgas", amountPerMinute: 120 },
      { name: "Wasser", amountPerMinute: 30 },
      { name: "Eisenplatte", amountPerMinute: 10 },
    ],
  },

  {
    name: "Raketentreibstoff",
    outputPerMinute: 100,
    building: "Blender",
    ingredients: [
      { name: "Turbotreibstoff", amountPerMinute: 60 },
      { name: "Salpetersäure", amountPerMinute: 10 },
    ],
  },  {
    name: "Smart Plating",
    outputPerMinute: 2,
    building: "Assembler",
    ingredients: [
      { name: "Verstärkte Eisenplatte", amountPerMinute: 2 },
      { name: "Rotor", amountPerMinute: 2 },
    ],
  },

  {
    name: "Versatile Framework",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Modularer Rahmen", amountPerMinute: 2.5 },
      { name: "Stahlträger", amountPerMinute: 30 },
    ],
  },

  {
    name: "Automated Wiring",
    outputPerMinute: 2.5,
    building: "Assembler",
    ingredients: [
      { name: "Stator", amountPerMinute: 2.5 },
      { name: "Kabel", amountPerMinute: 50 },
    ],
  },

  {
    name: "Modular Engine",
    outputPerMinute: 1,
    building: "Hersteller",
    ingredients: [
      { name: "Motor", amountPerMinute: 2 },
      { name: "Gummi", amountPerMinute: 15 },
      { name: "Smart Plating", amountPerMinute: 2 },
    ],
  },

  {
    name: "Adaptive Control Unit",
    outputPerMinute: 1,
    building: "Hersteller",
    ingredients: [
      { name: "Automated Wiring", amountPerMinute: 7.5 },
      { name: "Leiterplatte", amountPerMinute: 5 },
      { name: "Schwerer modularer Rahmen", amountPerMinute: 1 },
      { name: "Computer", amountPerMinute: 1 },
    ],
  },  {
    name: "Schwarzpulver",
    outputPerMinute: 7.5,
    building: "Assembler",
    ingredients: [
      { name: "Kohle", amountPerMinute: 15 },
      { name: "Schwefel", amountPerMinute: 15 },
    ],
  },

  {
    name: "Schwefelsäure",
    outputPerMinute: 50,
    building: "Raffinerie",
    ingredients: [
      { name: "Schwefel", amountPerMinute: 50 },
      { name: "Wasser", amountPerMinute: 50 },
    ],
  },

  {
    name: "Batterie",
    outputPerMinute: 20,
    building: "Blender",
    ingredients: [
      { name: "Schwefelsäure", amountPerMinute: 50 },
      { name: "Aluminiumoxidlösung", amountPerMinute: 40 },
      { name: "Aluminiumgehäuse", amountPerMinute: 20 },
    ],
  },

  {
    name: "Elektromagnetischer Steuerstab",
    outputPerMinute: 4,
    building: "Assembler",
    ingredients: [
      { name: "Stator", amountPerMinute: 6 },
      { name: "KI-Begrenzer", amountPerMinute: 4 },
    ],
  },



  {
    name: "Jodfilter",
    outputPerMinute: 7.5,
    building: "Hersteller",
    ingredients: [
      { name: "Gasfilter", amountPerMinute: 3.75 },
      { name: "Quickwire", amountPerMinute: 30 },
      { name: "Aluminiumgehäuse", amountPerMinute: 3.75 },
    ],
  },

  {
    name: "Gasfilter",
    outputPerMinute: 7.5,
    building: "Hersteller",
    ingredients: [
      { name: "Kohle", amountPerMinute: 37.5 },
      { name: "Gummi", amountPerMinute: 15 },
      { name: "Stoff", amountPerMinute: 15 },
    ],
  },  {
    name: "Eingekapselte Uranzelle",
    outputPerMinute: 25,
    building: "Blender",
    ingredients: [
      { name: "Uran", amountPerMinute: 50 },
      { name: "Beton", amountPerMinute: 15 },
      { name: "Schwefelsäure", amountPerMinute: 40 },
    ],
  },

  {
    name: "Uran-Brennstab",
    outputPerMinute: 0.4,
    building: "Hersteller",
    ingredients: [
      { name: "Eingekapselte Uranzelle", amountPerMinute: 20 },
      { name: "Stahlbetonträger", amountPerMinute: 1.2 },
      { name: "Elektromagnetischer Steuerstab", amountPerMinute: 2 },
    ],
  },  {
    name: "Nicht-spaltbares Uran",
    outputPerMinute: 50,
    building: "Blender",
    ingredients: [
      { name: "Uranabfall", amountPerMinute: 37.5 },
      { name: "Quarzsand", amountPerMinute: 25 },
      { name: "Salpetersäure", amountPerMinute: 15 },
      { name: "Schwefelsäure", amountPerMinute: 15 },
    ],
  },

  {
    name: "Plutoniumpellet",
    outputPerMinute: 30,
    building: "Teilchenbeschleuniger",
    ingredients: [
      { name: "Nicht-spaltbares Uran", amountPerMinute: 100 },
      { name: "Uranabfall", amountPerMinute: 25 },
    ],
  },

  {
    name: "Eingekapselte Plutoniumzelle",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Plutoniumpellet", amountPerMinute: 10 },
      { name: "Beton", amountPerMinute: 20 },
    ],
  },

  {
    name: "Plutonium-Brennstab",
    outputPerMinute: 0.25,
    building: "Hersteller",
    ingredients: [
      { name: "Eingekapselte Plutoniumzelle", amountPerMinute: 7.5 },
      { name: "Stahlträger", amountPerMinute: 4.5 },
      { name: "Elektromagnetischer Steuerstab", amountPerMinute: 1.5 },
      { name: "Kühlkörper", amountPerMinute: 2.5 },
    ],
  },  {
    name: "Reanimiertes SAM",
    outputPerMinute: 30,
    building: "Konstruktor",
    ingredients: [
      { name: "SAM", amountPerMinute: 120 },
    ],
  },

  {
    name: "SAM-Fluktuator",
    outputPerMinute: 10,
    building: "Hersteller",
    ingredients: [
      { name: "Reanimiertes SAM", amountPerMinute: 60 },
      { name: "Draht", amountPerMinute: 50 },
      { name: "Stahlrohr", amountPerMinute: 30 },
    ],
  },

  {
    name: "FICSIT-Barren",
    outputPerMinute: 30,
    building: "Konverter",
    ingredients: [
      { name: "Reanimiertes SAM", amountPerMinute: 60 },
      { name: "Aluminiumbarren", amountPerMinute: 120 },
    ],
  },

  {
    name: "FICSIT-Trigon",
    outputPerMinute: 30,
    building: "Konstruktor",
    ingredients: [
      { name: "FICSIT-Barren", amountPerMinute: 10 },
    ],
  },  {
    name: "Diamanten",
    outputPerMinute: 30,
    building: "Teilchenbeschleuniger",
    ingredients: [
      { name: "Kohle", amountPerMinute: 600 },
    ],
  },

  {
    name: "Zeitkristall",
    outputPerMinute: 6,
    building: "Konverter",
    ingredients: [
      { name: "Diamanten", amountPerMinute: 12 },
    ],
  },

  {
    name: "Dunkle-Materie-Rückstand",
    outputPerMinute: 100,
    building: "Konverter",
    ingredients: [
      { name: "Reanimiertes SAM", amountPerMinute: 50 },
    ],
  },

  {
    name: "Dunkle-Materie-Kristall",
    outputPerMinute: 30,
    building: "Teilchenbeschleuniger",
    ingredients: [
      { name: "Diamanten", amountPerMinute: 30 },
      { name: "Dunkle-Materie-Rückstand", amountPerMinute: 150 },
    ],
  },  {
    name: "Supercomputer",
    outputPerMinute: 1.875,
    building: "Hersteller",
    ingredients: [
      { name: "Computer", amountPerMinute: 3.75 },
      { name: "KI-Begrenzer", amountPerMinute: 3.75 },
      { name: "Hochgeschwindigkeitsverbinder", amountPerMinute: 5.625 },
      { name: "Kunststoff", amountPerMinute: 52.5 },
    ],
  },

  {
    name: "Angeregte photonische Materie",
    outputPerMinute: 200,
    building: "Konverter",
    ingredients: [],
  },

  {
    name: "Superpositionsoszillator",
    outputPerMinute: 5,
    building: "Quantenkodierer",
    ingredients: [
      { name: "Dunkle-Materie-Kristall", amountPerMinute: 30 },
      { name: "Oszillator", amountPerMinute: 5 },
      { name: "Alclad-Aluminiumblech", amountPerMinute: 45 },
      { name: "Angeregte photonische Materie", amountPerMinute: 125 },
    ],
  },

  {
    name: "Neural-Quantum-Prozessor",
    outputPerMinute: 3,
    building: "Quantenkodierer",
    ingredients: [
      { name: "Zeitkristall", amountPerMinute: 15 },
      { name: "Supercomputer", amountPerMinute: 3 },
      { name: "FICSIT-Trigon", amountPerMinute: 45 },
      { name: "Angeregte photonische Materie", amountPerMinute: 75 },
    ],
  },  {
    name: "Kupferpulver",
    outputPerMinute: 50,
    building: "Konstruktor",
    ingredients: [
      { name: "Kupferbarren", amountPerMinute: 300 },
    ],
  },

  {
    name: "Druckumwandlungswürfel",
    outputPerMinute: 1,
    building: "Assembler",
    ingredients: [
      { name: "Verschmolzener modularer Rahmen", amountPerMinute: 1 },
      { name: "Funksteuerungseinheit", amountPerMinute: 2 },
    ],
  },

  {
    name: "Nuclear Pasta",
    outputPerMinute: 0.5,
    building: "Teilchenbeschleuniger",
    ingredients: [
      { name: "Kupferpulver", amountPerMinute: 100 },
      { name: "Druckumwandlungswürfel", amountPerMinute: 0.5 },
    ],
  },

  {
    name: "Assembly Director System",
    outputPerMinute: 0.75,
    building: "Assembler",
    ingredients: [
      { name: "Adaptive Control Unit", amountPerMinute: 1.5 },
      { name: "Supercomputer", amountPerMinute: 0.75 },
    ],
  },

  {
    name: "Magnetic Field Generator",
    outputPerMinute: 1,
    building: "Assembler",
    ingredients: [
      { name: "Versatile Framework", amountPerMinute: 2.5 },
      { name: "Elektromagnetischer Steuerstab", amountPerMinute: 1 },
    ],
  },

  {
    name: "Thermal Propulsion Rocket",
    outputPerMinute: 1,
    building: "Hersteller",
    ingredients: [
      { name: "Modular Engine", amountPerMinute: 2.5 },
      { name: "Turbomotor", amountPerMinute: 1 },
      { name: "Kühlsystem", amountPerMinute: 3 },
      { name: "Verschmolzener modularer Rahmen", amountPerMinute: 1 },
    ],
  },

  {
    name: "Biochemical Sculptor",
    outputPerMinute: 2,
    building: "Blender",
    ingredients: [
      { name: "Assembly Director System", amountPerMinute: 0.5 },
      { name: "FICSIT-Trigon", amountPerMinute: 40 },
      { name: "Wasser", amountPerMinute: 10 },
    ],
  },

  {
    name: "AI Expansion Server",
    outputPerMinute: 4,
    building: "Quantenkodierer",
    ingredients: [
      { name: "Magnetic Field Generator", amountPerMinute: 4 },
      { name: "Neural-Quantum-Prozessor", amountPerMinute: 4 },
      { name: "Superpositionsoszillator", amountPerMinute: 4 },
      { name: "Angeregte photonische Materie", amountPerMinute: 100 },
    ],
  },

  {
    name: "Singularity Cell",
    outputPerMinute: 10,
    building: "Hersteller",
    ingredients: [
      { name: "Nuclear Pasta", amountPerMinute: 1 },
      { name: "Dunkle-Materie-Kristall", amountPerMinute: 20 },
      { name: "Eisenplatte", amountPerMinute: 100 },
      { name: "Beton", amountPerMinute: 200 },
    ],
  },

  {
    name: "Ballistic Warp Drive",
    outputPerMinute: 1,
    building: "Hersteller",
    ingredients: [
      { name: "Thermal Propulsion Rocket", amountPerMinute: 1 },
      { name: "Singularity Cell", amountPerMinute: 5 },
      { name: "Superpositionsoszillator", amountPerMinute: 2 },
      { name: "Dunkle-Materie-Kristall", amountPerMinute: 40 },
    ],
  },  {
    name: "Schwerölrückstand",
    outputPerMinute: 10,
    building: "Raffinerie",
    ingredients: [
      { name: "Rohöl", amountPerMinute: 30 },
    ],
  },

  {
    name: "Petroleumkoks",
    outputPerMinute: 120,
    building: "Raffinerie",
    ingredients: [
      { name: "Schwerölrückstand", amountPerMinute: 40 },
    ],
  },

  {
    name: "Leerer Kanister",
    outputPerMinute: 60,
    building: "Konstruktor",
    ingredients: [
      { name: "Kunststoff", amountPerMinute: 30 },
    ],
  },

  {
    name: "Leerer Flüssigkeitstank",
    outputPerMinute: 60,
    building: "Konstruktor",
    ingredients: [
      { name: "Aluminiumbarren", amountPerMinute: 60 },
    ],
  },

  {
    name: "Verpacktes Wasser",
    outputPerMinute: 60,
    building: "Verpacker",
    ingredients: [
      { name: "Wasser", amountPerMinute: 60 },
      { name: "Leerer Kanister", amountPerMinute: 60 },
    ],
  },

  {
    name: "Verpackter Treibstoff",
    outputPerMinute: 40,
    building: "Verpacker",
    ingredients: [
      { name: "Treibstoff", amountPerMinute: 40 },
      { name: "Leerer Kanister", amountPerMinute: 40 },
    ],
  },

  {
    name: "Verpackter Turbotreibstoff",
    outputPerMinute: 20,
    building: "Verpacker",
    ingredients: [
      { name: "Turbotreibstoff", amountPerMinute: 20 },
      { name: "Leerer Kanister", amountPerMinute: 20 },
    ],
  },

  {
    name: "Verpackter Stickstoff",
    outputPerMinute: 60,
    building: "Verpacker",
    ingredients: [
      { name: "Stickstoffgas", amountPerMinute: 240 },
      { name: "Leerer Flüssigkeitstank", amountPerMinute: 60 },
    ],
  },

  {
    name: "Verpackte Salpetersäure",
    outputPerMinute: 30,
    building: "Verpacker",
    ingredients: [
      { name: "Salpetersäure", amountPerMinute: 30 },
      { name: "Leerer Flüssigkeitstank", amountPerMinute: 30 },
    ],
  },

  {
    name: "Verpackter Raketentreibstoff",
    outputPerMinute: 60,
    building: "Verpacker",
    ingredients: [
      { name: "Raketentreibstoff", amountPerMinute: 120 },
      { name: "Leerer Flüssigkeitstank", amountPerMinute: 60 },
    ],
  },  {
    name: "Rauchloses Pulver",
    outputPerMinute: 20,
    building: "Raffinerie",
    ingredients: [
      { name: "Schwarzpulver", amountPerMinute: 20 },
      { name: "Schwerölrückstand", amountPerMinute: 10 },
    ],
  },

  {
    name: "Nobelisk",
    outputPerMinute: 10,
    building: "Assembler",
    ingredients: [
      { name: "Schwarzpulver", amountPerMinute: 20 },
      { name: "Stahlrohr", amountPerMinute: 20 },
    ],
  },

  {
    name: "Cluster-Nobelisk",
    outputPerMinute: 2.5,
    building: "Assembler",
    ingredients: [
      { name: "Nobelisk", amountPerMinute: 7.5 },
      { name: "Rauchloses Pulver", amountPerMinute: 10 },
    ],
  },

  {
    name: "Impuls-Nobelisk",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Nobelisk", amountPerMinute: 5 },
      { name: "Oszillator", amountPerMinute: 1 },
    ],
  },

  {
    name: "Gas-Nobelisk",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Nobelisk", amountPerMinute: 5 },
      { name: "Biomasse", amountPerMinute: 50 },
    ],
  },

  {
    name: "Nuke-Nobelisk",
    outputPerMinute: 0.5,
    building: "Hersteller",
    ingredients: [
      { name: "Nobelisk", amountPerMinute: 2.5 },
      { name: "Eingekapselte Uranzelle", amountPerMinute: 10 },
      { name: "Rauchloses Pulver", amountPerMinute: 5 },
      { name: "KI-Begrenzer", amountPerMinute: 3 },
    ],
  },

  {
    name: "Gewehrmunition",
    outputPerMinute: 75,
    building: "Assembler",
    ingredients: [
      { name: "Kupferblech", amountPerMinute: 15 },
      { name: "Rauchloses Pulver", amountPerMinute: 10 },
    ],
  },

  {
    name: "Turbo-Gewehrmunition",
    outputPerMinute: 250,
    building: "Blender",
    ingredients: [
      { name: "Gewehrmunition", amountPerMinute: 125 },
      { name: "Aluminiumgehäuse", amountPerMinute: 15 },
      { name: "Turbotreibstoff", amountPerMinute: 15 },
    ],
  },  {
    name: "Eisen-Armierstachel",
    outputPerMinute: 15,
    building: "Konstruktor",
    ingredients: [
      { name: "Eisenstange", amountPerMinute: 15 },
    ],
  },

  {
    name: "Schock-Armierstachel",
    outputPerMinute: 10,
    building: "Assembler",
    ingredients: [
      { name: "Eisen-Armierstachel", amountPerMinute: 10 },
      { name: "Quickwire", amountPerMinute: 50 },
    ],
  },

  {
    name: "Splitter-Armierstachel",
    outputPerMinute: 5,
    building: "Assembler",
    ingredients: [
      { name: "Eisen-Armierstachel", amountPerMinute: 10 },
      { name: "Quarzkristall", amountPerMinute: 15 },
    ],
  },

  {
    name: "Explosions-Armierstachel",
    outputPerMinute: 5,
    building: "Hersteller",
    ingredients: [
      { name: "Eisen-Armierstachel", amountPerMinute: 10 },
      { name: "Rauchloses Pulver", amountPerMinute: 10 },
      { name: "Stahlrohr", amountPerMinute: 10 },
    ],
  },  {
    name: "Verpacktes Rohöl",
    outputPerMinute: 30,
    building: "Verpacker",
    ingredients: [
      { name: "Rohöl", amountPerMinute: 30 },
      { name: "Leerer Kanister", amountPerMinute: 30 },
    ],
  },

  {
    name: "Verpackter Schwerölrückstand",
    outputPerMinute: 30,
    building: "Verpacker",
    ingredients: [
      { name: "Schwerölrückstand", amountPerMinute: 30 },
      { name: "Leerer Kanister", amountPerMinute: 30 },
    ],
  },

  {
    name: "Flüssiger Biobrennstoff",
    outputPerMinute: 60,
    building: "Raffinerie",
    ingredients: [
      { name: "Festbrennstoff", amountPerMinute: 90 },
      { name: "Wasser", amountPerMinute: 45 },
    ],
  },

  {
    name: "Verpackter flüssiger Biobrennstoff",
    outputPerMinute: 40,
    building: "Verpacker",
    ingredients: [
      { name: "Flüssiger Biobrennstoff", amountPerMinute: 40 },
      { name: "Leerer Kanister", amountPerMinute: 40 },
    ],
  },

  {
    name: "Ionisierter Treibstoff",
    outputPerMinute: 40,
    building: "Raffinerie",
    ingredients: [
      { name: "Raketentreibstoff", amountPerMinute: 40 },
      { name: "Power Shard", amountPerMinute: 2.5 },
    ],
  },

  {
    name: "Verpackter ionisierter Treibstoff",
    outputPerMinute: 40,
    building: "Verpacker",
    ingredients: [
      { name: "Ionisierter Treibstoff", amountPerMinute: 80 },
      { name: "Leerer Flüssigkeitstank", amountPerMinute: 40 },
    ],
  },

  {
    name: "Ficsonium",
    outputPerMinute: 10,
    building: "Teilchenbeschleuniger",
    ingredients: [
      { name: "Plutoniumabfall", amountPerMinute: 10 },
      { name: "Singularity Cell", amountPerMinute: 10 },
      { name: "Dunkle-Materie-Rückstand", amountPerMinute: 200 },
    ],
  },

  {
    name: "Ficsonium-Brennstab",
    outputPerMinute: 2.5,
    building: "Quantenkodierer",
    ingredients: [
      { name: "Ficsonium", amountPerMinute: 5 },
      { name: "Elektromagnetischer Steuerstab", amountPerMinute: 5 },
      { name: "FICSIT-Trigon", amountPerMinute: 100 },
      { name: "Angeregte photonische Materie", amountPerMinute: 50 },
    ],
  },  

  {
    name: "Verpackte Schwefelsäure",
    outputPerMinute: 40,
    building: "Verpacker",
    ingredients: [
      { name: "Schwefelsäure", amountPerMinute: 40 },
      { name: "Leerer Kanister", amountPerMinute: 40 },
    ],
  },

   {
    name: "Power Shard",
    outputPerMinute: 10,
    building: "Quantenkodierer",
    ingredients: [
      { name: "Zeitkristall", amountPerMinute: 10 },
      { name: "Dunkle-Materie-Kristall", amountPerMinute: 10 },
      { name: "Quarzkristall", amountPerMinute: 60 },
    ],
  },
    {
    name: "Verpackte Aluminiumoxidlösung",
    outputPerMinute: 120,
    building: "Verpacker",
    ingredients: [
      { name: "Aluminiumoxidlösung", amountPerMinute: 120 },
      { name: "Leerer Kanister", amountPerMinute: 120 },
    ],
  },  {
    name: "Polymerharz",
    outputPerMinute: 30,
    building: "Raffinerie",
    ingredients: [
      { name: "Rohöl", amountPerMinute: 60 },
    ],
  },  {
    name: "Alien-DNA-Kapsel",
    outputPerMinute: 10,
    building: "Konstruktor",
    ingredients: [
      { name: "Alien-Protein", amountPerMinute: 10 },
    ],
  },

  {
    name: "Zielsuchende Gewehrmunition",
    outputPerMinute: 25,
    building: "Assembler",
    ingredients: [
      { name: "Gewehrmunition", amountPerMinute: 50 },
      { name: "Hochgeschwindigkeitsverbinder", amountPerMinute: 2.5 },
    ],
  },];