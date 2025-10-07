import { useEffect } from "react";
import { Header } from "./components/layout/header";
import { MainLayout } from "./components/layout/main-layout";
import { Sidebar } from "./components/sidebar/sidebar";
import confetti from "canvas-confetti";

import Book from "./components/Book/book";
import { TOTAL_CONTRIBUTIONS } from "./constants/contribution";

export default function App() {
  const handleWeaveNewCard = () => {
    console.log("Weave new card clicked");
  };
  useEffect(() => {
    const leftConfetti = () => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ["#14b8a6", "#f97316", "#3b82f6", "#ec4899", "#fbbf24"],
      });
    };

    const rightConfetti = () => {
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ["#14b8a6", "#f97316", "#3b82f6", "#ec4899", "#fbbf24"],
      });
    };

    const timer = setTimeout(() => {
      leftConfetti();
      rightConfetti();

      setTimeout(() => {
        leftConfetti();
        rightConfetti();
      }, 200);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="my-font">
        <Header />
        <MainLayout
          sidebar={
            <Sidebar
              contributionsCount={TOTAL_CONTRIBUTIONS}
              onWeaveNewCard={handleWeaveNewCard}
            />
          }
        >
          <Book />
        </MainLayout>
      </div>
    </>
  );
}
