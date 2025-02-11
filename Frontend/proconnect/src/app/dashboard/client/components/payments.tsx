"use client";
import { useState } from "react";
import { FaCreditCard, FaPlus, FaArrowDown, FaArrowUp } from "react-icons/fa";

const dummyTransactions = {
  data: [
    {
      id: "txn1",
      type: "Deposit",
      amount: 500,
      date: "2024-02-01",
      status: "Completed",
    },
    {
      id: "txn2",
      type: "Withdrawal",
      amount: -200,
      date: "2024-02-03",
      status: "Pending",
    },
    {
      id: "txn3",
      type: "Deposit",
      amount: 300,
      date: "2024-02-05",
      status: "Completed",
    },
    {
      id: "txn4",
      type: "Withdrawal",
      amount: -100,
      date: "2024-02-07",
      status: "Completed",
    },
  ],
  pagination: {
    next: "/api/jobs?page=2",
    prev: "/api/jobs?page=1",
    first: "/api/jobs?page=1",
    last: "/api/jobs?page=5",
  },
};

const Payments = () => {
  const [transactions, setTransactions] = useState(dummyTransactions.data);
  const [pagination, setPagination] = useState(dummyTransactions.pagination);

  // const fetchJobs = async (url: string) => {
  //   setLoading(true);
  //   const res = await fetch(url);
  //   const data = await res.json();

  //   setJobs(data.data);
  //   setPagination(data.pagination);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchJobs("/api/jobs?page=1"); // Fetch the first page
  // }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full mt-4">
      <h1 className="text-2xl font-semibold text-primary mb-4">Payments</h1>
      <div className="bg-primary text-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-lg font-semibold">Total Transactions</h3>
        <p className="text-3xl font-bold">$500.00</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary mb-3">
          Recent Transactions
        </h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          {transactions.map((txn) => (
            <div
              key={txn.id}
              className="flex justify-between items-center p-2 border-b last:border-b-0"
            >
              <div className="flex items-center space-x-2">
                {txn.amount > 0 ? (
                  <FaArrowUp className="text-primary" />
                ) : (
                  <FaArrowDown className="text-secondary" />
                )}
                <span className="font-semibold">{txn.type}</span>
              </div>
              <span
                className={`font-bold ${
                  txn.amount > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {txn.amount > 0
                  ? `+ $${txn.amount}`
                  : `- $${Math.abs(txn.amount)}`}
              </span>
              <span className="text-secondary">{txn.date}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  txn.status === "Completed"
                    ? "bg-primary text-white"
                    : "bg-secondary text-white"
                }`}
              >
                {txn.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <button
            disabled={!pagination.prev}
            // onClick={() => fetchJobs(pagination.prev)}
            className="bg-primary text-white px-4 py-2 rounded shadow disabled:opacity-50"
          >
            Previous
          </button>
          <button
            disabled={!pagination.next}
            // onClick={() => fetchJobs(pagination.prev)}
            className="bg-primary text-white px-4 py-2 rounded shadow disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-primary mb-3">
          Payment Methods
        </h2>
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-2">
            <FaCreditCard className="text-primary" size={24} />
            <span className="font-semibold">Visa **** 1234</span>
          </div>
          <button className="bg-primary text-white px-3 py-1 rounded shadow hover:bg-secondary">
            X
          </button>
        </div>

        <button className="flex items-center mt-4 bg-primary text-white px-4 py-2 rounded shadow hover:bg-secondary">
          <FaPlus className="mr-2" /> Add Payment Method
        </button>
      </div>
    </div>
  );
};

export default Payments;
