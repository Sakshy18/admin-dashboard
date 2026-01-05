import React from "react";

export default function TopSellingProductsCard() {
  return (
    <div className="bg-[var(--chart-card-bg)] rounded-[16px] p-[24px] w-full min-w-[662px]">
      <h3 className="text-[14px] font-semibold text-[var(--chart-text-primary)] mb-[4px]">
        Top Selling Products
      </h3>

      <ProductsTable />
    </div>
  );
}

function ProductsTable() {
  return (
    <div className="flex w-full min-w-[614px]">
      <ColumnName />
      <ColumnPrice />
      <ColumnQuantity />
      <ColumnAmount />
    </div>
  );
}


function ColumnName() {
  return (
    <div className="min-w-[224px] flex-[2] h-[240px] flex flex-col">
      <HeaderCell>Name</HeaderCell>
      <BodyCell>ASOS Ridley High Waist</BodyCell>
      <BodyCell>Marco Lightweight Shirt</BodyCell>
      <BodyCell>Half Sleeve Shirt</BodyCell>
      <BodyCell>Lightweight Jacket</BodyCell>
      <BodyCell>Marco Shoes</BodyCell>
    </div>
  );
}

function ColumnPrice() {
  return (
    <div className="min-w-[130px] flex-1 h-[240px] flex flex-col">
      <HeaderCell>Price</HeaderCell>
      <BodyCell>$79.49</BodyCell>
      <BodyCell>$128.50</BodyCell>
      <BodyCell>$39.99</BodyCell>
      <BodyCell>$20.00</BodyCell>
      <BodyCell>$79.49</BodyCell>
    </div>
  );
}

function ColumnQuantity() {
  return (
    <div className="min-w-[130px] flex-1 h-[240px] flex flex-col">
      <HeaderCell>Quantity</HeaderCell>
      <BodyCell>82</BodyCell>
      <BodyCell>37</BodyCell>
      <BodyCell>64</BodyCell>
      <BodyCell>184</BodyCell>
      <BodyCell>64</BodyCell>
    </div>
  );
}

function ColumnAmount() {
  return (
    <div className="min-w-[130px] flex-1 h-[240px] flex flex-col">
      <HeaderCell>Amount</HeaderCell>
      <BodyCell>$6,518.18</BodyCell>
      <BodyCell>$4,754.50</BodyCell>
      <BodyCell>$2,559.36</BodyCell>
      <BodyCell>$3,680.00</BodyCell>
      <BodyCell>$1,965.81</BodyCell>
    </div>
  );
}


function HeaderCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[40px] px-[12px] flex items-center border-b border-[rgba(28,28,28,0.2)]">
      <span className="text-[12px] text-[var(--chart-text-muted)]">
        {children}
      </span>
    </div>
  );
}

function BodyCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[40px] px-[12px] flex items-center">
      <span className="text-[12px] text-[var(--chart-text-primary)]">
        {children}
      </span>
    </div>
  );
}
