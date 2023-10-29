import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex p-12 gap-20">
        <div className="w-1/5">
          <LeftSidebar />
        </div>
        <div className="w-3/5">
          <ContentArea />
        </div>
        <div className="w-1/5">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
