import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 text-gray-700 text-lg font-Poppins">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex flex-col  h-full">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-10/12 bg-Classroom bg-cover bg-top h-3/5 relative rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl shadow-lg"></div>
            <div className="relative w-10/12 mx-auto flex items-center h-full">
              <div>
                <h1 className="md:text-6xl text-3xl text-white font-semibold text-center py-4">
                  About Us
                </h1>
                <p className="text-center text-base md:text-lg text-white">
                  Website ini dibuat sebagai media pembelajaran online sederhana
                  yang mengambil materi dari YouTube sebagai sumber utama.
                  Dengan adanya website ini, kami berharap siapa saja bisa lebih
                  mudah menemukan dan memahami materi pembelajaran tanpa harus
                  repot mencari satu per satu di berbagai tempat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-5/6 pb-44">
          <div className="w-10/12  mx-auto md:grid md:grid-rows-3 md:gap-0 flex flex-col gap-4">
            <div className="md:grid md:grid-cols-2 flex flex-col items-center justify-items-center gap-8 ">
              <div className=" w-full">
                <h1 className="md:text-8xl text-5xl font-semibold">Visi</h1>
              </div>
              <div>
                <p>
                  Visi kami adalah menjadi media pembelajaran berbasis online
                  yang sederhana namun tetap memberikan manfaat nyata bagi siapa
                  saja yang ingin belajar. Kami ingin menciptakan ruang belajar
                  yang mudah diakses, ramah untuk semua kalangan, dan dapat
                  membantu siapa pun memahami materi dengan lebih baik. Dengan
                  menjadikan YouTube sebagai sumber utama, kami percaya bahwa
                  pembelajaran bisa lebih terbuka dan menjangkau lebih banyak
                  orang.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <hr className="border-2 border-gray-700 border-solid w-full" />
            </div>
            <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center justify-items-center gap-8 border-t-2 ">
              <div>
                <p>
                  Misi kami adalah menghadirkan kumpulan materi pembelajaran
                  dari YouTube dalam bentuk yang lebih rapi, terstruktur, dan
                  mudah dipahami. Kami ingin menyajikan pengalaman belajar yang
                  sederhana namun efektif, di mana setiap orang bisa mengakses
                  materi kapan pun dan di mana pun mereka berada. Selain itu,
                  kami juga berusaha agar website ini bisa menjadi alternatif
                  belajar tambahan yang praktis, sehingga siapa saja dapat terus
                  berkembang dan mendapatkan ilmu baru dengan cara yang lebih
                  fleksibel.
                </p>
              </div>
              <div className=" w-full ">
                <h1 className="md:text-8xl text-5xl font-semibold md:text-right text-left">
                  Misi
                </h1>
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

export default About;
