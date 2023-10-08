import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="flex p-12 gap-20">
        <div className="w-1/4">
          <LeftSidebar />
        </div>
        <div className="w-2/4 bg-gray-500">
          <ContentArea />
        </div>
        <div className="w-1/4 bg-gray-800">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
