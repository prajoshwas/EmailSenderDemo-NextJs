import styles from "../../styles/Home.module.css";
import { PhotoIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Main() {
  return (
    <div className={styles.container}>
      <form className="container max-w-3xl">
        <div className="col-span-full mt-5">
          <label
            htmlFor="receipient"
            className="block font-medium text-gray-900">
            Receipient :
          </label>
          <div className="mt-2">
            <div className="border-none flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <div class="relative inset-y-0 left-0 flex items-center pointer-events-none">
                <EnvelopeIcon
                  className="mx-auto size-6 text-gray-300"
                  fill="currentColor"
                />
              </div>
              <input
                type="text"
                name="receipient"
                id="receipient"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="col-span-full mt-5">
          <label htmlFor="CC" className="block font-medium text-gray-900">
            CC :
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                type="text"
                name="CC"
                id="CC"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div className="col-span-full mt-5">
          <label htmlFor="label" className="block font-medium text-gray-900">
            Subject :
          </label>
          <div className="mt-2">
            <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div className="col-span-full mt-5">
          <label
            htmlFor="message"
            className="block text-sm/6 font-medium text-gray-900">
            Message :
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 min-h-96"
              placeholder={"Enter Message"}
            />
          </div>
        </div>
        <div className="col-span-full mt-6">
          <label
            htmlFor="attachment"
            className="block text-sm/6 font-medium text-gray-900">
            Attachment
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon
                aria-hidden="true"
                className="mx-auto size-12 text-gray-300"
              />
              <div className="mt-4 flex text-sm/6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Add attachment</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs/5 text-gray-600">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900">
            Cancel
          </button>
          <input
            type="button"
            value="Send"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </div>
      </form>
    </div>
  );
}
