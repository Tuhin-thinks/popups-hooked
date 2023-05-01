import { useRef, useState } from "react";
import useConfirm from "../hooks/confirmHook";
import "./css/listing.css";

const Content = () => {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const { isConfirmed } = useConfirm();
  const itemsCumCountRef = useRef(0);

  const deleteSelected = async () => {
    // confirm delete by asking user
    // if user confirms, delete selected item
    if (selected !== null) {
      const confirmed = await isConfirmed(
        "Are you sure you want to delete this item?",
        { oKLabel: "Yeah boy!", cancelLabel: "Oh no, I am scared!" }
      );
      if (confirmed) setItems(items.filter((item) => item.id !== selected));
    }
  };

  return (
    <div
      style={{
        border: "1px solid black",
        width: "50%",
        margin: "auto",
        padding: "10px",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <div className="toolbar">
        <button
          className="btn"
          onClick={() => {
            setItems([
              ...items,
              {
                id: itemsCumCountRef.current + 1,
                content: `Item ${itemsCumCountRef.current + 1}`,
              },
            ]);
            itemsCumCountRef.current += 1;
          }}
        >
          <span>+</span>
        </button>
        <button className="btn" onClick={deleteSelected}>
          <span>-</span>
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            className={selected === item.id ? "active" : ""}
            key={item.id}
            onClick={() => {
              setSelected(item.id);
            }}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
