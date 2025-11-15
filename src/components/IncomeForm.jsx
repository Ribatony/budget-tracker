import { useState } from "react";

export default function IncomeForm({ onAdd }) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!source || !amount) return;
    onAdd({
      id: crypto.randomUUID(),
      source,
      amount: parseFloat(amount),
      date: new Date().toISOString().slice(0, 10),
    });
    setSource("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <input
        type="text"
        placeholder="Income source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Amount (KES)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button className="bg-green-600 text-white p-2 rounded w-full">Add Income</button>
    </form>
  );
}

