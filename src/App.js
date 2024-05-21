import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import router from "./Routes/Router";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
