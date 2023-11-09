import Header from "@/components/Header";
import HeaderMobile from "@/components/Header-Mobile";
import LeftSidebar from "@/components/LeftSidebar";
import ContentArea from "@/components/ContentArea";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
  return (
    <>
      <div className="md:block hidden">
        <Header />
      </div>

      <div className="md:hidden block">
        <HeaderMobile />
      </div>

      <div className="flex md:p-12 p-4 gap-20">
        <div className="w-1/5 md:block hidden">
          <LeftSidebar />
        </div>
        <div className="md:w-3/5 w-full">
          <ContentArea />
        </div>
        <div className="w-1/5 md:block hidden">
          <RightSidebar />
        </div>
      </div>
    </>
  );
}
