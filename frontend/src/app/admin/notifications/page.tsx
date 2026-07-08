"use client";

import { Button } from "@/components/ui/Button";

export default function AdminNotificationsPage() {
  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    // TODO(M5): POST /notifications/campaign once the backend NotificationsModule (FCM) exists.
    alert("Push notification campaigns aren't wired up to the backend yet.");
  }

  return (
    <div>
      <h1 className="font-[family-name:var(--font-heading)] text-2xl text-maroon-800 mb-6">
        Push Notification Campaigns
      </h1>

      <form onSubmit={handleSend} className="max-w-xl space-y-4">
        <select className="input-field" defaultValue="order_update">
          <option value="order_update">Order Update</option>
          <option value="new_arrival">New Arrival</option>
          <option value="festival_reminder">Festival Reminder</option>
          <option value="flash_sale">Flash Sale</option>
        </select>
        <input placeholder="Notification Title" className="input-field" required />
        <textarea placeholder="Message" rows={3} className="input-field" required />
        <Button type="submit" variant="primary">
          Send Campaign
        </Button>
      </form>

      <style jsx>{`
        .input-field {
          width: 100%;
          border: 1px solid var(--color-marigold-300);
          background: var(--color-parchment-50);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
        }
        .input-field:focus {
          outline: none;
          border-color: var(--color-maroon-400);
        }
      `}</style>
    </div>
  );
}
