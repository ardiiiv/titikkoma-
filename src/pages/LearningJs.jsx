import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import YouTube from "react-youtube";

const LearningJs = () => {
  return (
    <div className="min-h-screen text-lg text-gray-700 font-Poppins bg-gray-200">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex flex-col justify-center h-full pt-24 pb-10 gap-10">
        <div className="w-full h-screen flex flex-col justify-center gap-5">
          <div className="w-9/12 h-1/5 bg-JS mx-auto relative bg-cover rounded-xl shadow-lg ">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl shadow-lg"></div>
            <div className="relative p-5 flex items-center h-full">
              <h1 className="text-6xl text-white font-semibold">
                JavaScript Dasar
              </h1>
            </div>
          </div>
          <div className="w-9/12 mx-auto">
            <div className="w-full bg-white shadow-lg rounded-xl flex justify-center">
              <div className="w-11/12 py-10 flex justify-center">
                <div className="w-full">
                  <YouTube
                    videoId="SDROba_M42g"
                    opts={{ width: "100%", height: "480" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LearningJs;
