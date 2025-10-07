import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { birthday } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAge() {
  const birthDateString = birthday;
  const today = new Date();
  const birthDate = new Date(birthDateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export const convertToReadableDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export function convertMonthsToYears(months: number): string {
  if (typeof months !== "number" || months < 0 || !isFinite(months)) {
    console.error(
      "Invalid input: Please provide a non-negative number for months."
    );
    return ""; // Return empty to prevent errors
  }

  const monthsInAYear = 12;
  if (months >= monthsInAYear) {
    const years = months / monthsInAYear;
    return years + " " + `${years === 1 ? "year" : "years"}`;
  } else {
    return months + " " + `${months === 1 ? "month" : "months"}`;
  }
}
