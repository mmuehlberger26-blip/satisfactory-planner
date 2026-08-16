import { useState } from "react";
import "./App.css";
import { products } from "./data/products";
import MyFactories from "./MyFactories";
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
  const [showFactories, setShowFactories] = useState(false);
  const [beltMk, setBeltMk] = useState("Mk.1");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [targetAmount, setTargetAmount] = useState(20);
  const [showResult, setShowResult] = useState(false);
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null);
const [expandedSubIngredients, setExpandedSubIngredients] = useState<string[]>([]);  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
const [availableProducts, setAvailableProducts] = useState<Record<string, number>>({});
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
 setShowGameState(false);
 setShowFactories(false);};

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
                  key={product.name}
                  style={resultButtonStyle}
                  onClick={() => selectProduct(product.name)}
                >
                  {product.name}
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
<button
  style={buttonStyle}
  onClick={() => {
    setShowFactories(!showFactories);
    setShowGameState(false);
    setSelectedProduct("");
    setSearch("");
    setShowResult(false);
  }}
>
  🏭 Meine Fabriken
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
{showFactories && (
  <section style={panelStyle}>
    <MyFactories
      availableProducts={availableProducts}
      setAvailableProducts={setAvailableProducts}
    />
  </section>
)}
        {selectedProduct && (
          <section style={panelStyle}>
            <h2 style={sectionTitleStyle}>⚙️ {selectedProduct}</h2>

{false ? (              <>
                <label style={labelStyle}>
                  Gewünschte Menge pro Minute
                  <input
                    type="number"
                    min="0"
                    value={targetAmount}
                    onChange={(event) => {
  setTargetAmount(Number(event.target.value));
  setShowResult(true);
}}
                    style={numberInputStyle}
                  />
                </label>


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
  (() => {
    const recipe = products.find(
      (product) => product.name === selectedProduct
    );

    if (!recipe) {
      return <p>Für dieses Produkt wurde kein Rezept gefunden.</p>;
    }

    const factor = targetAmount / recipe.outputPerMinute;
    const machines = factor;

    return (
<div style={calculationStyle}>        <h3 style={resultTitleStyle}>📦 {recipe.name}</h3>
<hr style={{ border: "none", borderTop: "1px solid #555", margin: "12px 0 18px" }} />
<label style={labelStyle}>
  Gewünschte Menge pro Minute
  <input
    type="number"
    min="0.01"
    step="0.01"
value={targetAmount === 0 ? "" : targetAmount}    onChange={(event) => setTargetAmount(Number(event.target.value))}
    style={searchStyle}
  />
</label><p style={itemCardStyle}>
          🏭 Benötigte Gebäude:{" "}
          <strong>
            {formatNumber(machines)} × {recipe.building}
          </strong>
        </p>
       

<h3 style={subTitleStyle}>📊 Projektübersicht</h3>
<div className="project-overview" style={itemCardStyle}>  <div className="project-header"
    style={{
      display: "grid",
gridTemplateColumns: "minmax(180px, 1.6fr) 100px 110px 80px",
gap: "12px",    }}
  >
    <span>Produkt</span>
    <span>Benötigt</span>
    <span>Vorhanden</span>
<span>Fehlt</span>  </div>

  {recipe.ingredients.map((ingredient) => {
    const amount = ingredient.amountPerMinute * factor;
    const available = availableProducts[ingredient.name] ?? 0;
const missing = Math.max(0, amount - available);

    return (
      <div
  className="project-row"
        key={ingredient.name}
        style={{
          display: "grid",
gridTemplateColumns: "minmax(180px, 1.6fr) 100px 110px 80px",gap: "12px",        }}
      >
<span className="project-name">{ingredient.name}</span>
<span className="project-needed">
  <span className="mobile-label">Benötigt: </span>
  {formatNumber(amount)}
</span>
<span className="project-owned">
  <span className="mobile-label">Vorhanden: </span>
  {formatNumber(available)}
</span>
<span className="project-missing">
  <span className="mobile-label">Fehlt: </span>
  {formatNumber(missing)}
</span>      </div>
    );
  })}
</div>
<h3 style={subTitleStyle}>📦 Benötigte Zutaten</h3>
        {recipe.ingredients.length === 0 ? (
          <p>Keine Eingangsmaterialien benötigt.</p>
        ) : (
          recipe.ingredients.map((ingredient) => {
            const amount = ingredient.amountPerMinute * factor;
const ingredientRecipe = products.find((product) => product.name === ingredient.name);
            return (
<div key={ingredient.name} style={itemCardStyle}>                <strong>{ingredient.name}</strong>:{" "}
                {formatNumber(amount)} / min
                <div>{beltText(amount)}</div>
              {ingredientRecipe && (
  <button
    style={linkButtonStyle}
onClick={() =>
  setExpandedIngredient(
    expandedIngredient === ingredient.name ? null : ingredient.name
  )
}  >
    {expandedIngredient === ingredient.name
  ? "← Produktionskette zuklappen"
  : "Produktionskette anzeigen →"} →
  </button>
)}{expandedIngredient === ingredient.name && ingredientRecipe && (
  <div style={{ marginTop: "10px", paddingLeft: "12px" }}>
    <strong>
      🏭 {formatNumber(amount / ingredientRecipe.outputPerMinute)} × {ingredientRecipe.building}
    </strong>

    {ingredientRecipe.ingredients.map((subIngredient) => (
      <div
  key={subIngredient.name}
  style={{
    marginTop: "8px",
    padding: "10px 12px",
    border: "1px solid #555",
    borderRadius: "8px",
    backgroundColor: "#252a30",
  }}
>
        ↳ {subIngredient.name}:{" "}
        <strong>
          {formatNumber(
            subIngredient.amountPerMinute *
              (amount / ingredientRecipe.outputPerMinute)
          )}{" "}
          / min
        </strong>
        <div
  style={{
    marginTop: "6px",
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    fontSize: "16px",
  }}
>
  <span>
    Benötigt:{" "}
    <strong style={{ color: "#66bb6a" }}>
      {formatNumber(
        subIngredient.amountPerMinute *
          (amount / ingredientRecipe.outputPerMinute)
      )}
    </strong>
  </span>

  <span>
    Vorhanden:{" "}
    <strong style={{ color: "#42a5f5" }}>—</strong>
  </span>

  <span>
    Fehlt:{" "}
    <strong style={{ color: "#ef5350" }}>—</strong>
  </span>
</div>
<button
  style={linkButtonStyle}
  onClick={() =>
    setExpandedSubIngredients((current) =>
      current.includes(subIngredient.name)
        ? current.filter((name) => name !== subIngredient.name)
        : [...current, subIngredient.name]
    )
  }
>
  {expandedSubIngredients.includes(subIngredient.name)
    ? ""
    : "weiter aufklappen →"}
</button>
 {expandedSubIngredients.includes(subIngredient.name) && (() => { const subRecipe = products.find(
    (product) => product.name === subIngredient.name
  );

  if (!subRecipe) return null;

  const subAmount =
    subIngredient.amountPerMinute *
    (amount / ingredientRecipe.outputPerMinute);

  const subFactor = subAmount / subRecipe.outputPerMinute;

  return (
    <div style={{ marginTop: "8px", paddingLeft: "12px" }}>
      <strong>
        🏭 {formatNumber(subFactor)} × {subRecipe.building}
      </strong>

      {subRecipe.ingredients.map((deepIngredient) => (
<div key={deepIngredient.name} style={{ marginTop: "8px" }}>
  <div>
    ↳ {deepIngredient.name}:{" "}
    <strong>
      {formatNumber(
        deepIngredient.amountPerMinute * subFactor
      )}{" "}
      / min
    </strong>
  </div>

  <div
    style={{
      marginTop: "6px",
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
      fontSize: "16px",
    }}
  >
    <span>
      Benötigt:{" "}
      <strong style={{ color: "#66bb6a" }}>
        {formatNumber(
          deepIngredient.amountPerMinute * subFactor
        )}
      </strong>
    </span>

    <span>
      Vorhanden:{" "}
      <strong style={{ color: "#42a5f5" }}>—</strong>
    </span>

    <span>
      Fehlt:{" "}
      <strong style={{ color: "#ef5350" }}>—</strong>
    </span>
  </div>
</div>      ))}
    <button
  style={linkButtonStyle}
onClick={() =>
  setExpandedSubIngredients((current) =>
    current.filter((name) => name !== subIngredient.name)
  )
}>
  ← wieder zuklappen
</button></div>
  );
})()}</div>
    ))}
  </div>
)}</div>
            );
          })
        )}
      </div>
    );
  })()
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