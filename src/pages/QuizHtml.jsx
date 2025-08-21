import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import Button from ".././components/Elements/Button";
import { useState } from "react";

const QuizHtml = () => {
  const [score, setScore] = useState(null);

  // daftar jawaban benar
  const correctAnswers = {
    soal1: "b",
    soal2: "b",
    soal3: "b",
    soal4: "b",
    soal5: "b",
    soal6: "b",
    soal7: "b",
    soal8: "a",
    soal9: "c",
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
        <div className=" rounded-xl shadow-lg p-7 bg-orange-600 w-full">
          <div>
            <h1 className="md:text-6xl text-lg font-semibold text-white text-center">
              Selamat mengerjakan Quiz Html
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
            <p>1. Tag untuk membuat hyperlink adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal1" id="a" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              A. &lt;Link&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="b" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              B. &lt;a&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="c" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              C. &lt;href&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal1" id="d" className="scale-110" />
            <label htmlFor="soal1" className="pl-2">
              D. &lt;url&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal2"
        >
          <div>
            <p>2. Atribut untuk membuka link di tab baru adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal2" id="a" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              A. href="_new"
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="b" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              B. target"_blank"
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="c" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              C. open="newtab"
            </label>
          </div>
          <div>
            <input type="radio" name="soal2" id="d" className="scale-110" />
            <label htmlFor="soal2" className="pl-2">
              D. link="link"
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal3"
        >
          <div>
            <p>3. Tag untuk menampilkan gambar adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal3" id="a" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              A. &lt;image&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="b" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              B. &lt;img&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="c" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              C. &lt;scr&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal3" id="d" className="scale-110" />
            <label htmlFor="soal3" className="pl-2">
              D. &lt;pic&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal4"
        >
          <div>
            <p>4. Tag heading terbesar adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal4" id="a" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              A. &lt;h6&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="b" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              B. &lt;h1&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="c" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              C. &lt;heading&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal4" id="d" className="scale-110" />
            <label htmlFor="soal4" className="pl-2">
              D. &lt;p&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal5"
        >
          <div>
            <p>5. Elemen untuk membuat daftar bernomor adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal5" id="a" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              A. &lt;ul&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="b" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              B. &lt;ol&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="c" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              C. &lt;li&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal5" id="d" className="scale-110" />
            <label htmlFor="soal5" className="pl-2">
              D. &lt;list&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal6"
        >
          <div>
            <p>6. Atribut alt pada gambar digunakan untuk...</p>
          </div>
          <div>
            <input type="radio" name="soal6" id="a" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              A. Menampilkan judul gambar
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="b" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              B. Alternatif teks jika gambar gagal dimuat
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="c" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              C. Mengatur ukuran gambar
            </label>
          </div>
          <div>
            <input type="radio" name="soal6" id="d" className="scale-110" />
            <label htmlFor="soal6" className="pl-2">
              D. Memberi efek animasi
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal7"
        >
          <div>
            <p>7. Tag untuk membuat baris baru adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal7" id="a" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              A. &lt;p&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="b" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              B. &lt;br&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="c" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              C. &lt;hr&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal7" id="d" className="scale-110" />
            <label htmlFor="soal7" className="pl-2">
              D. &lt;newline&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal8"
        >
          <div>
            <p>8. Elemen untuk membuat tabel adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal8" id="a" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              A. &lt;table&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="b" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              B. &lt;tr&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="c" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              C. &lt;td&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal8" id="d" className="scale-110" />
            <label htmlFor="soal8" className="pl-2">
              D. &lt;tab&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal9"
        >
          <div>
            <p>9. Atribut action digunakan pada elemen...</p>
          </div>
          <div>
            <input type="radio" name="soal9" id="a" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              A. &lt;a&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="b" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              B. &lt;img&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="c" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              C. &lt;form&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal9" id="d" className="scale-110" />
            <label htmlFor="soal9" className="pl-2">
              D. &lt;button&gt;
            </label>
          </div>
        </div>
        <div
          className="w-3/4 h-full  bg-white p-5 rounded-xl shadow-lg text-gray-700 font-Poppins"
          id="soal10"
        >
          <div>
            <p>10. Tag untuk membuat input teks adalah...</p>
          </div>
          <div>
            <input type="radio" name="soal10" id="a" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              A. &lt;textbox&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="b" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              B. &lt;input type="text"&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="c" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              C. &lt;text&gt;
            </label>
          </div>
          <div>
            <input type="radio" name="soal10" id="d" className="scale-110" />
            <label htmlFor="soal10" className="pl-2">
              D. &lt;field&gt;
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

export default QuizHtml;
