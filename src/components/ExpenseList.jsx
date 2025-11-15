export default function ExpenseList({ expenses, onDelete }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Expenses</h2>
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses yet.</p>
      ) : (
        <ul className="divide-y">
          {expenses.map((e) => (
            <li key={e.id} className="flex justify-between py-2">
              <span>{e.item} ({e.type})</span>
              <div className="flex gap-3">
                <span>KES {e.amount.toFixed(2)}</span>
                <button onClick={() => onDelete(e.id)} className="text-red-600">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

