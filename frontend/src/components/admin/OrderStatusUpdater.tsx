"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const STATUSES = ["Confirmed", "Packed", "Shipped", "Out for Delivery", "Delivered", "Cancelled"];

export function OrderStatusUpdater({ currentStatus }: { currentStatus: string }) {
  const [status, setStatus] = useState(currentStatus);

  function handleUpdate() {
    // TODO(M5): PATCH /orders/:id/status once the backend OrdersModule exists.
    alert(`Status update to "${status}" isn't wired up to the backend yet.`);
  }

  return (
    <div className="flex items-center gap-3">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-lg border border-marigold-300 bg-parchment-50 px-3 py-2 text-sm"
      >
        {STATUSES.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <Button onClick={handleUpdate} variant="primary" size="sm">
        Update Status
      </Button>
    </div>
  );
}
