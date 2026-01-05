// src/pages/orders/orders.types.ts

export type OrderStatus =
  | "in_progress"
  | "complete"
  | "pending"
  | "approved"
  | "rejected";

export interface OrderUser {
  id: number;
  name: string;
  avatarUrl: string;
}

export type Order = {
  id: string;
  orderId: string;
  user: string;
  avatar: string;
  project: string;
  address: string;
  date: string;
  status: OrderStatus;
};


export type SortDirection = "asc" | "desc";

export interface SortState {
  key: keyof Order | null;
  direction: SortDirection;
}
