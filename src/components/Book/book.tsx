import React from "react";
import { useFlipBook } from "../../hooks/useFlipbook";
import Paper from "./paper";

import NavigationButton from "./navigation-button";
import { paperData } from "../../types/paperConfig";
import PageContent from "../../pages/pageContent";
import { Button } from "../common/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const Book: React.FC = () => {
  const {
    currentLocation,
    goNextPage,
    goPrevPage,
    isFlipped,
    getZIndex,
    getBookTransform,
    maxLocation,
  } = useFlipBook(paperData.length);

  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [dragStart, setDragStart] = React.useState(0);
  const [dragOffset, setDragOffset] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const papers = paperData.map((paper) => ({
    id: paper.id,
    front: <PageContent front={paper.front} />,
    back: <PageContent back={paper.back} />,
  }));

  const allCards = papers.flatMap((paper) => [paper.front, paper.back]);

  const handleNextCard = () => {
    if (currentCardIndex < allCards.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentCardIndex((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handlePrevCard = () => {
    if (currentCardIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setCurrentCardIndex((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isTransitioning) return;
    const deltaX = e.touches[0].clientX - dragStart;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (isTransitioning) return;
    setIsDragging(false);
    const threshold = 80;

    if (dragOffset > threshold && currentCardIndex > 0) {
      handlePrevCard();
    } else if (
      dragOffset < -threshold &&
      currentCardIndex < allCards.length - 1
    ) {
      handleNextCard();
    }
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isTransitioning) return;
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isTransitioning) return;
    const deltaX = e.clientX - dragStart;
    setDragOffset(deltaX);
  };

  const handleMouseUp = () => {
    if (isTransitioning) return;
    setIsDragging(false);
    const threshold = 80;

    if (dragOffset > threshold && currentCardIndex > 0) {
      handlePrevCard();
    } else if (
      dragOffset < -threshold &&
      currentCardIndex < allCards.length - 1
    ) {
      handleNextCard();
    }
    setDragOffset(0);
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentCardIndex;
    const offset = isDragging ? dragOffset : 0;

    if (diff === -1) {
      return {
        transform: `translateX(calc(-100% - 20px + ${offset}px)) scale(0.9)`,
        opacity: 0.5,
        zIndex: 1,
        pointerEvents: "none" as const,
      };
    }

    if (diff === 0) {
      return {
        transform: `translateX(${offset}px) scale(1)`,
        opacity: 1,
        zIndex: 3,
        pointerEvents: "auto" as const,
      };
    }

    if (diff === 1) {
      return {
        transform: `translateX(calc(100% + 20px + ${offset}px)) scale(0.9)`,
        opacity: 0.5,
        zIndex: 1,
        pointerEvents: "none" as const,
      };
    }

    return {
      transform: `translateX(${diff > 0 ? "200%" : "-200%"}) scale(0.8)`,
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none" as const,
    };
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-powderblue to-orange-200 font-sans p-4">
      <div className="md:hidden w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <div
          className="relative w-full flex justify-center items-center"
          style={{ height: "70vh" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            if (isDragging) {
              handleMouseUp();
            }
          }}
        >
          {allCards.map((card, index) => {
            const style = getCardStyle(index);
            const diff = Math.abs(index - currentCardIndex);

            if (diff > 1) return null;

            return (
              <div
                key={index}
                className="absolute bg-white rounded-2xl shadow-2xl overflow-hidden select-none"
                style={{
                  width: "85%",
                  maxWidth: "380px",
                  height: "100%",
                  ...style,
                  transition: isDragging
                    ? "none"
                    : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                  cursor: index === currentCardIndex ? "grab" : "default",
                  touchAction: "none",
                }}
              >
                <div className="w-full h-full">{card}</div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center mt-6 px-4 w-full max-w-sm">
          <Button
            onClick={handlePrevCard}
            disabled={currentCardIndex === 0 || isTransitioning}
            className="w-14 h-14 bg-white text-powderblue rounded-full shadow-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all flex items-center justify-center text-2xl active:scale-95"
          >
            <FaArrowLeft className="h-3 w-3 text-black" />
          </Button>
          <div className="flex gap-2">
            {allCards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentCardIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
          <Button
            onClick={handleNextCard}
            disabled={
              currentCardIndex === allCards.length - 1 || isTransitioning
            }
            className="w-14 h-14 bg-white text-powderblue rounded-full shadow-lg font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all flex items-center justify-center text-2xl active:scale-95"
          >
            <FaArrowRight className="h-3 w-3 text-black" />
          </Button>
        </div>
      </div>

      <div className="hidden md:flex md:flex-col md:justify-center md:items-center">
        <div
          id="book"
          className="book relative w-[350px] h-[500px] transition-transform duration-1000 mb-8"
          style={{ transform: getBookTransform() }}
        >
          {papers.map((paper, index) => (
            <Paper
              key={paper.id}
              id={paper.id}
              frontContent={paper.front}
              backContent={paper.back}
              isFlipped={isFlipped(index + 1)}
              zIndex={getZIndex(index + 1)}
            />
          ))}
        </div>

        <NavigationButton
          goPrevPage={goPrevPage}
          goNextPage={goNextPage}
          currentLocation={currentLocation}
          maxLocation={maxLocation}
        />
      </div>
    </div>
  );
};
export default Book;
