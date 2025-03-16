import GetStartedButton from "@/components/GetStartedButton";
import ImageUploadModal from "@/components/ImageUploadModal";
import TypedText from "@/components/TypedText";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8 text-center">
      <h1 className="text-5xl font-extrabold mb-4">
        Welcome to{" "}
        <TypedText texts={["Code", "and", "EnGrave", "CodeNGrave"]} />
      </h1>
      <p className="text-lg text-gray-300 max-w-xl">
        Transform your{" "}
        <span className="text-blue-300 font-semibold">memories</span> into
        precise{" "}
        <span className="text-blue-300 font-semibold">laser engravings</span>.
        Upload an image, generate G-Code, and bring your designs to life.
      </p>
      <GetStartedButton />{" "}
    </div>
  );
}
