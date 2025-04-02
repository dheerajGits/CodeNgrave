import Crousel from "@/components/Crousel";
import GetStartedButton from "@/components/GetStartedButton";
import ImageUploadModal from "@/components/ImageUploadModal";
import TypedText from "@/components/TypedText";
import WorkFlowOverview from "@/components/WorkFlowOverview";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#e8f1f8]  text-gray-800 w-full pt-10">
      <div className="flex flex-row items-center justify-between px-20 w-full">
        <div className="flex flex-col items-start justify-center">
          {" "}
          <h1 className="text-7xl font-extrabold mb-4">
            <b className="text-7xl">Welcome to</b> <br />
            <TypedText texts={["Code", "and", "Engrave", "CodeNGrave"]} />
          </h1>
          <p className="text-2xl  font-mono text-gray-800 max-w-xl">
            Transform your{" "}
            <span className="text-slate-700 font-semibold">memories</span> into
            precise{" "}
            <span className="text-slate-700 font-semibold">
              laser engravings
            </span>
            . Upload an image, generate G-Code, and bring your designs to life.
          </p>
          <GetStartedButton />{" "}
        </div>
        <Crousel images={["/engrave.png", "/engrave2.png", "/engrave3.png"]} />
      </div>
      <section className="flex flex-col items-center justify-between font-inter mt-10 gap-10">
        <h1 className="text-5xl text">How We Bring Designs/Moments to Life</h1>
        <WorkFlowOverview />
      </section>
    </main>
  );
}
