import React, { useState } from "react";

const CustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="mb-3 flex gap-3">
        {/* Button to open the modal */}
        <button
          onClick={openModal}
          className="rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
          type="button"
        >
          Open Modal XS
        </button>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
            <div className="relative m-4 p-4 w-1/4 rounded-lg bg-red-200 shadow-sm">
              {/* Modal Header */}
              <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
                It&apos;s a simple modal.
              </div>

              {/* Modal Body */}
              <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </div>

              {/* Modal Footer */}
              <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
                <button
                  onClick={closeModal}
                  className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="rounded-md bg-green-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                  type="button"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomModal;
