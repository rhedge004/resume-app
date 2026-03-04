"use client";
import Image from "next/image";
import { basePath, convertToReadableDate, getAge } from "@/lib/utils";
import { birthday, workStartDate } from "@/lib/constants";
import clsx from "clsx";

interface MyData {
  [key: string]: string;
}

interface DetailItem {
  text: string;
  isBold?: boolean;
}

interface EducationEntry {
  category: string;
  details: DetailItem[];
}

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { id: 1, src: `${basePath}/pic1.jpg`, alt: "img1" },
  { id: 2, src: `${basePath}/pic2.jpg`, alt: "img2" },
  { id: 3, src: `${basePath}/pic3.jpg`, alt: "img3" },
];

const educationData: EducationEntry[] = [
  {
    category: "Tertiary",
    details: [
      { text: "La Consolacion College, Tanauan", isBold: true },
      { text: "Bachelor of Science in Information Technology (BSIT)" },
      { text: "A. Mabini Avenue, Tanauan City, Batangas 4232" },
      { text: "June 2013 - March 2017" },
    ],
  },
  {
    category: "Secondary",
    details: [
      { text: "Santa Clara National Highschool", isBold: true },
      { text: "Santa Clara, Santo Tomas, Batangas 4234" },
      { text: "June 2008 - March 2012" },
    ],
  },
  {
    category: "Primary",
    details: [
      { text: "Almond Academy Foundation Inc.", isBold: true },
      { text: "San Fernando, Santo Tomas, Batangas 4234" },
    ],
  },
];

const myData: MyData = {
  name: "Rhedge Michael Navarro",
  age: getAge(birthday).toString(),
  birthday: convertToReadableDate(birthday),
  gender: "Male",
  occupation: "Software Engineer",
  country: "Philippines",
  nationality: "Filipino",
  languages: "Filipino, English",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-6xl animate-in fade-in duration-700">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <div className="h-1 w-20 bg-blue-500 mt-2 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Text & Personal Info) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-lg text-gray-700 leading-relaxed">
                My name is{" "}
                <span className="font-semibold text-gray-900">
                  Rhedge Michael Navarro
                </span>
                , I&apos;m {getAge(birthday)} and currently residing in Santo
                Tomas, Batangas, Philippines. I hold a Bachelor of Science in
                Information Technology (BSIT), which I completed in 2017. Since
                graduation, I&apos;ve spent {getAge(workStartDate)} years in the
                IT industry, specializing in Frontend Development.
                <br />
                <br />I am fluent in both English and Filipino. I pride myself
                on having excellent communication and presentation skills.
              </p>
            </div>

            {/* Personal Details */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Personal Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {Object.entries(myData).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-100 pb-2">
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {key}
                    </span>
                    <span className="block text-base font-medium text-gray-800 mt-1">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Educational Background */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Educational Background
              </h2>
              <div className="space-y-8">
                {educationData.map((item: EducationEntry, index: number) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-200 last:border-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.category}
                    </h3>
                    <div className="space-y-1">
                      {item.details.map(
                        (detail: DetailItem, detailIndex: number) => (
                          <p
                            key={detailIndex}
                            className={clsx(
                              "text-sm",
                              detail.isBold
                                ? "font-semibold text-gray-800"
                                : "text-gray-600",
                            )}
                          >
                            {detail.text}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Photos) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-2 gap-4 sticky top-8">
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-md group">
                <Image
                  src={photos[0].src}
                  alt={photos[0].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {photos.slice(1).map((photo) => (
                <div
                  key={photo.id}
                  className="relative h-40 rounded-2xl overflow-hidden shadow-md group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
