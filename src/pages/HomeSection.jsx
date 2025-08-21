import Spline from "@splinetool/react-spline";
import scene from "../assets/scene.splinecode";
import Navbar from "../components/Layouts/NavBar";
import { CardLearning } from "../components/Layouts/CardLayout";
import Footer from "../components/Layouts/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-700 font-Poppins text-base md:text-lg">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="w-full bg-Student bg-cover flex items-center text-white relative font-Poppins text-base md:text-lg">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative w-11/12 lg:grid lg:grid-cols-3 flex flex-col mx-auto items-center justify-around h-screen">
            <div className="col-span-2">
              <div className="pt-24">
                <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold">
                  Selamat Datang di{" "}
                  <span className="text-xl md:text-3xl lg:text-6xl font-FiraCode text-orange-500">
                    TitikKoma;
                  </span>
                </h1>
                <p className="py-6 text-sm md:text-base lg:text-lg">
                  TitikKoma; adalah platform pembelajaran interaktif yang
                  membantu kamu memahami dasar-dasar <strong>HTML, CSS,</strong>{" "}
                  dan <strong>JavaScript </strong>
                  dengan cara yang sederhana dan menyenangkan. Kami percaya
                  bahwa setiap orang bisa belajar coding, dimulai dari satu
                  baris kode.
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                  Mulailah perjalananmu di dunia web development dan temukan
                  cara mudah membangun website modern dengan teknologi terkini.
                </p>
              </div>
            </div>
            <div className="md:h-96 h-72 w-full ">
              <div className="h-full w-full">
                <Spline scene={scene} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto min-h-screen pt-10 md:pt-0 flex flex-col justify-center">
          <div className="bg-white rounded-lg shadow-lg p-8 ">
            <div className="py-2">
              <h1 className="text-4xl font-semibold">
                Sejarah Html, CSS, dan JavaScript
              </h1>
            </div>
            <div className="w-11/12 mx-auto">
              <div className="py-2">
                <h2 className="text-2xl font-medium">Html</h2>
                <p className="font-Poppins text-base md:text-lg">
                  HTML (HyperText Markup Language) pertama kali diperkenalkan
                  oleh Tim Berners-Lee pada tahun 1991. Awalnya hanya ada 18 tag
                  yang sangat sederhana untuk membuat struktur dasar halaman
                  web. Pada tahun 1995 muncul HTML 2.0 sebagai standar resmi
                  pertama, diikuti dengan versi HTML 3.2 dan 4.0 yang
                  menambahkan lebih banyak elemen. Setelah itu, lahirlah XHTML,
                  dan kini kita menggunakan HTML5 yang jauh lebih modern dengan
                  dukungan multimedia, canvas, dan API bawaan.
                </p>
              </div>
              <div className="py-2">
                <h2 className="text-2xl font-medium">CSS</h2>
                <p className="font-Poppins text-base md:text-lg">
                  CSS (Cascading Style Sheets) dikembangkan oleh Håkon Wium Lie
                  pada tahun 1994 untuk memisahkan tampilan dari struktur HTML.
                  Versi resmi pertama, CSS1, dirilis pada tahun 1996, diikuti
                  oleh CSS2 pada 1998 yang menambah banyak fitur seperti
                  positioning dan media types. Kini kita menggunakan CSS3 yang
                  mendukung animasi, transformasi, dan fitur-fitur modern yang
                  membuat web lebih interaktif serta responsif.
                </p>
              </div>
              <div className="py-2">
                <h2 className="text-2xl font-medium">JavaScript</h2>
                <p className="font-Poppins text-base md:text-lg">
                  JavaScript dibuat oleh Brendan Eich pada tahun 1995 hanya
                  dalam waktu 10 hari ketika ia bekerja di Netscape. Awalnya
                  bernama Mocha, lalu berubah menjadi LiveScript, dan akhirnya
                  JavaScript. Meski namanya mirip dengan Java, keduanya sangat
                  berbeda. Seiring perkembangan, JavaScript distandarisasi oleh
                  ECMA menjadi ECMAScript. Kini, JavaScript telah berevolusi
                  dengan berbagai framework dan library modern seperti React,
                  Vue, dan Angular, serta dapat berjalan tidak hanya di browser
                  tetapi juga di server melalui Node.js.
                </p>
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

export default Home;
