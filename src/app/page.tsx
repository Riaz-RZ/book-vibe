import Banner from "@/components/homepage/Banner";
import Books from "@/components/homepage/Books";

const page = () => {
  return (
    <div className="container mx-auto">
      <Banner/>
      <Books/>
    </div>
  );
};

export default page;