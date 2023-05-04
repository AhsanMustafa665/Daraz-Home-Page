import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const MessageModal = () => {
  return (
    <div className="modalBg">
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box bg-slate-300">
          <p className="flex justify-center items-center text-[#f85606] text-xl mb-2">
            <img
              className=""
              width={100}
              src="https://o.remove.bg/downloads/00427eeb-bc3c-4c1b-95d8-bb46857e46f8/images-removebg-preview.png"
              alt=""
            />
          </p>

          <h3 class="text-black text-[11.9px] px-3 py-1 text-lg ml-32 rounded-md drop-shadow-lg border border-gray-500 inline">
            Start a new conversation
          </h3>
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2 text-[#f85606]"
          >
            ✕
          </label>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-5"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm  bg-slate-700 border-0 focus:border focus:border-orange-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-white"
              placeholder="Type your email"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-3"
            >
              Password
            </label>
            <input
              type="password"
              id="subject"
              class="block p-3 w-full text-sm text-white bg-slate-700 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light  border-0 focus:border focus:border-orange-500"
              placeholder="Type your password"
              required
            />
          </div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-3"
          >
            Message/Feedback
          </label>
          <textarea
            class="textarea textarea-error lg:w-[463px] w-[420px] border-0 focus:border focus:border-orange-500 outline-0 text-white"
            placeholder="Type your messages"
          ></textarea>
          <div class="modal-action">
            <label for="my-modal-6" class="btn bg-slate-700">
              <AiOutlineSend className="text-[#f85606]" size={20} />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
