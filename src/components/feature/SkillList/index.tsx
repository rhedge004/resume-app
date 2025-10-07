import { convertMonthsToYears } from "@/lib/utils";
import React from "react";

export interface Skills {
  name: string;
  value: number;
  monthExperience: number;
}

export const skills: Skills[] = [
  {
    name: "ReactJS",
    value: 10,
    monthExperience: 60,
  },
  {
    name: "React Native",
    value: 10,
    monthExperience: 36,
  },
  {
    name: "NextJS",
    value: 10,
    monthExperience: 24,
  },
  {
    name: "AngularJS",
    value: 5.5,
    monthExperience: 12,
  },
  {
    name: "Java",
    value: 5.5,
    monthExperience: 24,
  },
  {
    name: "Spring Boot",
    value: 4.5,
    monthExperience: 18,
  },
  {
    name: "Typescript",
    value: 10,
    monthExperience: 48,
  },

  {
    name: "Javascript",
    value: 10,
    monthExperience: 84,
  },
  {
    name: "Symfony",
    value: 2.5,
    monthExperience: 6,
  },
  {
    name: "HTML",
    value: 10,
    monthExperience: 84,
  },
  {
    name: "CSS",
    value: 10,
    monthExperience: 84,
  },
  {
    name: "Tailwind",
    value: 10,
    monthExperience: 36,
  },
  {
    name: "Python",
    value: 5,
    monthExperience: 24,
  },
  {
    name: "MySQL/SQL",
    value: 8,
    monthExperience: 48,
  },
];

export default function SkillList() {
  const MAX_RATING = 10;
  const BLUE_500 = "#3B82F6";
  const GRAY_300 = "#D1D5DB";
  const SkillRating: React.FC<Skills> = ({ name, value, monthExperience }) => {
    const safeRating = Math.min(Math.max(0, value), MAX_RATING);

    const rectangles = Array.from({ length: MAX_RATING }, (_, index) => {
      const rectangleValue = index + 1;
      let rectangleContent;
      const baseClasses = "w-5 h-3 mx-0.5";

      if (rectangleValue <= safeRating) {
        rectangleContent = (
          <div
            className={`${baseClasses} bg-blue-500`}
            aria-label="Fully filled rectangle"
          />
        );
      } else if (rectangleValue - 0.5 === safeRating) {
        rectangleContent = (
          <div
            className={baseClasses}
            style={{
              background: `linear-gradient(to right, ${BLUE_500} 50%, ${GRAY_300} 50%)`,
            }}
            aria-label="Half-filled rectangle"
          />
        );
      } else {
        rectangleContent = (
          <div
            className={`${baseClasses} bg-gray-300`}
            aria-label="Empty rectangle"
          />
        );
      }

      return <React.Fragment key={index}>{rectangleContent}</React.Fragment>;
    });

    return (
      <div className="p-1 mb-1">
        <div className="flex flex-wrap justify-between">
          <h2>{name}</h2>
          <h2>{convertMonthsToYears(monthExperience)}</h2>
        </div>
        <div className="flex items-center">{rectangles}</div>
      </div>
    );
  };
  return (
    <div>
      {skills.map((skill: Skills, index: number) => (
        <div key={index} className="p-2">
          <SkillRating {...skill} />
        </div>
      ))}
    </div>
  );
}
