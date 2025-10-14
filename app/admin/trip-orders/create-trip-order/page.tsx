"use client";
import { useState } from "react";

export default function CreateTripOrderPage() {
  const [formData, setFormData] = useState({
    orderId: "",
    tripName: "",
    customerName: "",
    email: "",
    phone: "",
    bookingDate: "",
    noOfPeople: "",
    totalAmount: "",
    status: "Pending",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Trip Order Created Successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Create Trip Order 🧾</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md border grid md:grid-cols-2 gap-6"
      >
        <input name="orderId" placeholder="Order ID*" value={formData.orderId} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="tripName" placeholder="Trip Name*" value={formData.tripName} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="customerName" placeholder="Customer Name*" value={formData.customerName} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="email" type="email" placeholder="Email*" value={formData.email} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="phone" placeholder="Phone*" value={formData.phone} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="bookingDate" type="date" value={formData.bookingDate} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="noOfPeople" type="number" placeholder="No. of People*" value={formData.noOfPeople} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <input name="totalAmount" type="number" placeholder="Total Amount (₹)*" value={formData.totalAmount} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
        <select name="status" value={formData.status} onChange={handleChange} className="border rounded-md px-4 py-2 w-full">
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
        </select>
        <div className="col-span-2 text-right">
          <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
            Create Order
          </button>
        </div>
      </form>
    </div>
  );
}
