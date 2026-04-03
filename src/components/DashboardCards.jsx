const DashboardCards = ({ data }) => {
  const income = data
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = data
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Balance */}
      <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-green-500">
        <h2 className="text-gray-500 text-sm">Total Balance</h2>
        <p className="text-2xl font-bold text-green-600 mt-2">
          ₹{balance}
        </p>
      </div>

      {/* Income */}
      <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-blue-500">
        <h2 className="text-gray-500 text-sm">Total Income</h2>
        <p className="text-2xl font-bold text-blue-600 mt-2">
          ₹{income}
        </p>
      </div>

      {/* Expense */}
      <div className="bg-white shadow-lg rounded-2xl p-5 border-l-4 border-red-500">
        <h2 className="text-gray-500 text-sm">Total Expense</h2>
        <p className="text-2xl font-bold text-red-600 mt-2">
          ₹{expense}
        </p>
      </div>

    </div>
  );
};

export default DashboardCards;