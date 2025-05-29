import React from "react";

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

export default function OrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Pizza Orders</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow p-6 flex flex-col gap-3 border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold text-gray-900">{order.id}</span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}>{order.status}</span>
            </div>
            <div className="text-gray-700">
              <div><span className="font-medium">Customer:</span> {order.customer}</div>
              <div><span className="font-medium">Pizza:</span> {order.pizza}</div>
              <div><span className="font-medium">Quantity:</span> {order.quantity}</div>
              <div><span className="font-medium">Order Date:</span> {order.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 