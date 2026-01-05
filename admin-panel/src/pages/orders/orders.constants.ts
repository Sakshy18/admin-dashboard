import type { OrderStatus } from "./ orders.types";

export const STATUS_COLORS: Record<
  OrderStatus,
  { dot: string; text: string }
> = {
  in_progress: { dot: "#95A4FC", text: "#8A8CD9" },
  complete: { dot: "#A1E3CB", text: "#4AA785" },
  approved: { dot: "#B1E3FF", text: "#59A8D4" },
  pending: { dot: "#FFE999", text: "#FFC555" },
  rejected: {
    dot: "rgba(28,28,28,0.4)",
    text: "rgba(28,28,28,0.4)",
  },
};

export const STATUS_LABELS: Record<OrderStatus, string> = {
  in_progress: "In Progress",
  complete: "Complete",
  approved: "Approved",
  pending: "Pending",
  rejected: "Rejected",
};


export const STATUS_FROM_API: Record<string, OrderStatus> = {
  "In Progress": "in_progress",
  Complete: "complete",
  Approved: "approved",
  Pending: "pending",
  Rejected: "rejected",
};
