   import { useContext, useState } from "react";
import AddTransactionModal from "../components/AddTransactionModal";
import { FinanceContext } from "../context/FinanceContext";
import DashboardCards from "../components/DashboardCards";
import ChartSection from "../components/ChartSection";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";
import Insights from "../components/Insights";
import LineChartSection from "../components/LineChartSection";

const Dashboard = () => {
  const { transactions, role, setRole } = useContext(FinanceContext);

  // ✅ STEP 1: Modal state
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      
      <RoleSwitcher role={role} setRole={setRole} />

      <DashboardCards data={transactions} />

      {/* Better Order */}
      <LineChartSection data={transactions} />
      <ChartSection data={transactions} />

      <Insights data={transactions} />

      {/* ✅ STEP 2: Button opens modal */}
      {role === "admin" && (
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setOpenModal(true)}
        >
          Add Transaction
        </button>
      )}

      <TransactionTable data={transactions} />

      {/* ✅ STEP 3: Modal render */}
      <AddTransactionModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
      />

    </div>
  );
};

export default Dashboard;