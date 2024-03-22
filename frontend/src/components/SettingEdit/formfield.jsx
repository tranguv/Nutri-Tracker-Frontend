import React from "react";

const FormField = ({ label, type, id, name, autoComplete, options }) => {
  return (
    <div className="mb-5 mt-50">
      <div className=" p-3 bg-slate-50 rounded items-center">
        <div className="block text-sm font-medium text-black-700">{label}</div>
        {type === "radio" ? (
          <div className="flex">
            {options.map((option) => (
              <div key={option.value} className="flex items-center me-4">
                <input
                  id={option.id}
                  name={name}
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor={option.id}
                  className="ml-1 text-sm font-medium leading-6 text-gray-900"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        ) : type === "checkbox" ? (
          <div className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {options.map((option, index) => (
              <div
                key={option.value}
                className={`w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600`}
              >
                <div className="flex items-center ps-3">
                  <input
                    id={option.id}
                    name={name}
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={option.id}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {option.label}
                  </label>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <input
            type={type}
            name={name}
            id={id}
            autoComplete={autoComplete}
            className=" p-5 block w-full rounded-md border-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        )}
      </div>
    </div>
  );
};
export default FormField;
