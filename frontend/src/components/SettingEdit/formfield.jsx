import React from "react";

const FormField = ({ label, type, id, name, autoComplete, options }) => {
  return (
    <div className="ml-[650px] mt-[100px] col-span-full">
      <div className="w-96 h-12 p-3 bg-slate-50 rounded flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch text-black-300 text-base font-medium font-serif leading-6 tracking-tight">
          {label}
        </div>
        {type === "radio" ? (
          <div className="mt-2 space-y-2">
            {options.map((option) => (
              <div key={option.value} className="flex items-center gap-x-3">
                <input
                  id={option.id}
                  name={name}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor={option.id}
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        ) : type === "checkbox" ? (
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {options.map((option, index) => (
              <li
                key={option.value}
                className={`w-full border-b border-gray-200 ${
                  index === 0 ? "rounded-t-lg" : ""
                } dark:border-gray-600`}
              >
                <div className="flex items-center ps-3">
                  <input
                    id={option.id}
                    name={name}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor={option.id}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
};
export default FormField;
