import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import WorkShop from "../assets/WorkShop.jpg";
import Webminar from "../assets/Webminar.jpg";
import Kompetisi from "../assets/Kompetisi.jpg";

const Event = () => {
  const events = [
    {
      title: "Workshop HTML & CSS Dasar",
      date: "25 November 2025",
      time: "09.00 AM - 12.00 PM WIB",
      desc: "Belajar dasar HTML dan CSS untuk membuat halaman web statis.",
      img: WorkShop,
    },
    {
      title: "Webinar JavaScript Interaktif",
      date: "1 Februari 2025",
      time: "13.00 PM - 15.00 PM WIB",
      desc: "Memahami logika pemrograman JavaScript dan interaktivitas web.",
      img: Webminar,
    },
    {
      title: "Kompetisi Mini Project React",
      date: "10 April 2025",
      time: "10.00 AM - 16.00 PM WIB",
      desc: "Buat mini project dengan React dan tampilkan karya terbaikmu.",
      img: Kompetisi,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-gray-700 text-lg font-Poppins">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-10/12 bg-Learning bg-cover bg-top h-3/5 relative rounded-xl shadow-lg">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl shadow-lg"></div>
          <div className="relative w-10/12 mx-auto flex items-center h-full">
            <div>
              <h1 className="md:text-6xl text-3xl text-white font-semibold text-center py-4">
                Event
              </h1>
              <p className="text-center text-base md:text-lg text-white">
                Ikuti berbagai kegiatan menarik seperti workshop, webinar, dan
                kompetisi coding yang akan datang. Jangan lewatkan kesempatan
                untuk belajar dan berkembang bersama!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <div className="w-11/12 mx-auto py-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="text-sm text-gray-500 italic mb-3">
                  {event.time}
                </p>
                <p className="text-gray-600">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Event;
