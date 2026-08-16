import { products } from "./data/products";

type Props = {
  availableProducts: Record<string, number>;
  setAvailableProducts: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
};

export default function MyFactories({
  availableProducts,
  setAvailableProducts,
}: Props) {
  const updateAmount = (productName: string, amount: number) => {
    setAvailableProducts((current) => ({
      ...current,
      [productName]: amount,
    }));
  };

  return (
    <section>
      <h2>🏭 Meine Fabriken</h2>

      <p>Hier kannst du eintragen, wie viel du von jedem Produkt bereits pro Minute produzierst.</p>

      <div
        style={{
          display: "grid",
          gap: "10px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              padding: "10px",
              border: "1px solid #44484f",
              borderRadius: "8px",
            }}
          >
            <div style={{ marginBottom: "6px", fontWeight: "bold" }}>
              {product.name}
            </div>

<input
  type="text"
  inputMode="decimal"
  placeholder="0 / min"
  value={`${availableProducts[product.name] ?? 0} / min`}
  onChange={(event) => {
    const number = Number(event.target.value.replace(/[^0-9.,]/g, "").replace(",", "."));
    updateAmount(product.name, Number.isNaN(number) ? 0 : number);
  }}
  onFocus={(event) => event.currentTarget.select()}
  style={{
    width: "100%",
    boxSizing: "border-box",
    padding: "7px",
  }}
/>   </div>     ))}
      </div>
    </section>
  );
}