import { ReactNode } from "react";
import TopManagement from "../topManagement/TopManagement";

export default function ContentPatternLayout({children}:{children: ReactNode}) {
  return (
    <div className="flex flex-row gap-5">
        <div className="w-9/12">
            {children}
        </div>
        <div className="w-3/12">
            <TopManagement />
        </div>
    </div>
  )
}
