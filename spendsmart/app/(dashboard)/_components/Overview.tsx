"use client";

import { DateRangePicker } from "@/components/ui/date-range-picker";
import { MAX_DATE_RANGE_DAYS } from "@/lib/constant";
import { UserSettings } from "@prisma/client";
import { differenceInDays, startOfMonth } from "date-fns";
import React, { useState } from "react";
import { toast } from "sonner";
<<<<<<< HEAD
import StatsCards from "./StatsCards";
import CategoriesStats from "./CategoriesStats";
=======
>>>>>>> 24a1670e529fbaa51a145972fe1ec79e25c8f41f

function Overview({ userSettings }: { userSettings: UserSettings }) {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });

  return (
    <>
      <div className="flex flex-wrap items-end justify-between px-6 py-6">
        <h2 className="text-3xl font-bold">Overview</h2>
        <div className="flex items-center gap-3">
          <DateRangePicker
            initialDateFrom={dateRange.from}
            initialDateTo={dateRange.to}
            showCompare={false}
            onUpdate={(values) => {
              const { from, to } = values.range;

              if (!from || !to) {
                return;
              }

              if (differenceInDays(to, from) > MAX_DATE_RANGE_DAYS) {
                toast.error(
                  `Date range cannot exceed ${MAX_DATE_RANGE_DAYS} days`
                );
                return;
              }

              setDateRange({ from, to });
            }}
          />
        </div>
      </div>
<<<<<<< HEAD
      <div className="flex flex-col px-6 gap-2">
        <StatsCards
          userSettings={userSettings}
          from={dateRange.from}
          to={dateRange.to}
        />
        <CategoriesStats
          userSettings={userSettings}
          from={dateRange.from}
          to={dateRange.to}
        />
      </div>
=======
>>>>>>> 24a1670e529fbaa51a145972fe1ec79e25c8f41f
    </>
  );
}

export default Overview;
