import DetailsFood from "./sections/DetailsFood";
import Header from "./sections/Header";
import ImagesSwiper from "./sections/ImagesSwiper";
import Infos from "./sections/Infos";
import Summary from "./sections/summary";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <ImagesSwiper />
      <Summary />
      <Summary />
      <Summary />
      <Infos />
      <DetailsFood />
    </div>
  );
}

export default App;
