import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export function OrdersPagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 h-[28px]">
      <button
        className="h-7 w-7 rounded-[8px] flex items-center justify-center disabled:opacity-40"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <ArrowLeft className="h-5 w-5 text-[var(--snow-black-100)]" />
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        const isActive = p === page;

        return (
          <button
            key={p}
            onClick={() => onChange(p)}
            className={`
              h-7 w-7 rounded-[8px]
              text-sm flex items-center justify-center
              ${isActive ? "bg-[rgba(28,28,28,0.05)]" : ""}
            `}
          >
            {p}
          </button>
        );
      })}


      <button
        className="h-7 w-7 rounded-[8px] flex items-center justify-center disabled:opacity-40"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        <ArrowRight className="h-5 w-5 text-[var(--snow-black-100)]" />
      </button>
    </div>
  );
}
