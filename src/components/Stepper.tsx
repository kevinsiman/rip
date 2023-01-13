import React from "react";

interface Stepper {
  page: number;
  setPage: (type: any) => void;
}

export const Stepper = ({ setPage, page }: Stepper) => {
  console.log(page);
  return (
    <div className="flex justify-center">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li onClick={() => setPage(1)} className="mr-2">
          <a
            href="#"
            className={
              page === 1
                ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            }
          >
            Cabeçalho
          </a>
        </li>
        <li onClick={() => setPage(0)} className="mr-2">
          <a
            href="#"
            className={
              page === 0
                ? "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50"
            }
          >
            Cotas
          </a>
        </li>
        <li className="mr-2">
          <a href="#" className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Estatisticas
          </a>
        </li>
        <li className="mr-2">
          <a href="#" className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
            Produtos
          </a>
        </li>
      </ul>
    </div>
  );
};
