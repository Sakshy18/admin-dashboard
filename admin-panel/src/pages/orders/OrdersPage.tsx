// src/pages/orders/OrdersPage.tsx

import { OrdersTable } from "./components/OrdersTable";
import { OrdersToolbar } from "./components/OrdersToolbox";
import { OrdersPagination } from "./components/OrdersPagination";
import { useOrders } from "./hooks/useOrders";
export default function OrdersPage() {
  const {
    orders,
    page,
    totalPages,
    search,
    setSearch,
    setPage,
    sort,
    onSort,
    selected,
    toggleOne,
    toggleAll,
  } = useOrders();

  return (
    <div className="flex flex-col gap-3">
     <OrdersToolbar
  search={search}
  onSearch={setSearch}
  onFilter={() => {}}
  onSort={() => {}}
/>


      <OrdersTable
        orders={orders}
        sort={sort}
        onSort={onSort}
        selected={selected}
        toggleOne={toggleOne}
        toggleAll={toggleAll}
      />

      <div className="flex justify-end">
        <OrdersPagination
          page={page}
          totalPages={totalPages}
          onChange={setPage}
        />
      </div>
    </div>
  );
}