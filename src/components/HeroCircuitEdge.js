'use client';

import { useState, useEffect, useCallback, useMemo, useRef, useLayoutEffect } from 'react';

const CHIP_DESKTOP_PX = 270;
const CHIP_MOBILE_PX = 128;
const MOBILE_BREAKPOINT = 768;
const VIEW_W = 3000;

const SPARK_COLORS = ['#116DFF', '#FF9C5A', '#22c55e', '#a855f7', '#06b6d4', '#f472b6', '#eab308', '#ef4444', '#ffffff', '#34d399', '#fb7185', '#818cf8'];

function randomSparkColor() {
  if (Math.random() < 0.75) {
    return SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)];
  }
  return `hsl(${Math.floor(Math.random() * 360)}, 88%, 62%)`;
}

function buildLoopSparks(traceCount, isMobile) {
  const count = isMobile ? 16 : 32;

  return Array.from({ length: count }, (_, i) => ({
    id: `spark-${i}`,
    pathIndex: Math.floor(Math.random() * traceCount),
    color: randomSparkColor(),
    duration: 2.8 + Math.random() * 4.2,
    begin: Math.random() * 8,
    size: isMobile ? 2 + Math.random() * 2.2 : 1.8 + Math.random() * 2.8,
  }));
}

function getChipPx(width) {
  return width <= MOBILE_BREAKPOINT ? CHIP_MOBILE_PX : CHIP_DESKTOP_PX;
}

function buildTraces(chipLeft, chipRight, chipHeight) {
  const y = (ratio) => Math.round(chipHeight * ratio);
  const right = (d) => d;
  const left = (d) => d;

  const rightTraces = [
    right(`M ${chipRight} ${y(0.2)} L ${chipRight + 180} ${y(0.2)} L ${chipRight + 180} ${y(0.08)} L ${chipRight + 420} ${y(0.08)} L ${chipRight + 420} ${y(0.2)} L ${VIEW_W} ${y(0.2)}`),
    right(`M ${chipRight} ${y(0.32)} L ${chipRight + 120} ${y(0.32)} L ${chipRight + 120} ${y(0.44)} L ${chipRight + 340} ${y(0.44)} L ${chipRight + 340} ${y(0.32)} L ${VIEW_W} ${y(0.32)}`),
    right(`M ${chipRight} ${y(0.44)} L ${chipRight + 260} ${y(0.44)} L ${chipRight + 260} ${y(0.56)} L ${chipRight + 560} ${y(0.56)} L ${chipRight + 560} ${y(0.44)} L ${VIEW_W} ${y(0.44)}`),
    right(`M ${chipRight} ${y(0.56)} L ${chipRight + 150} ${y(0.56)} L ${chipRight + 150} ${y(0.68)} L ${chipRight + 480} ${y(0.68)} L ${chipRight + 480} ${y(0.56)} L ${VIEW_W} ${y(0.56)}`),
    right(`M ${chipRight} ${y(0.38)} L ${chipRight + 370} ${y(0.38)} L ${chipRight + 370} ${y(0.14)} L ${chipRight + 800} ${y(0.14)} L ${chipRight + 800} ${y(0.38)} L ${VIEW_W} ${y(0.38)}`),
    right(`M ${chipRight} ${y(0.62)} L ${chipRight + 210} ${y(0.62)} L ${chipRight + 210} ${y(0.74)} L ${chipRight + 520} ${y(0.74)} L ${chipRight + 520} ${y(0.62)} L ${VIEW_W} ${y(0.62)}`),
  ];

  const leftTraces = [
    left(`M ${chipLeft} ${y(0.2)} L ${chipLeft - 180} ${y(0.2)} L ${chipLeft - 180} ${y(0.08)} L ${chipLeft - 420} ${y(0.08)} L ${chipLeft - 420} ${y(0.2)} L 0 ${y(0.2)}`),
    left(`M ${chipLeft} ${y(0.32)} L ${chipLeft - 120} ${y(0.32)} L ${chipLeft - 120} ${y(0.44)} L ${chipLeft - 340} ${y(0.44)} L ${chipLeft - 340} ${y(0.32)} L 0 ${y(0.32)}`),
    left(`M ${chipLeft} ${y(0.44)} L ${chipLeft - 260} ${y(0.44)} L ${chipLeft - 260} ${y(0.56)} L ${chipLeft - 560} ${y(0.56)} L ${chipLeft - 560} ${y(0.44)} L 0 ${y(0.44)}`),
    left(`M ${chipLeft} ${y(0.56)} L ${chipLeft - 150} ${y(0.56)} L ${chipLeft - 150} ${y(0.68)} L ${chipLeft - 480} ${y(0.68)} L ${chipLeft - 480} ${y(0.56)} L 0 ${y(0.56)}`),
    left(`M ${chipLeft} ${y(0.38)} L ${chipLeft - 370} ${y(0.38)} L ${chipLeft - 370} ${y(0.14)} L ${chipLeft - 800} ${y(0.14)} L ${chipLeft - 800} ${y(0.38)} L 0 ${y(0.38)}`),
    left(`M ${chipLeft} ${y(0.62)} L ${chipLeft - 210} ${y(0.62)} L ${chipLeft - 210} ${y(0.74)} L ${chipLeft - 520} ${y(0.74)} L ${chipLeft - 520} ${y(0.62)} L 0 ${y(0.62)}`),
  ];

  return [...rightTraces, ...leftTraces];
}

export default function HeroCircuitEdge() {
  const chipRef = useRef(null);
  const [chipPx, setChipPx] = useState(CHIP_DESKTOP_PX);
  const [chipWidth, setChipWidth] = useState(CHIP_DESKTOP_PX);
  const [isMobile, setIsMobile] = useState(false);
  const [sparks, setSparks] = useState([]);

  const chipCenterX = VIEW_W / 2;
  const chipLeft = chipCenterX - chipWidth / 2;
  const chipRight = chipCenterX + chipWidth / 2;
  const chipImageX = chipCenterX - chipWidth / 2;

  const tracePaths = useMemo(
    () => buildTraces(chipLeft, chipRight, chipPx),
    [chipLeft, chipRight, chipPx]
  );

  const syncLayout = useCallback(() => {
    const width = window.innerWidth;
    const mobile = width <= MOBILE_BREAKPOINT;
    const px = getChipPx(width);
    setIsMobile(mobile);
    setChipPx(px);

    if (chipRef.current) {
      setChipWidth(chipRef.current.offsetWidth || px);
    } else {
      setChipWidth(px);
    }
  }, []);

  useEffect(() => {
    syncLayout();
    window.addEventListener('resize', syncLayout, { passive: true });
    return () => window.removeEventListener('resize', syncLayout);
  }, [syncLayout]);

  useLayoutEffect(() => {
    syncLayout();
  }, [chipPx, syncLayout]);

  useEffect(() => {
    setSparks(buildLoopSparks(tracePaths.length, isMobile));

    const interval = window.setInterval(() => {
      setSparks((prev) =>
        prev.map((spark) =>
          Math.random() < 0.22
            ? {
                ...spark,
                color: randomSparkColor(),
                pathIndex: Math.floor(Math.random() * tracePaths.length),
                duration: 2.8 + Math.random() * 4.2,
              }
            : spark
        )
      );
    }, 1800);

    return () => window.clearInterval(interval);
  }, [tracePaths.length, isMobile]);

  return (
    <div className="hero-chip-center" style={{ height: `${chipPx}px` }} aria-hidden="true">
      <img
        ref={chipRef}
        src="/chip.png"
        alt=""
        className="chip-measure"
        style={{ height: `${chipPx}px` }}
        onLoad={syncLayout}
      />
      <svg
        className="hero-circuit-svg"
        viewBox={`0 0 ${VIEW_W} ${chipPx}`}
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="sparkGlow">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="chipShadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.55" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#116DFF" floodOpacity="0.15" />
          </filter>
        </defs>

        {tracePaths.map((d, i) => (
          <path
            key={`trace-${i}`}
            d={d}
            fill="none"
            stroke={i % 3 === 0 ? 'rgba(17, 109, 255, 0.32)' : i % 3 === 1 ? 'rgba(255, 156, 90, 0.26)' : 'rgba(255, 255, 255, 0.12)'}
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        ))}

        <image
          href="/chip.png"
          x={chipImageX}
          y={0}
          height={chipPx}
          width={chipWidth}
          preserveAspectRatio="xMidYMid meet"
          filter="url(#chipShadow)"
        />

        {sparks.map((spark) => (
          <g key={spark.id} filter="url(#sparkGlow)">
            <circle r={spark.size + 4} fill={spark.color} opacity="0.2">
              <animateMotion
                dur={`${spark.duration}s`}
                path={tracePaths[spark.pathIndex]}
                repeatCount="indefinite"
                begin={`${spark.begin}s`}
                calcMode="linear"
              />
            </circle>
            <circle r={spark.size} fill={spark.color}>
              <animateMotion
                dur={`${spark.duration}s`}
                path={tracePaths[spark.pathIndex]}
                repeatCount="indefinite"
                begin={`${spark.begin}s`}
                calcMode="linear"
              />
              <animate
                attributeName="opacity"
                values="0;0.95;0.95;0.75;0"
                keyTimes="0;0.05;0.82;0.94;1"
                dur={`${spark.duration}s`}
                repeatCount="indefinite"
                begin={`${spark.begin}s`}
              />
            </circle>
          </g>
        ))}
      </svg>

      <style jsx>{`
        .hero-chip-center {
          position: relative;
          width: 100%;
          max-width: 100vw;
          margin: 0 auto;
          z-index: 7;
          pointer-events: none;
          overflow: visible;
        }

        .hero-circuit-svg {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }

        .chip-measure {
          position: absolute;
          visibility: hidden;
          pointer-events: none;
          width: auto;
          left: -9999px;
        }

        @media (max-width: 768px) {
          .hero-chip-center {
            margin-top: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-chip-center :global(animateMotion),
          .hero-chip-center :global(animate) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
