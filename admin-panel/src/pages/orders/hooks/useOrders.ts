import { useEffect, useMemo, useState } from "react";
import type { Order } from "../ orders.types";
import { STATUS_FROM_API } from "../orders.constants";

export type SortState = {
  key: keyof Order | null;
  direction: "asc" | "desc";
};

const PAGE_SIZE = 10;

export function useOrders() {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<SortState>({
    key: null,
    direction: "asc",
  });
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const [usersRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
      ]);

      const users = await usersRes.json();
      const posts = await postsRes.json();


      const composed: Order[] = posts.slice(0, 50).map((post: any, i: number) => {
         const rawStatus =
    ["In Progress", "Complete", "Pending", "Approved", "Rejected"][i % 5];

        const user = users.find((u: any) => u.id === post.userId);

        return {
          id: String(post.id),
          orderId: `#CM${9800 + post.id}`,
          user: user?.name ?? "Unknown",
          avatar: `https://i.pravatar.cc/48?img=${user?.id ?? 1}`,
          project: post.title,
          address: user
            ? `${user.address.street} ${user.address.city}`
            : "Unknown",
          date: "1/5/2026",
         status: STATUS_FROM_API[rawStatus] ?? "pending",
        };
      });

      setAllOrders(composed);
      setLoading(false);
    }

    fetchData();
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    let rows = allOrders.filter((o) =>
      [o.orderId, o.user, o.project, o.address]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );

    if (sort.key) {
      rows = [...rows].sort((a, b) => {
        const va = a[sort.key!];
        const vb = b[sort.key!];
        if (va < vb) return sort.direction === "asc" ? -1 : 1;
        if (va > vb) return sort.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return rows;
  }, [allOrders, search, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const orders = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelected((prev) =>
      prev.size === orders.length
        ? new Set()
        : new Set(orders.map((o) => o.id))
    );
  };

  const onSort = (key: keyof Order) => {
    setSort((prev) => {
      if (prev.key !== key) return { key, direction: "asc" };
      if (prev.direction === "asc")
        return { key, direction: "desc" };
      return { key: null, direction: "asc" };
    });
  };

  return {
    orders,
    loading,
    page,
    totalPages,
    setPage,
    search,
    setSearch,
    sort,
    onSort,
    selected,
    toggleOne,
    toggleAll,
  };
}
