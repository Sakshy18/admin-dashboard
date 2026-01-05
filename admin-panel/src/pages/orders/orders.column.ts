
export type SortKey =
  | "orderId"
  | "user"
  | "project"
  | "address"
  | "date"
  | "status";

export type Column = {
  key: string;
  label?: string;
  width: string;
  sortable?: boolean;
  sortKey?: SortKey;
};

export const GRID_TEMPLATE_COLUMNS = `
  24px
  minmax(80px, 220px)
  minmax(80px, 220px)
  minmax(80px, 220px)
  minmax(80px, 400px)
  minmax(80px, 220px)
  110px
  48px
`;

export const columns: Column[] = [
  { key: "select", width: "24px" },
  {
    key: "orderId",
    label: "Order ID",
    width: "minmax(80px, 220px)",
    sortable: true,
    sortKey: "orderId",
  },
  {
    key: "user",
    label: "User",
    width: "minmax(80px, 220px)",
    sortable: true,
    sortKey: "user",
  },
  {
    key: "project",
    label: "Project",
    width: "minmax(80px, 220px)",
    sortable: true,
    sortKey: "project",
  },
  {
    key: "address",
    label: "Address",
    width: "minmax(80px, 400px)",
    sortable: true,
    sortKey: "address",
  },
  {
    key: "date",
    label: "Date",
    width: "minmax(80px, 220px)",
    sortable: true,
    sortKey: "date",
  },
  {
    key: "status",
    label: "Status",
    width: "110px",
    sortable: true,
    sortKey: "status",
  },
  { key: "actions", width: "48px" },
];