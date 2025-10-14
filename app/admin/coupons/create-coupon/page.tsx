// app/admin/coupons/create/page.tsx
"use client";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";

function PageHeader({ title, breadcrumbs }: { title: string; breadcrumbs?: string }) {
  return (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{breadcrumbs}</div>
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <FiPlusCircle /> {title}
      </h1>
    </div>
  );
}

export default function CreateCouponPage() {
  const [form, setForm] = useState({ code: "", type: "percentage", value: "", expiry: "", active: true });

  const handle = (e: any) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const submit = (e: any) => {
    e.preventDefault();
    console.log("Create coupon:", form);
    alert("Coupon created (mock).");
  };

  return (
    <div className="p-6">
      <PageHeader title="Create Coupon" breadcrumbs="Carvaan > Coupons > Create Coupon" />

      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow border max-w-lg space-y-4">
        <div>
          <label className="text-sm font-medium">Coupon Code*</label>
          <input name="code" required value={form.code} onChange={handle} className="mt-1 border w-full rounded-lg px-3 py-2" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Type</label>
            <select name="type" value={form.type} onChange={handle} className="mt-1 border w-full rounded-lg px-3 py-2">
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Value*</label>
            <input name="value" required value={form.value} onChange={handle} className="mt-1 border w-full rounded-lg px-3 py-2" placeholder="10 or 250" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Expiry Date*</label>
          <input type="date" name="expiry" required value={form.expiry} onChange={handle} className="mt-1 border w-full rounded-lg px-3 py-2" />
        </div>

        <div className="flex items-center gap-3">
          <input id="active" type="checkbox" checked={form.active} onChange={(e) => setForm((p) => ({ ...p, active: e.target.checked }))} />
          <label htmlFor="active" className="text-sm">Active</label>
        </div>

        <div className="pt-2">
          <button type="submit" className="bg-[#C62A88] text-white px-4 py-2 rounded-lg">Create Coupon</button>
        </div>
      </form>
    </div>
  );
}
