"use client";

const steps: { img: string; title: string; description: string }[] = [
  {
    img: "/workflow/upload.webp",
    title: "User Uploads the Image",
    description:
      "The user selects an image from their device and uploads it to the portal.",
  },
  {
    img: "/workflow/resize-icon.webp",
    title: "We Receive the Image",
    description:
      "Once uploaded, the image is securely received and stored on our server. ",
  },

  {
    img: "/workflow/cnc-code.webp",
    title: "Resize and Generate CNC Code",
    description:
      "The image is scaled proportionally to fit the engraving material dimensions.",
  },
  {
    img: "/workflow/manufacturing.webp",
    title: "Start Engraving Process",
    description:
      "Once the G-code is generated, the CNC machine begins the engraving process.",
  },
];

function Card({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className={` flex flex-col items-center justify-center rounded-lg shadow-md p-4 border w-80 max-xl:w-full gap-2 transition-transform duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg select-none`}
    >
      <img src={img} alt="" />
      <p className="font-semibold text-2xl">{title}</p>
      <p className="text-xl">{description}</p>
    </div>
  );
}

export default function CNCEngravingSteps() {
  return (
    <div className="relative w-full  mx-auto  flex flex-row max-xl:flex-col max-xl:items-center items-stretch justify-center text-center gap-8 ">
      {steps.map((step, index) => (
        <Card
          key={index}
          img={step.img}
          title={step.title}
          description={step.description}
        />
      ))}
    </div>
  );
}
