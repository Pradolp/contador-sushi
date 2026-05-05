export default function SushiItem({ nome, quantidade, onAdd, onRemove }) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "8px"
        }}>
            <span>{nome}: {quantidade}</span>
            <div>
                <button onClick={onRemove}>-1</button>
                <button onClick={onAdd} style={{ marginLeft: "8px" }}>+1</button>
            </div>
        </div>
    );
}