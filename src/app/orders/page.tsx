"use client";
import React, { useState } from "react";
import ProtectedPage from "@/components/ProtectedPage";
import { motion } from "framer-motion";

const orders = [
  {
    id: "PZA001",
    customer: "John Doe",
    pizza: "Margherita",
    quantity: 2,
    date: "2024-06-01 12:30",
    status: "Pending",
  },
  {
    id: "PZA002",
    customer: "Jane Smith",
    pizza: "Pepperoni",
    quantity: 1,
    date: "2024-06-01 13:15",
    status: "Preparing",
  },
  {
    id: "PZA003",
    customer: "Alice Johnson",
    pizza: "Veggie Supreme",
    quantity: 3,
    date: "2024-06-01 14:00",
    status: "Out for Delivery",
  },
  {
    id: "PZA004",
    customer: "Bob Brown",
    pizza: "Margherita",
    quantity: 1,
    date: "2024-06-01 14:45",
    status: "Delivered",
  },
  {
    id: "PZA005",
    customer: "Charlie Green",
    pizza: "Pepperoni",
    quantity: 2,
    date: "2024-06-01 15:10",
    status: "Cancelled",
  },
];

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-800",
  Preparing: "bg-blue-100 text-blue-800",
  "Out for Delivery": "bg-orange-100 text-orange-800",
  Delivered: "bg-green-100 text-green-800",
  Cancelled: "bg-red-100 text-red-800",
};

const statusOptions = [
  "All",
  "Pending",
  "Preparing",
  "Out for Delivery",
  "Delivered",
  "Cancelled",
];

// Add a mapping for border colors by status
const statusBorderColors: Record<string, string> = {
  Pending: 'border-l-yellow-700',
  Preparing: 'border-l-blue-700',
  'Out for Delivery': 'border-l-orange-700',
  Delivered: 'border-l-green-700',
  Cancelled: 'border-l-red-700',
};

export default function OrdersPage() {
  const [filter, setFilter] = useState("All");
  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <ProtectedPage>
      <div>
        <h1
          className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text inline-block"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #fde047 0%, #60a5fa 25%, #fb923c 50%, #4ade80 75%, #f87171 100%)",
          }}
        >
          Pizza Orders
        </h1>
        <div className="mb-6 flex items-center gap-3">
          <label htmlFor="status-filter" className="font-medium text-gray-700">
            Filter by status:
          </label>
          <select
            id="status-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {filteredOrders.map((order, idx) => (
            <motion.div
              key={order.id}
              className={`relative rounded-2xl shadow-lg p-6 flex flex-col gap-3 border border-gray-800 ring-1 ring-slate-700/40 bg-gradient-to-br from-[#151a2c] to-[#0f172a] backdrop-blur-md border-l-8 ${statusBorderColors[order.status]} transition-transform transition-shadow duration-200 hover:scale-[1.025] hover:brightness-110 hover:shadow-2xl`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xl font-extrabold text-blue-200 drop-shadow-sm tracking-wide">{order.id}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>{order.status}</span>
              </div>
              <div className="text-gray-100 text-base">
                <div><span className="font-semibold text-blue-300">Customer:</span> <span className="text-white/90 font-normal">{order.customer}</span></div>
                <div><span className="font-semibold text-blue-300">Pizza:</span> <span className="text-white/90 font-normal">{order.pizza}</span></div>
                <div><span className="font-semibold text-blue-300">Quantity:</span> <span className="text-white/90 font-normal">{order.quantity}</span></div>
                <div><span className="font-semibold text-blue-300">Order Date:</span> <span className="text-white/90 font-normal">{order.date}</span></div>
              </div>
            </motion.div>
          ))}
          {filteredOrders.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-8">
              No orders found for this status.
            </div>
          )}
        </motion.div>
      </div>
    </ProtectedPage>
  );
} 