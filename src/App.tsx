import { useState } from "react";

const products = [
  "Eisenplatte",
  "Eisenstange",
  "Schraube",
  "Verstärkte Eisenplatte",
  "Modularer Rahmen",
  "Schwerer Modularer Rahmen",
  "Rotor",
  "Motor",
  "Computer",
];

const beltCapacities: Record<string, number> = {
  "Mk.1": 60,
  "Mk.2": 120,
  "Mk.3": 270,
  "Mk.4": 480,
  "Mk.5": 780,
  "Mk.6": 1200,
};

function App() {
  const [showGameState, setShowGameState] = useState(false);
  const [beltMk, setBeltMk] = useState("Mk.1");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [targetAmount, setTargetAmount] = useState(20);
  const [showResult, setShowResult] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase())
  );

  const result = {
    assemblers: targetAmount / 5,
    plateConstructors: targetAmount * 0.3,
    screwConstructors: targetAmount * 0.3,
    rodConstructors: targetAmount * 0.2,
    smelters: targetAmount * 0.4,
    ironOre: targetAmount * 12,
    ironPlates: targetAmount * 6,
    screws: targetAmount * 12,
    ironRods: targetAmount * 3,
  };

  const beltCapacity = beltCapacities[beltMk];

  const plateBeltsNeeded = Math.ceil(result.ironPlates / beltCapacity);
  const screwBeltsNeeded = Math.ceil(result.screws / beltCapacity);
  const rodBeltsNeeded = Math.ceil(result.ironRods / beltCapacity);

  const formatNumber = (value: number) =>
    Number.isInteger(value) ? value : value.toFixed(2);

  const selectProduct = (product: string) => {
    setSelectedProduct(product);
    setSearch("");
    setShowResult(false);
 setShowGameState(false); };

  const beltText = (amount: number) => {
    const beltsNeeded = Math.ceil(amount / beltCapacity);

    if (beltsNeeded === 1) {
      return `1 Förderband ${beltMk} reicht aus.`;
    }

    return `${beltsNeeded} Förderbänder ${beltMk} werden benötigt.`;
  };

  return (
    <main style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>🏭 Satisfactory Planner</h1>

        <input
          type="text"
          placeholder="🔍 Produkt suchen..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          style={searchStyle}
        />

        {search && (
          <div style={resultsStyle}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <button
                  key={product}
                  style={resultButtonStyle}
                  onClick={() => selectProduct(product)}
                >
                  {product}
                </button>
              ))
            ) : (
              <p style={{ margin: 0 }}>Kein Produkt gefunden.</p>
            )}
          </div>
        )}

        <div style={navigationStyle}>
          <button style={buttonStyle}>📂 Kategorien</button>
          <button style={buttonStyle}>⭐ Favoriten</button>

          <button
            style={buttonStyle}
onClick={() => {
  setShowGameState(!showGameState);
  setSelectedProduct("");
  setSearch("");
  setShowResult(false);
}}          >
            👤 Mein Spielstand
          </button>

          <button style={buttonStyle}>⚙️ Einstellungen</button>
        </div>

        {showGameState && (
          <section style={panelStyle}>
            <h2 style={sectionTitleStyle}>👤 Mein Spielstand</h2>

            <label style={labelStyle}>
              Höchstes Förderband
              <select
                style={selectStyle}
                value={beltMk}
                onChange={(event) => setBeltMk(event.target.value)}
              >
                <option>Mk.1</option>
                <option>Mk.2</option>
                <option>Mk.3</option>
                <option>Mk.4</option>
                <option>Mk.5</option>
                <option>Mk.6</option>
              </select>
            </label>

            <label style={labelStyle}>
              Höchster Miner
              <select style={selectStyle}>
                <option>Mk.1</option>
                <option>Mk.2</option>
                <option>Mk.3</option>
              </select>
            </label>

            <label style={labelStyle}>
              Höchste Pipeline
              <select style={selectStyle}>
                <option>Mk.1</option>
                <option>Mk.2</option>
              </select>
            </label>

            <label style={labelStyle}>
              Blueprint Designer
              <select style={selectStyle}>
                <option>Noch nicht freigeschaltet</option>
                <option>Mk.1</option>
                <option>Mk.2</option>
                <option>Mk.3</option>
              </select>
            </label>

            <button
              style={buttonStyle}
              onClick={() =>
                alert(`✅ Spielstand gespeichert! Förderband: ${beltMk}`)
              }
            >
              💾 Spielstand speichern
            </button>
          </section>
        )}

        {selectedProduct && (
          <section style={panelStyle}>
            <h2 style={sectionTitleStyle}>⚙️ {selectedProduct}</h2>

            {selectedProduct === "Verstärkte Eisenplatte" ? (
              <>
                <label style={labelStyle}>
                  Gewünschte Menge pro Minute
                  <input
                    type="number"
                    min="0"
                    value={targetAmount}
                    onChange={(event) => {
                      setTargetAmount(Number(event.target.value));
                      setShowResult(false);
                    }}
                    style={numberInputStyle}
                  />
                </label>

                <button
                  style={buttonStyle}
                  onClick={() => setShowResult(true)}
                >
                  🧮 Berechnen
                </button>

                {showResult && (
                  <div style={calculationStyle}>
                    <h3 style={resultTitleStyle}>
                      {formatNumber(targetAmount)} verstärkte Eisenplatten/min
                    </h3>

                    <h3 style={subTitleStyle}>⛏️ Rohstoffbedarf</h3>

                    <div style={itemCardStyle}>
                      <strong>Eisenerz</strong>
                      <p>
                        Benötigt:{" "}
                        <strong>
                          {formatNumber(result.ironOre)}/min
                        </strong>
                      </p>

<p>
  Dein aktuelles Förderband:{" "}
  <strong>
    {beltMk} ({beltCapacity}/min)
  </strong>
</p>

<p>
  ✅ {beltText(result.ironOre)} von den Erzvorkommen zu den{" "}
  <strong>{formatNumber(result.smelters)}</strong> Schmelzöfen.
</p>
</div>
                    <h3 style={subTitleStyle}>🏭 Endprodukt</h3>

                    <div style={itemCardStyle}>
                    <p><strong>Gebäude</strong></p>
                    <p>
                        Assembler:{" "}
                        <strong>{formatNumber(result.assemblers)}</strong>
                      </p>
                      <p><strong>Produktion</strong></p>

<p>
  <strong>{formatNumber(targetAmount)}</strong> Verstärkte Eisenplatten/min
</p>
</div>

                    <h3 style={subTitleStyle}>📦 Zwischenprodukte</h3>

                    <div style={itemCardStyle}>
                      <strong>Eisenplatten</strong>
                      <p>
                        Benötigt:{" "}
                        <strong>
                          {formatNumber(result.ironPlates)}/min
                        </strong>
                      </p>
                      <p>
                        Konstruktoren:{" "}
                        <strong>
                          {formatNumber(result.plateConstructors)}
                        </strong>
                      </p>
                      <p>
                        Dein aktuelles Förderband:{" "}
                        <strong>
                          {beltMk} ({beltCapacity}/min)
                        </strong>
                      </p>
                      <p>
                       <p>
  <p>
  ✅{" "}
  {plateBeltsNeeded === 1
    ? `1 Förderband-Linie ${beltMk} wird von den Eisenplatten-Konstruktoren zu den Assemblern benötigt.`
    : `${plateBeltsNeeded} Förderband-Linien ${beltMk} werden von den Eisenplatten-Konstruktoren zu den Assemblern benötigt.`}
</p>
</p>
                      </p>
                    </div>

                    <div style={itemCardStyle}>
                      <strong>Schrauben</strong>
                      <p>
                        Benötigt:{" "}
                        <strong>{formatNumber(result.screws)}/min</strong>
                      </p>
                      <p>
                        Konstruktoren:{" "}
                        <strong>
                          {formatNumber(result.screwConstructors)}
                        </strong>
                      </p>
                      <p>
                        Dein aktuelles Förderband:{" "}
                        <strong>
                          {beltMk} ({beltCapacity}/min)
                        </strong>
                      </p>
                      <p></p>
                        <p>
 <p>
  ✅{" "}
  {screwBeltsNeeded === 1
    ? `1 Förderband-Linie ${beltMk} wird von den Schrauben-Konstruktoren zu den Assemblern benötigt.`
    : `${screwBeltsNeeded} Förderband-Linien ${beltMk} werden von den Schrauben-Konstruktoren zu den Assemblern benötigt.`}
</p>
                      </p>
                    </div>

                    <div style={itemCardStyle}>
                      <strong>Eisenstangen</strong>
                      <p>
                        Benötigt:{" "}
                        <strong>
                          {formatNumber(result.ironRods)}/min
                        </strong>
                      </p>
                      <p>
                        Konstruktoren:{" "}
                        <strong>
                          {formatNumber(result.rodConstructors)}
                        </strong>
                      </p>
                      <p>
                        Dein aktuelles Förderband:{" "}
                        <strong>
                          {beltMk} ({beltCapacity}/min)
                        </strong>
                      </p>
                      <p>
                       <p>
  ✅{" "}
  {rodBeltsNeeded === 1
    ? `1 Förderband-Linie ${beltMk} wird von den Eisenstangen-Konstruktoren zu den Schrauben-Konstruktoren benötigt.`
    : `${rodBeltsNeeded} Förderband-Linien ${beltMk} werden von den Eisenstangen-Konstruktoren zu den Schrauben-Konstruktoren benötigt.`}
</p>
                      </p>
                    </div>

                    <div style={tipStyle}>
                      <strong>💡 Wird später benötigt für:</strong>

                      <button
                        style={linkButtonStyle}
                        onClick={() => selectProduct("Modularer Rahmen")}
                      >
                        Modularer Rahmen →
                      </button>

                      <button
                        style={linkButtonStyle}
                        onClick={() => selectProduct("Smart Plating")}
                      >
                        Smart Plating →
                      </button>

                      <p style={{ marginBottom: 0 }}>
                        Überschüsse kannst du vorübergehend im AWESOME Sink
                        verwerten und später für Folgeprodukte verwenden.
                      </p>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <p>
                Die Berechnung für <strong>{selectedProduct}</strong> wird
                später ergänzt.
              </p>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#202225",
  color: "#ffffff",
  fontFamily: "Arial, sans-serif",
  padding: "24px",
};

const contentStyle = {
  maxWidth: "900px",
  margin: "0 auto",
};

const titleStyle = {
  color: "#ff9800",
};

const sectionTitleStyle = {
  marginTop: 0,
  color: "#ff9800",
};

const resultTitleStyle = {
  color: "#ffffff",
  fontSize: "22px",
};

const subTitleStyle = {
  color: "#ffb74d",
  marginTop: "26px",
};

const searchStyle = {
  width: "100%",
  padding: "14px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  marginBottom: "12px",
};

const navigationStyle = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: "10px",
  marginTop: "18px",
};

const buttonStyle = {
  padding: "12px 18px",
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#ff9800",
  color: "#111111",
  cursor: "pointer",
};

const panelStyle = {
  marginTop: "20px",
  padding: "20px",
  borderRadius: "12px",
  backgroundColor: "#2b2e33",
  border: "1px solid #44484f",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  marginBottom: "16px",
};

const selectStyle = {
  padding: "12px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid #555b63",
  backgroundColor: "#181a1d",
  color: "#ffffff",
};

const numberInputStyle = {
  padding: "12px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "1px solid #555b63",
};

const resultsStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
  padding: "12px",
  borderRadius: "10px",
  backgroundColor: "#2b2e33",
  border: "1px solid #44484f",
};

const resultButtonStyle = {
  padding: "12px",
  textAlign: "left" as const,
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#181a1d",
  color: "#ffffff",
  cursor: "pointer",
};

const calculationStyle = {
  marginTop: "20px",
  paddingTop: "4px",
  borderTop: "1px solid #555b63",
};

const itemCardStyle = {
  marginTop: "12px",
  padding: "14px",
  borderRadius: "10px",
  backgroundColor: "#181a1d",
  border: "1px solid #44484f",
};

const tipStyle = {
  marginTop: "24px",
  padding: "16px",
  borderRadius: "10px",
  backgroundColor: "#181a1d",
};

const linkButtonStyle = {
  display: "block",
  marginTop: "10px",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  color: "#ffb74d",
  fontSize: "16px",
  cursor: "pointer",
};

export default App;