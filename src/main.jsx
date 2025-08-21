import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import ContactSection from "./pages/ContactSection";
import QuizSection from "./pages/QuizSection";
import LearningHtml from "./pages/LearningHml";
import LearningCss from "./pages/LearningCSS";
import LearningJs from "./pages/LearningJs";
import QuizHtml from "./pages/QuizHtml";
import QuizCss from "./pages/QuizCss";
import QuizJs from "./pages/QuizJs";
import MyClass from "./pages/MyClass";
import Event from "./pages/EventSection";
import "devicon/devicon.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeSection />,
  },
  {
    path: "/About",
    element: <AboutSection />,
  },
  {
    path: "/Contact",
    element: <ContactSection />,
  },
  {
    path: "/Quiz",
    element: <QuizSection />,
  },
  {
    path: "/LearningHtml",
    element: <LearningHtml />,
  },
  {
    path: "/LearningCss",
    element: <LearningCss />,
  },
  {
    path: "/LearningJs",
    element: <LearningJs />,
  },
  {
    path: "/QuizHtml",
    element: <QuizHtml />,
  },
  {
    path: "/QuizCss",
    element: <QuizCss />,
  },
  {
    path: "/QuizJs",
    element: <QuizJs />,
  },
  {
    path: "/Myclass",
    element: <MyClass />,
  },
  {
    path: "/Event",
    element: <Event />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
