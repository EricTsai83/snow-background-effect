"use client";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [snowflakes, setSnowflakes] = useState<
    { left: number; top: number; width: number; time: number; blur: number }[]
  >([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const count = 50; // 設定雪花的數量
    const generatedSnowflakes = Array.from({ length: count }, () => ({
      left: Math.floor(Math.random() * container.clientWidth), // 隨機生成雪花的水平位置
      top: Math.floor(Math.random() * container.clientHeight), // 隨機生成雪花的垂直位置
      width: Math.floor(Math.random() * 50), // 隨機生成雪花的寬度
      time: Math.floor(Math.random() * 5) + 5, // 隨機生成雪花的動畫時間
      blur: Math.min(Math.floor(Math.random() * 10), 1), // 隨機生成雪花的模糊程度
    }));

    setSnowflakes(generatedSnowflakes);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-cover bg-center overflow-hidden flex justify-center items-center"
      style={{ backgroundImage: "url(/background.jpg)" }}
    >
      <h1 className="text-white text-[100px] m-0 font-snowburst">Snowy Day</h1>
      {snowflakes.map((snowflake, index) => (
        <div
          key={index}
          className="absolute bg-[url('/snow.png')] bg-cover animate-snow"
          style={{
            left: `${snowflake.left}px`,
            top: `${snowflake.top}px`,
            width: `${snowflake.width}px`,
            height: `${snowflake.width}px`,
            animationDuration: `${snowflake.time}s`,
            filter: `blur(${snowflake.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
