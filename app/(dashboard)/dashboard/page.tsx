"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  type Item = { id: number; name: string };
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState("");

  // Fetch all items on load
  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data.items));
  }, []);

  // Add item handler
  const addItem = async () => {
    const res = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItemName }),
    });

    const data = await res.json();
    setItems((prev) => [...prev, data.item]);
    setNewItemName("");
  };

  return (
    <div>
      <h1>📦 Item Manager</h1>

      <ul>
        {items.map((item: any) => (
          <li key={item.id}>
            {item.id}. {item.name}
          </li>
        ))}
      </ul>

      <input
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="Enter item name"
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
