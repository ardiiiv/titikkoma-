import Card from "../Fragments/Card";
import HtmlIcon from "../../assets/html5-original.svg";
import JsIcon from "../../assets/javascript-original.svg";
import CSS from "../../assets/css3-original.svg";
import Button from "../Elements/Button/index";
import { Link } from "react-router-dom";

export const CardLearning = () => {
  return (
    <div className="flex w-full md:flex-row flex-col gap-6">
      <Card
        image={HtmlIcon}
        alt="Html5"
        judul="Html5"
        colorJudul="text-orange-600"
        text="Membuat struktur dasar sebuah halaman web menggunakan HTML5, mulai dari elemen teks, gambar, hingga form interaktif"
        button={
          <Button
            background="bg-orange-500"
            hover="hover:bg-orange-400"
            rounded="rounded-lg"
          >
            <Link to="/LearningHtml">Learn</Link>
          </Button>
        }
      />
      <Card
        image={CSS}
        alt="CSS"
        judul="CSS"
        colorJudul="text-blue-500"
        text=" mengatur tampilan halaman web dengan CSS, dari warna, ukuran font, hingga tata letak yang responsif dan menarik."
        button={
          <Button
            background="bg-blue-500"
            hover="hover:bg-blue-400"
            rounded="rounded-lg"
          >
            <Link to="/LearningCss">Learn</Link>
          </Button>
        }
      />
      <Card
        image={JsIcon}
        alt="JavaScript"
        judul="JavaScript"
        colorJudul="text-yellow-400"
        text="memahami logika pemrograman dengan JavaScript untuk membuat website yang interaktif, dinamis, dan lebih hidup."
        button={
          <Button
            background="bg-yellow-400"
            hover="hover:bg-yellow-300"
            rounded="rounded-lg"
          >
            <Link to="/LearningJs">Learn</Link>
          </Button>
        }
      />
    </div>
  );
};

export const CardQuiz = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4">
      <Card
        image={HtmlIcon}
        alt="Html5"
        judul="Html5"
        colorJudul="text-orange-600"
        text="Pelajari dasar-dasar HTML untuk membangun kerangka halaman web, lalu uji pemahamanmu lewat quiz singkat."
        button={
          <Button
            background="bg-orange-500"
            hover="hover:bg-orange-400"
            rounded="rounded-lg"
          >
            <Link to="/QuizHtml">Quiz</Link>
          </Button>
        }
      />
      <Card
        image={CSS}
        alt="CSS"
        judul="CSS"
        colorJudul="text-blue-500"
        text="Kenali CSS untuk mengatur warna, gaya, dan tata letak halaman web. Lanjutkan dengan quiz untuk menguji kemampuanmu."
        button={
          <Button
            background="bg-blue-500"
            hover="hover:bg-blue-400"
            rounded="rounded-lg"
          >
            <Link to="/QuizCss">Quiz</Link>
          </Button>
        }
      />
      <Card
        image={JsIcon}
        alt="JavaScript"
        judul="JavaScript"
        colorJudul="text-yellow-400"
        text="Mulai memahami JavaScript agar halaman lebih interaktif dan dinamis. Akhiri dengan quiz sederhana untuk latihan."
        button={
          <Button
            background="bg-yellow-400"
            hover="hover:bg-yellow-300"
            rounded="rounded-lg"
          >
            <Link to="/QuizJs">Quiz</Link>
          </Button>
        }
      />
    </div>
  );
};
