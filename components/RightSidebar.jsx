import CardDesign from "./RightSidebarComponents/CardDesign";
import PopularProfileCard from "./RightSidebarComponents/popularProfileCard";
import TrendingPosts from "./RightSidebarComponents/TrendingPosts";

export default function RightSidebar() {
  return (
    <div className="flex flex-col gap-10">
      <CardDesign
        cardTitle="Popular Profiles"
        cardComponent={<PopularProfileCard />}
      />

      <CardDesign cardTitle="Trending Post" cardComponent={<TrendingPosts />} />
    </div>
  );
}
