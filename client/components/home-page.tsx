"use client";

export default function HomePage() {
  return (
    <>
      <div className="w-full h-screen bg-black">
        <div className="text-gray-300 w-full flex justify-center items-center mt-6 mb-10 text-xl">
          Welcome to Omegle clone
        </div>
        <div className="mt-3.5 w-full flex justify-center items-center">
          <div className="flex flex-col gap-3">
            {/* input */}
            <div>
              <input
                type="text"
                id="username"
                maxLength={20}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body rounded-[10px]"
                placeholder="Enter username"
                required
              />
            </div>

            {/* btn submit */}
            <button
              onClick={() => (window.location.href = "/chat")}
              className="bg-white text-gray-900 px-3 py-1.5 active:scale-95 transition-all duration-200 rounded-[10px] cursor-pointer"
            >
              Talk to strangers
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
