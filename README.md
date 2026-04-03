# 💰 Finance Dashboard UI

A clean and interactive **Finance Dashboard** built using React.
This project helps users track their financial activity including income, expenses, and balance with visual insights.

---

## 🚀 Features

### 📊 Dashboard Overview :https://finance-dashboard-ui-fqnq.vercel.app/

* Displays **Total Balance, Income, and Expenses**
* Dynamic calculation from transaction data

### 📈 Data Visualization

* **Line Chart** → Shows financial trends over time
* **Pie Chart** → Category-wise expense breakdown

### 📋 Transactions

* List of all transactions
* Search/filter by category
* Displays date, amount, type, and category

### 👤 Role-Based UI

* **Viewer** → Can only view data
* **Admin** → Can add new transactions

### ➕ Add Transaction

* Modal-based form
* Real-time updates in dashboard, charts, and table

### 💡 Insights

* Shows highest spending category

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **Charts:** Recharts
* **State Management:** React Context API

---

## 📂 Project Structure

src/
├── components/
│ ├── DashboardCards.jsx
│ ├── ChartSection.jsx
│ ├── LineChartSection.jsx
│ ├── TransactionTable.jsx
│ ├── RoleSwitcher.jsx
│ ├── AddTransactionModal.jsx
│ └── Insights.jsx
│
├── context/
│ └── FinanceContext.jsx
│
├── data/
│ └── mockData.js
│
├── pages/
│ └── Dashboard.jsx
│
├── App.jsx
└── main.jsx

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/finance-dashboard.git
```

### 2. Navigate to project

```bash
cd finance-dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the project

```bash
npm run dev
```

---

## 🌐 Live Demo

👉 Add your deployed link here (Netlify / Vercel)

---

## 🧠 Approach

* Broke down UI into reusable components
* Managed global state using Context API
* Transformed raw data for meaningful visualizations
* Focused on clean UI and user experience

---

## ⚡ Future Improvements

* Dark Mode
* Edit/Delete transactions
* Backend integration (API + Database)
* Authentication system
* Data persistence using local storage

---

## 🙌 Learnings

* Component-based architecture in React
* State management using Context API
* Data visualization using charts
* UI/UX design principles

---

## 📌 Author

**Navnit Bihari**
B.Tech CSE | Frontend Developer

---

## ⭐ Feedback

If you like this project, feel free to give it a star ⭐
