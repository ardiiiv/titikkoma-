import Navbar from "../components/Layouts/NavBar";
import Footer from "../components/Layouts/Footer";
import { FaPhone } from "react-icons/fa6";
import { RiMapPin2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import Button from "../components/Elements/Button";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzENnVFrnOo94a5bNNlSoDK99LUSrCp7TC5ifvak6Ryr2kd1tfx5L06s2iyxsAueOJ6Fg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        alert("Pesan berhasil dikirim!");
        e.target.reset();
      } else {
        alert("Gagal mengirim pesan, coba lagi.");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi error saat mengirim pesan.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div>
        <Navbar />
      </div>
      <div className="w-full flex flex-col text-gray-700 text-lg font-Poppins h-full">
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-10/12 bg-Contact bg-cover bg-top h-3/5 relative rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-xl shadow-lg"></div>
            <div className="relative w-10/12 mx-auto flex items-center h-full">
              <div>
                <h1 className="md:text-6xl text-3xl text-white font-semibold text-center py-2">
                  Contact Us
                </h1>
                <p className="text-center text-white">
                  Kami sangat terbuka untuk setiap masukan, saran, maupun
                  pertanyaan yang ingin Anda sampaikan. Hubungi kami melalui
                  form atau informasi kontak di bawah ini, dan kami akan
                  berusaha membalas secepat mungkin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex items-center">
          <div className="w-10/12 md:grid md:grid-cols-2 flex flex-col gap-4 mx-auto">
            <div className="p-5">
              <div className="flex flex-col md:gap-10 gap-5">
                <div>
                  <h1 className="md:text-5xl text-2xl font-semibold py-2">
                    Get In Touch
                  </h1>
                  <p className="text-base md:text-lg">
                    Jika ada yang ingin ditanyakan atau disampaikan, jangan ragu
                    untuk menghubungi kami melalui kontak yang tersedia. Kami
                    selalu senang mendengar masukan untuk perbaikan dan
                    pengembangan ke depannya.
                  </p>
                </div>
                <div className="grid grid-rows-3 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-700 rounded-full p-2">
                      <RiMapPin2Fill className="md:text-2xl text-lg text-white" />
                    </div>
                    <div>
                      <h3 className=" font-medium text-base md:text-lg">
                        Address
                      </h3>
                      <p className="text-gray-500 text-base md:text-lg">
                        Surakata, Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-700 rounded-full p-2">
                      <FaPhone className="md:text-2xl text-lg text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">
                        Phone Number
                      </h3>
                      <p className="text-gray-500 text-base md:text-lg">
                        +62 82136256265
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-700 rounded-full p-2">
                      <MdEmail className="md:text-2xl text-lg text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-base md:text-lg">
                        Email
                      </h3>
                      <p className="text-gray-500 text-base md:text-lg">
                        ardivirapakca@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <hr className="w-full border-2 border-solid border-gray-700" />
                </div>
                <div>
                  <div className="pb-2">
                    <h3 className="font-medium">Follow Us :</h3>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-gray-700 rounded-full p-2">
                      <RiInstagramLine className="md:text-2xl text-lg text-white" />
                    </div>
                    <div className="bg-gray-700 rounded-full p-2">
                      <FaTiktok className="md:text-2xl text-lg text-white" />
                    </div>
                    <div className="bg-gray-700 rounded-full p-2">
                      <FaFacebookF className="md:text-2xl text-lg text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full pb-10 md:pb-0">
              <div className="w-11/12 h-full bg-white rounded-xl shadow-lg mx-auto md:p-8 p-0">
                <div className="flex flex-col gap-4 p-6">
                  <div>
                    <h1 className="md:text-5xl text-2xl font-semibold">
                      Send Message
                    </h1>
                  </div>
                  <div>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-8"
                    >
                      <div>
                        <input
                          type="text"
                          name="name"
                          className="border-b-2 border-solid border-gray-700 w-full outline-0  py-2 text-gray-700 placeholder:text-gray-700 placeholder:md:text-xl placeholder:font-medium placeholder:text-lg"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          className="border-b-2 border-solid border-gray-700 w-full outline-0 py-2 text-gray-700 placeholder:text-gray-700 placeholder:md:text-xl placeholder:font-medium placeholder:text-lg"
                          placeholder="Email Address"
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          id="message"
                          className="w-full border-b-2 border-solid border-gray-700 outline-0 text-base placeholder:text-gray-700 placeholder:md:text-xl placeholder:font-medium placeholder:text-lg"
                          placeholder="Message"
                          rows={4}
                        ></textarea>
                      </div>
                      <div>
                        <p className="text-sm md:text-base">
                          Dengan mengirim pesan, Anda setuju bahwa data yang
                          dimasukkan akan digunakan untuk menanggapi pertanyaan
                          atau masukan yang Anda berikan melalui website ini.
                        </p>
                      </div>
                      <div className="self-end">
                        <Button
                          background="bg-gray-700"
                          hover="hover:bg-gray-600"
                          children="Message"
                          rounded="rounded-3xl"
                          type="submit"
                        />
                      </div>
                    </form>
                  </div>
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

export default Contact;
