import StpTable from "@/components/StpTable/StpTable";
import { getStpRmforKlasik } from "@/services/stpRmForKlasik.service";
import { Suspense } from "react";

export default async function StpRmPage() {
  const data = await getStpRmforKlasik();

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <StpTable data={data} />
    </Suspense>
  );
}
