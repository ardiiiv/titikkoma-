import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import { CardQuiz } from "../components/Layouts/CardLayout";

const Quiz = () => {
  return (
    <div className="min-h-screen bg-gray-200 font-Poppins text-lg text-gray-700">
      <div>
        <Navbar />
      </div>
      <div className="w-full h-full">
        <div className="w-full h-screen flex items-center">
          <div className="w-10/12 bg-Studying bg-cover bg-center h-3/5 relative rounded-xl shadow-lg mx-auto">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl shadow-lg"></div>
            <div className="relative h-full w-full text-white">
              <div className="flex flex-col h-full w-10/12 justify-center mx-auto gap-3">
                <h1 className="md:text-6xl text-3xl font-semibold text-center">
                  Quiz
                </h1>
                <p className="text-center text-base md:text-lg">
                  Quiz ini dibuat sebagai latihan tambahan untuk membantu kamu
                  memahami materi yang sudah dipelajari. Soal-soal yang tersedia
                  di sini diambil dari sumber pembelajaran sederhana seperti
                  video YouTube, lalu disusun kembali agar lebih mudah dipahami.
                  Dengan mengerjakan quiz ini, kamu bisa mengukur seberapa jauh
                  pemahamanmu terhadap topik yang sedang dipelajari.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto pb-24">
          <div className="w-full">
            <CardQuiz />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Quiz;
