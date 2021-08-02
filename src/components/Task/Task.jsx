import amazonA from '../../amazon_a.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function setClipboard(value) {
    const tempInput = document.createElement("input");
    tempInput.style = "position: absolute; left: -1000px; top: -1000px";
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
}

const Task = ({category, title, desc, url}) => {
    return (
      <>
        <div className="rounded border-gray-300 dark:border-gray-700 border border-2">
          <div className="max-w-sm py-6 relative rounded shadow bg-white dark:bg-gray-800">
            <div className="px-6">
              <div className="w-20 h-20 mt-1 rounded-full absolute flex items-center justify-center bg-gray-100">
                <img src={amazonA} alt="Amazon A Logo" />
              </div>
              <div className="flex justify-end">
                <svg
                  className="sm:mt-4 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 46 11"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.5 5.5C35.5 8.26 37.74 10.5 40.5 10.5C43.26 10.5 45.5 8.26 45.5 5.5C45.5 2.74 43.26 0.5 40.5 0.5C37.74 0.5 35.5 2.74 35.5 5.5ZM28 5.5C28 2.74 25.76 0.5 23 0.5C20.24 0.5 18 2.74 18 5.5C18 8.26 20.24 10.5 23 10.5C25.76 10.5 28 8.26 28 5.5ZM5.5 0.5C8.26 0.5 10.5 2.74 10.5 5.5C10.5 8.26 8.26 10.5 5.5 10.5C2.74 10.5 0.5 8.26 0.5 5.5C0.5 2.74 2.74 0.5 5.5 0.5Z"
                    fill="#6B7280"
                  />
                </svg>
              </div>
            </div>
            <div className="border-t-2 px-6 pt-14 sm:mt-3 mt-8 border-gray-200 dark:border-gray-800">
              <p className="sm:text-lg text-base font-semibold leading-4 text-gray-500 dark:text-gray-400">
                {category}
              </p>
              <p className="sm:text-lg text-base font-bold leading-5 text-gray-800 dark:text-gray-100 pt-4">
                {title}
              </p>
              <p className="sm:text-sm text-xs leading-5 text-gray-500 dark:text-gray-400 pt-2">
                {desc}
              </p>
            </div>
            <div className="flex justify-center mt-3">
              <a
                href={url}
                className="mx-2 my-2 bg-yellow-500 transition duration-150 ease-in-out hover:bg-yellow-400 rounded text-white px-8 py-3 text-sm flex items-center"
              >
                <span className="h-4 w-4 mr-2">
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                </span>
                Open
              </a>
              <button 
                className="mx-2 my-2 flex items-center bg-white transition duration-150 ease-in-out hover:border-gray-700 hover:text-gray-600 rounded border border-gray-600 text-gray-500 pl-3 pr-6 py-2 text-sm"
                onClick={() => setClipboard(url)} 
                >
                <span className="h-4 w-4 mr-2">
                  <FontAwesomeIcon icon={faShare} />
                </span>
                <input type="hidden" value={url} name="hiddenUrl" />
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </>
    );
};
export default Task;

