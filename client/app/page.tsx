import Crousel from "@/components/Crousel";
import GetStartedButton from "@/components/GetStartedButton";
import TypedText from "@/components/TypedText";
import WorkFlowOverview from "@/components/WorkFlowOverview";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen   text-gray-800 w-full pt-4 max-xl:gap-10 gap-20 pb-20 max-xl:px-2">
      <div className="flex flex-row max-xl:flex-col max-xl:text-center items-center justify-between max-xl:justify-center px-20 w-full">
        <div className="flex flex-col xl:items-start justify-center max-xl:gap-8">
          {" "}
          <h1 className="text-7xl max-lg:text-4xl max-xl:text-6xl font-extrabold mb-4">
            <b>Welcome to </b> <br />
            <TypedText texts={["Code", "and", "Engrave", "CodeNGrave"]} />
          </h1>
          <p className="text-2xl max-lg:text-lg font-mono text-gray-800 w-xl max-xl:-mb-8">
            Transform your{" "}
            <span className="text-slate-700 font-semibold">memories</span> into
            precise{" "}
            <span className="text-slate-700 font-semibold">
              laser engravings
            </span>
            .{" "}
            <b className="max-lg:hidden">
              Upload an image, generate G-Code, and bring your designs to life.
            </b>
          </p>
          <GetStartedButton text={"Get Started"} navigationLink={"cnc-tool"} />{" "}
        </div>
        <Crousel images={["/engrave.png", "/engrave2.png", "/engrave3.png"]} />
      </div>
      <section className="flex flex-col items-center justify-between font-inter mt-10 gap-16">
        <h1 className="text-4xl max-xl:text-3xl max-xl:text-center font-bold text max-xl:px-5">
          How We Bring Designs/Moments to Life
        </h1>
        <WorkFlowOverview />
      </section>
      <div className="flex flex-col items-center justify-center text-center gap-12 bg-[#cddbea] p-10 rounded-2xl shadow-md xl:w-[900px] ">
        <p className="text-4xl max-xl:text-2xl font-bold text-[#2c3e50]">
          Try Our <span className="text-[#4b6cb7]">Free</span> CNC Tool ✨
        </p>
        <p className="text-[24px] max-xl:text-lg text-[#526980] leading-relaxed">
          Want to <b className="text-[#2c3e50]">engrave</b> your favorite
          design? 🛠️✨ Upload an image in{" "}
          <b className="text-[#2c3e50]">PNG or JPG format</b>, and let our{" "}
          <span className="text-[#4b6cb7]">free</span> CNC tool generate precise
          <b className="text-[#4b6cb7]"> G-code </b> for you! ⚙️💡
          <br />
          Whether you&apos;re a <b className="text-[#2c3e50]">hobbyist</b> or a{" "}
          <b className="text-[#2c3e50]">pro</b>, our tool helps you turn ideas
          into reality.
          <br /> Just <b className="text-[#2c3e50]">upload your image</b>, and
          watch it transform into{" "}
          <b className="text-[#4b6cb7]">CNC-ready code</b>! 🚀
          <br />
          <b className="text-[#4b6cb7]">
            No charges, no hidden fees—just pure innovation! 🔥
          </b>
        </p>
        <a href="/cnc-tool">
          <button className="text-[20px] py-3 px-6 bg-[#4b6cb7] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#3a539b] hover:scale-110 transition-all duration-300">
            Upload & Convert 🔄
          </button>
          s
        </a>
      </div>
    </main>
  );
}
