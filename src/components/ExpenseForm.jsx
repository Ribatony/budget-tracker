import { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [type, setType] = useState("Mandatory");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item || !amount) return;
    onAdd({
      id: crypto.randomUUID(),
      item,
      amount: parseFloat(amount),
      type,
      date: new Date().toISOString().slice(0, 10),
    });
    setItem("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded w-full">
        <option>Mandatory</option>
        <option>Optional</option>
      </select>
      <input
        type="text"
        placeholder="Expense name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Amount (KES)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button className="bg-blue-600 text-white p-2 rounded w-full">Add Expense</button>
    </form>
  );
}

