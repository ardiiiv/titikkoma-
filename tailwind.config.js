/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FiraCode: ["Fira Code", "monospace"],
        Poppins: ["Poppins", "Sans-serif"],
      },
      backgroundImage: {
        Student: "url('/Student.jpg')",
        Classroom: "url('/Student2.jpg')",
        Contact: "url('/Contact.jpg')",
        html: "url('/html.jpg')",
        Css: "url('/Css.jpg')",
        JS: "url('/JavaScript.jpg')",
        Studying: "url('/Student3.jpg')",
        Learning: "url('/Learning.jpg')",
      },
    },
  },
  plugins: [],
};
