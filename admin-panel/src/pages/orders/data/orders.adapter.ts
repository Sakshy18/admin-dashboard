
import type { Order, OrderStatus } from "../ orders.types";

const STATUSES: OrderStatus[] = [
  "in_progress",
  "complete",
  "pending",
  "approved",
  "rejected",
];

export async function fetchOrders(): Promise<Order[]> {
  const usersRes = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const postsRes = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const users = await usersRes.json();
  const posts = await postsRes.json();

  return posts.slice(0, 50).map((post: any, index: number) => {
    const user = users.find((u: any) => u.id === post.userId);

    return {
      id: `#CM${9801 + index}`,
      user: {
        id: user.id,
        name: user.name,
        avatarUrl: `https://i.pravatar.cc/40?img=${user.id}`,
      },
      project: post.title.slice(0, 20),
      address: `${user.address.street} ${user.address.city}`,
      date: new Date(
        Date.now() - index * 3600 * 1000
      ).toISOString(),
      status: STATUSES[index % STATUSES.length],
    };
  });
}
