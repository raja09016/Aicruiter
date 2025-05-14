'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle } from "lucide-react"

export default function BillingPage() {
  return (
    <div className="pt-20 lg:ml-64 p-6">
      <h1 className="text-2xl font-bold mb-6">Billing Information</h1>

      <Card className="p-6 space-y-4">
        {/* Current Plan */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Pro Plan</p>
            <p className="text-sm text-gray-500">Billed Monthly — ₹999/month</p>
          </div>
          <Button variant="outline" className="text-sm">Manage Plan</Button>
        </div>

        {/* Payment Method */}
        <div className="border-t pt-4">
          <p className="text-sm font-medium">Payment Method</p>
          <p className="text-sm text-gray-600 mt-1">**** **** **** 1234 — Exp: 06/27</p>
          <Button variant="ghost" className="text-sm mt-2 text-blue-600">Update Payment Method</Button>
        </div>

        {/* Billing History */}
        <div className="border-t pt-4">
          <p className="text-sm font-medium">Billing History</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li className="flex items-center justify-between">
              <span>April 2025</span>
              <span className="text-green-600 flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> Paid
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>March 2025</span>
              <span className="text-green-600 flex items-center gap-1">
                <CheckCircle2 className="h-4 w-4" /> Paid
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span>February 2025</span>
              <span className="text-red-500 flex items-center gap-1">
                <XCircle className="h-4 w-4" /> Failed
              </span>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  )
}
