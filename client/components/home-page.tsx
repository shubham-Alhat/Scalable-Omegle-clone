"use client";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="text-gray-300 w-full flex justify-center items-center mt-6 mb-10 text-xl">
          Welcome to Omegle clone
        </div>
        <div className="mt-3.5 w-full flex justify-center items-center">
          <button
            onClick={() => (window.location.href = "/chat")}
            className="bg-white text-gray-900 px-3 py-1.5 active:scale-95 transition-all duration-200 rounded-[10px] cursor-pointer"
          >
            Talk to strangers
          </button>
        </div>
      </div>
    </>
  );
}
