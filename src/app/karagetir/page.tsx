import KaraTable from "@/components/KaraGetir/KaraTable";
import { getKaraGetir } from "@/services/kara.service";
import { Suspense } from "react";

export default async function KaraGetir() {
  const data = await getKaraGetir();

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <KaraTable data={data} />
    </Suspense>
  );
}
