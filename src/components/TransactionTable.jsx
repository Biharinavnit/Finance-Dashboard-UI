import { useState } from "react";

const TransactionTable = ({ data }) => {
  const [search, setSearch] = useState("");

  const filtered = data.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white shadow-lg rounded-xl p-4">
      
      {/* Search */}
      <input
        placeholder="Search category..."
        className="border rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-center">No Transactions Found</p>
      ) : (
        <table className="w-full text-left border-collapse">
          
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">Date</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Category</th>
              <th className="p-3">Type</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((t, index) => (
              <tr
                key={t.id}
                className={`border-b hover:bg-gray-50 ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
              >
                <td className="p-3">{t.date}</td>

                <td className="p-3 font-semibold">
                  ₹{t.amount}
                </td>

                <td className="p-3">{t.category}</td>

                <td
                  className={`p-3 font-medium ${
                    t.type === "income"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {t.type}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      )}
    </div>
  );
};

export default TransactionTable;