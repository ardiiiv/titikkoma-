import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import Button from ".././components/Elements/Button";
import { useState } from "react";

const QuizCss = () => {
  const [score, setScore] = useState(null);

  // daftar jawaban benar
  const correctAnswers = {
    soal1: "b",
    soal2: "b",
    soal3: "b",
    soal4: "c",
    soal5: "b",
    soal6: "b",
    soal7: "c",
    soal8: "b",
    soal9: "a",
    soal10: "c",
  };

  const handleSubmit = () => {
    let total = 0;

    // cek semua jawaban
    Object.keys(correctAnswers).forEach((soal) => {
      const pilihan = document.querySelector(`input[name="${soal}"]:checked`);
      if (pilihan && pilihan.id === correctAnswers[soal]) {
        total++;
      }
    });

    setScore(total);
  };

  return (
    <div className="min-h-screen bg-gray-200 font-Poppins text-gray-700 ">
      <div>
        <Navbar />
      </div>
      <div className="w-10/12 mx-auto pt-28 pb-10 h-full">
        <div className=" rounded-xl shadow-lg p-7 bg-blue-600 w-full">
          <div>
            <h1 className="md:text-6xl text-lg font-semibold text-white text-center">
              Selamat mengerjakan Quiz Css
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-full md:grid md:grid-cols-3 md:grid-rows-4 md:justify-items-center flex flex-col items-center gap-4">
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal1"
        >
          <div>
            <p>1. CSS digunakan untuk...</p>
          </div>
          <div>
            <input type="radio" name="soal1" id="a" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              A. Mengatur logika program
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="b" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              B. Mengatur tampilan Web
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="c" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              C. Menghubungkan database
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="d" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              D. Membuat hyperlink
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal2"
        >
          <div>
            <p>2. File CSS eksternal ditautkan dengan tag...</p>
          </div>
          <div>
            <input type="radio" name="soal2" id="a" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              A. &lt;style&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="b" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              B. &lt;link&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="c" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              C. &lt;script&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="d" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              D. &lt;css&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal3"
        >
          <div>
            <p>3. Selector untuk memilih elemen dengan id judul adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal3" id="a" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              A. .judul
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="b" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              B. #judul
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="c" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              C. judul
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="d" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              D. *judul
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal4"
        >
          <div>
            <p>4. Properti untuk mengubah warna teks adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal4" id="a" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              A. background-color
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="b" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              B. text-style
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="c" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              C. color
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="d" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              D. font
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal5"
        >
          <div>
            <p>5. Cara membuat teks tebal di CSS adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal5" id="a" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              A. text-weight: bold;
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="b" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              B. font-weight: bold;
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="c" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              C. style: bold;
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="d" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              D. font: bold;
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal6"
        >
          <div>
            <p>6. Properti untuk mengatur jarak dalam elemen adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal6" id="a" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              A. margin
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="b" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              B. padding
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="c" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              C. border
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="d" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              D. spacing
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal7"
        >
          <div>
            <p>7. Nilai default posisi elemen adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal7" id="a" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              A. absolute
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="b" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              B. relative
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="c" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              C. static
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="d" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              D. fixed
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal8"
        >
          <div>
            <p>8. Cara membuat sudut membulat adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal8" id="a" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              A. corner-radius
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="b" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              B. border-radius
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="c" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              C. round-edge
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="d" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              D. curve
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal9"
        >
          <div>
            <p>9. Selector universal di CSS ditulis dengan...</p>
          </div>
          <div>
            <input type="radio" name="soal9" id="a" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              A. *
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="b" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              B. #
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="c" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              C. .
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="d" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              D. %
            </label>
          </div>
        </div>
        <div
          className="w-3/4  h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal10"
        >
          <div>
            <p>10. Untuk membuat teks rata tengah digunakan...</p>
          </div>
          <div>
            <input type="radio" name="soal10" id="a" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              A. text-position: center;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="b" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              B. align: center;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="c" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              C. text-align: center;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="d" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              D. center: true;
            </label>
          </div>
        </div>
      </div>
      <div className=" w-10/12 mx-auto flex justify-end pb-28">
        <div className="">
          <Button
            background="bg-gray-700"
            rounded="rounded-lg"
            hover="hover:bg-gray-600"
            onclick={handleSubmit}
          >
            Selesai
          </Button>
        </div>
      </div>
      {/* tampilkan hasil */}
      {score !== null && (
        <div className="w-10/12 mx-auto text-center pb-10">
          <div className="p-5 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold">Hasil Quiz</h2>
            <p className="mt-3 text-lg">
              Skor kamu: {score} dari {Object.keys(correctAnswers).length}
            </p>
          </div>
        </div>
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default QuizCss;
