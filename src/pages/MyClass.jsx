import { CardLearning } from "../components/Layouts/CardLayout";
import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";

const MyClass = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-700 text-lg font-Poppins">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex flex-col  h-full">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-10/12 bg-Learning bg-cover bg-top h-3/5 relative rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl shadow-lg"></div>
            <div className="relative w-10/12 mx-auto flex items-center h-full">
              <div>
                <h1 className="md:text-6xl text-3xl text-white font-semibold text-center py-4">
                  Myclass
                </h1>
                <p className="text-center text-base md:text-lg text-white">
                  MyClass hadir untuk membantu siapa saja yang ingin mempelajari
                  dasar-dasar pengembangan web. Di sini, kamu akan menemukan
                  materi tentang HTML, CSS, dan JavaScript yang disajikan secara
                  sederhana, praktis, dan mudah diikuti. Belajar kapan saja dan
                  di mana saja jadi lebih menyenangkan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto min-h-screen pb-8 md:pb-0 flex flex-col justify-center">
          <div className="py-6">
            <h1 className="md:text-4xl text-2xl font-semibold">
              Learning Paths
            </h1>
          </div>
          <div className=" w-10/12 mx-auto">
            <div className="w-full">
              <CardLearning />
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

export default MyClass;
