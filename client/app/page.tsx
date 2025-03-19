import GetStartedButton from "@/components/GetStartedButton";
import ImageUploadModal from "@/components/ImageUploadModal";
import TypedText from "@/components/TypedText";
import WorkFlowOverview from "@/components/WorkFlowOverview";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white w-full pt-10">
      <div className="flex flex-row items-center justify-between px-10 w-full">
        <div className="flex flex-col items-start justify-center">
          {" "}
          <h1 className="text-6xl font-extrabold mb-4">
            <b className="text-7xl">Welcome to</b> <br />
            <TypedText texts={["Code", "and", "Engrave", "CodeNGrave"]} />
          </h1>
          <p className="text-lg text-gray-300 max-w-xl">
            Transform your{" "}
            <span className="text-blue-300 font-semibold">memories</span> into
            precise{" "}
            <span className="text-blue-300 font-semibold">
              laser engravings
            </span>
            . Upload an image, generate G-Code, and bring your designs to life.
          </p>
          <GetStartedButton />{" "}
        </div>
        <img src="/engraving.png" width={700} alt="" />
      </div>
      <WorkFlowOverview />
    </div>
  );
}
