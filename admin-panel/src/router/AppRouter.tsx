import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout";
import DashboardPage from "@/pages/dashboard";
import OrdersPage from "@/pages/orders/OrdersPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="orders" element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
