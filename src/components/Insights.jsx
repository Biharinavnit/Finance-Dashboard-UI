const Insights = ({ data }) => {
  const categoryMap = {};

  data.forEach(t => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryMap).reduce((a, b) =>
    categoryMap[a] > categoryMap[b] ? a : b,
    Object.keys(categoryMap)[0]
  );

  return (
    <div className="p-4 bg-yellow-200 rounded">
      Top Spending Category: {highest || "N/A"}
    </div>
  );
};

export default Insights;