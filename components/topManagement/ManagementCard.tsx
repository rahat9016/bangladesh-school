import { Button } from "../ui/button";

export default function ManagementCard({
  name,
  position,
  email,
  image,
  title,
  descriptions
}: {
  name: string;
  position: string;
  email: string;
  image: string;
  title: string
  descriptions: string[]
}) {
  return <div className="bg-slate-200">
    <div className="bg-blue-600 py-3 px-3 rounded-sm">
        <h3 className="text-white font-medium text-lg">{title}</h3>
    </div>
    <div className="p-3 flex flex-row gap-2">
        <div className="w-24 h-20 bg-white border-2 border-gray-500 rounded-sm"></div>
        <div className="w-9/12">
            <p className="line-clamp-3 text-sm">{descriptions[0]}</p>
            <Button className="h-7 mt-3 text-sm font-normal">Read more</Button>
        </div>
    </div>
  </div>;
}
