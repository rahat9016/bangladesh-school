import ContentPatternLayout from "@/components/layout/ContentLayout";
import Image from "next/image";
import notice from "../../../public/notice.jpg";
export default function AdmissionNotice() {
  return (
    <div className="container mx-auto">
      <ContentPatternLayout>
        <div className="bg-slate-50 p-5 rounded-md">
            <div>
                <h1 className="text-4xl font-semibold">Admission Notice (Session 2025-26)</h1>
            </div>
            <Image src={notice} width={900} height={900} alt="notice" className="mt-8" />
        </div>
      </ContentPatternLayout>
    </div>
  );
}
