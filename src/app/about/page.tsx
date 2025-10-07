import Image from "next/image";
import { convertToReadableDate, getAge } from "@/lib/utils";
import { birthday } from "@/lib/constants";

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

export default function About() {
  const photos: Photo[] = [
    { id: 1, src: "/pic1.jpg", alt: "img1" },
    { id: 2, src: "/pic2.jpg", alt: "img2" },
    { id: 3, src: "/pic3.jpg", alt: "img3" },
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
    age: getAge().toString(),
    birthday: convertToReadableDate(birthday),
    gender: "Male",
    occupation: "Software Engineer",
    country: "Philippines",
    nationality: "Filipino",
    languages: "Filipino, English",
  };

  return (
    <div className="flex flex-col min-h-screen shadow-lg">
      <main className="flex-grow m-5">
        <h1 className="text-[2em] font-semi-bold">About Me</h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap">
          <div className="sm:w-1/2 p-2">
            <p>
              My name is Rhedge Michael Navarro, I&apos;m {getAge()} and
              currently residing in Santo Tomas, Batangas, Philippines. I hold a
              Bachelor of Science in Information Technology (BSIT), which I
              completed in 2017. Since graduation, I&apos;ve spent 5 years in
              the IT industry, specializing in Frontend Development.
              <br />
              <br />I am fluent in both English and Filipino. I pride myself on
              having excellent communication and presentation skills.
            </p>
          </div>
          <div className="sm:w-[40%] p-2 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-1 h-[300px]">
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={photos[0].src}
                alt={photos[0].alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {photos.slice(1).map((photo) => (
              <div
                key={photo.id}
                className="relative hidden sm:block overflow-hidden rounded-lg shadow-lg md:aspect-auto"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
            {/* Still WIP: <GalleryComponent /> */}
          </div>
          <div className="sm:w-1/2 p-2">
            <h1>Personal Details</h1>
            <div className="shadow-lg overflow-hidden border border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(myData).map(([key, value], index) => (
                    <tr
                      key={key}
                      className={`
                    ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-indigo-50 hover:shadow-md transition duration-150 ease-in-out
                  `}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="sm:w-1/2 p-2">
            <h1>Educational Background</h1>
            <div className="font-sans text-sm text-gray-800 p-4">
              {educationData.map((item: EducationEntry, index: number) => (
                <div key={index} className={`flex mb-4`}>
                  <div className="w-full pr-4 font-normal">{item.category}</div>
                  <div className="w-full">
                    {item.details.map(
                      (detail: DetailItem, detailIndex: number) => (
                        <p
                          key={detailIndex}
                          className={`${detailIndex === 0 && "font-bold"}`}
                        >
                          {detail.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
