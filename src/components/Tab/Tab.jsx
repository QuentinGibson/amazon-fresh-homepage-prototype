import logo from '../../amazon-logistics-logo.png'
import { useContext } from 'react';
import { activeStatusContext } from 'App';
const Tab = () => {
  const [activeStatus, setActiveStatus] = useContext(activeStatusContext)
  return (
    <>
      <header>
        <img src={logo} alt="Amazon Logistics logo" width={300} />
      </header>
      <div className="mx-auto container py-8 px-4 flex items-center justify-center w-full">
        <ul className="w-full hidden md:flex items-center justify-center pb-2 border-b border-gray-200">
          <li
            onClick={() => setActiveStatus("All")}
            className={
              activeStatus === "All"
                ? "py-2 px-4 cursor-pointer bg-yellow-100 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-center text-yellow-700"
                : "py-2 px-4 cursor-pointer bg-transparent hover:bg-yellow-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"
            }
          >
            All
          </li>
          <li
            onClick={() => setActiveStatus("Inbound")}
            className={
              activeStatus === "Inbound"
                ? "py-2 px-4 cursor-pointer ml-24 bg-yellow-100 ease-in duration-150 rounded  text-xs xl:text-sm leading-none text-center text-yellow-700"
                : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-yellow-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"
            }
          >
            Inbound
          </li>
          <li
            onClick={() => setActiveStatus("Outbound")}
            className={
              (activeStatus === "Outbound" || activeStatus === "Bullpen Hero" || activeStatus === "Returns")
                ? "py-2 px-4 cursor-pointer bg-yellow-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-yellow-700"
                : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-yellow-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"
            }
          >
            Outbound
          </li>
          <li
            onClick={() => setActiveStatus("Compliance")}
            className={
              activeStatus === "Compliance"
                ? "py-2 px-4 cursor-pointer bg-yellow-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-yellow-700"
                : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-yellow-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"
            }
          >
            Compliance
          </li>
          <li
            onClick={() => setActiveStatus("Misc")}
            className={
              activeStatus === "Misc"
                ? "py-2 px-4 cursor-pointer bg-yellow-100 ease-in duration-150 rounded ml-24  text-xs xl:text-sm leading-none text-center text-yellow-700"
                : "py-2 px-4 cursor-pointer ml-24 bg-transparent hover:bg-yellow-50 ease-in duration-150 rounded text-xs xl:text-sm leading-none text-gray-600"
            }
          >
            Misc
          </li>
        </ul>
        <div className="md:hidden relative w-11/12 mx-auto bg-white rounded">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-selector"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select
            aria-label="Selected tab"
            className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
          >
            <option
              selected
              onClick={() => {
                setActiveStatus("All")
              }}
              className="text-sm text-gray-600"
            >
              All
            </option>
            <option
              className="text-sm text-gray-600"
              onClick={() => {
                setActiveStatus("Outbound")
              }}
            >
              Outbound
            </option>
            <option
              className="text-sm text-gray-600"
              onClick={() => {
                setActiveStatus('Inbound')
              }}
            >
              Inbound
            </option>
            <option
              className="text-sm text-gray-600"
              onClick={() => {
                setActiveStatus('Compliance')
              }}
            >
              Compliance
            </option>
            <option
              className="text-sm text-gray-600"
              onClick={() => {
                setActiveStatus('Misc')
              }}
            >
              Misc
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Tab;
