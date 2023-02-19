import CustomizedCarousel from "../../features/carousel/CustomizedCarousel";
import ItemsList from "../../features/item/ItemsList";

const Home = () => {
  let content;
  content = (
    <>
      <CustomizedCarousel />
      <ItemsList />
    </>
  );

  return content;
};
export default Home;
