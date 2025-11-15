export default function Summary({ expenses, income }) {
  const totalIncome = income.reduce((sum, i) => sum + i.amount, 0);
  const mandatory = expenses.filter(e => e.type === "Mandatory").reduce((sum, e) => sum + e.amount, 0);
  const optional = expenses.filter(e => e.type === "Optional").reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - (mandatory + optional);

  return (
    <div className="bg-white p-4 rounded shadow space-y-2">
      <h2 className="font-bold">Summary</h2>
      <p>Total Income: KES {totalIncome.toFixed(2)}</p>
      <p>Mandatory Expenses: KES {mandatory.toFixed(2)}</p>
      <p>Optional Expenses: KES {optional.toFixed(2)}</p>
      <p className="font-bold">Balance: KES {balance.toFixed(2)}</p>
    </div>
  );
}

