import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-5">
          
        </div>
      </div>
    </>
  );
}
