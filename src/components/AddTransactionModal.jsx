import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

const AddTransactionModal = ({ isOpen, setIsOpen }) => {
  const { transactions, setTransactions } = useContext(FinanceContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = () => {
    if (!form.date || !form.amount || !form.category) return;

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([...transactions, newTransaction]);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      
      <div className="bg-white p-6 rounded-xl shadow-lg w-80 space-y-3">
        
        <h2 className="text-lg font-bold">Add Transaction</h2>

        <input
          type="date"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />

        <input
          type="text"
          placeholder="Category"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <select
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex justify-between">
          <button
            className="bg-gray-400 text-white px-3 py-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>

          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddTransactionModal;