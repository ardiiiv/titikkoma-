import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import Button from ".././components/Elements/Button";
import { useState } from "react";

const QuizJs = () => {
  const [score, setScore] = useState(null);

  const correctAnswers = {
    soal1: "b",
    soal2: "b",
    soal3: "a",
    soal4: "c",
    soal5: "b",
    soal6: "c",
    soal7: "c",
    soal8: "b",
    soal9: "b",
    soal10: "b",
  };

  const handleSubmit = () => {
    let total = 0;

    // cek jawaban user
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
        <div className=" rounded-xl shadow-lg p-7 bg-yellow-400 w-full">
          <div>
            <h1 className="md:text-6xl text-lg font-semibold text-white text-center">
              Selamat mengerjakan Quiz JS
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
            <p>1. JavaScript digunakan untuk...</p>
          </div>
          <div>
            <input type="radio" name="soal1" id="a" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              A. Mendesain tampilan web
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="b" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              B. Membuat interaktivitas halaman
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="c" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              C. Membuat struktur dokumen
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="d" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              D. Menyimpan data di server
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal2"
        >
          <div>
            <p>2. Cara menampilkan pesan di console adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal2" id="a" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              A. alert()
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="b" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              B. console.log()
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="c" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              C. prompt()
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="d" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              D. print()
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal3"
        >
          <div>
            <p>3. Variabel bisa dibuat dengan kata kunci...</p>
          </div>
          <div>
            <input type="radio" name="soal3" id="a" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              A. var, let, const
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="b" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              B. int, string, char
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="c" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              C. define, dim, static
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="d" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              D. new, this, obj
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal4"
        >
          <div>
            <p>4.Operator untuk perbandingan sama dengan adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal4" id="a" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              A. =
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="b" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              B. ==
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="c" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              C. ===
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="d" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              D. :=
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal5"
        >
          <div>
            <p>5. Fungsi parseInt("123") menghasilkan...</p>
          </div>
          <div>
            <input type="radio" name="soal5" id="a" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              A. "123"
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="b" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              B. 123
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="c" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              C. NaN
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="d" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              D. 1.23
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal6"
        >
          <div>
            <p>6. Nilai boolean di JavaScript hanya...</p>
          </div>
          <div>
            <input type="radio" name="soal6" id="a" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              A. yes dan no
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="b" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              B. 1 dan 0
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="c" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              C. true dan false
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="d" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              D. on dan off
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal7"
        >
          <div>
            <p>7. Struktur pengulangan untuk jumlah pasti adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal7" id="a" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              A. if
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="b" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              B. while
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="c" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              C. for
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="d" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              D. switch
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal8"
        >
          <div>
            <p>8. Fungsi untuk menampilkan pop-up input adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal8" id="a" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              A. alert()
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="b" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              B. prompt()
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="c" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              C. console.log()
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="d" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              D. confirm()
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal9"
        >
          <div>
            <p>9. Keyword this mengacu pada...</p>
          </div>
          <div>
            <input type="radio" name="soal9" id="a" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              A. Objek global
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="b" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              B. Objek saat ini
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="c" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              C. Fungsi lain
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="d" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              D. Nilai variabel
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal10"
        >
          <div>
            <p>10. Array di JavaScript ditulis dengan...</p>
          </div>
          <div>
            <input type="radio" name="soal10" id="a" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              A. &#123; &#125;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="b" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              B. [ ]
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="c" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              C. ( )
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="d" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              D. &lt; &gt;
            </label>
          </div>
        </div>
      </div>
      <div className=" w-10/12 mx-auto flex justify-end pb-28 pt-5">
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

export default QuizJs;
