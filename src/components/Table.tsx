import React, { useRef, useCallback, useState } from "react";

import { useReactToPrint } from "react-to-print";

import { Printer } from "phosphor-react";
import { rip } from "./Gerador";
import { Header } from "./TableComponents/Header";
import { SubHeader } from "./TableComponents/SubHeader";
import { Cotas } from "./TableComponents/Cotas";
import { Checks } from "./TableComponents/Checks";
import { Deskbar } from "./TableComponents/Deskbar";

interface TableProps {
  item: rip;
  op: any;
}

export const Table = ({ item, op }: TableProps) => {
  const operation = op.filter((iten: rip) => iten.opName === item.opName);

  const [numberPages, setNumberPages] = useState<number>(0);
  console.log(numberPages);

  const { opName, ferramenta, cota, tolMax, tolMin, toleranciaMax, toleranciaMin, description } = item;
  const componentRef = useRef(null);

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
  });

  return (
    <>
      <div ref={componentRef} className=" flex items-center flex-col justify-center">
        <div className="flex flex-col p-4 ">
          <Header />
          <div className="flex flex-col">
            <SubHeader />
            {operation.map((item: rip, index: number) => (
              <>
                {index === 2 ? (
                  <>
                    <div className="mb-28"></div>
                    <Header />
                    <div className="mb-5"></div>
                    <SubHeader />
                  </>
                ) : null}

                {index === 4 ? (
                  <>
                    <div className="mb-28"></div>
                    <Header />
                    <div className="mb-5"></div>
                    <SubHeader />
                  </>
                ) : null}

                <Deskbar ferramenta={item.ferramenta} description={item.description} opName={item.opName} />

                <div className="flex flex-col items-center justify-center mb-5">
                  <div className="flex items-center justify-center">
                    <Cotas toleranciaMax={item.toleranciaMax} toleranciaMin={item.toleranciaMin} cota={item.cota} />
                    <Checks toleranciaMax={item.toleranciaMax} toleranciaMin={item.toleranciaMin} />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        onClick={handlePrint}
      >
        <Printer size={32} weight="fill" />
      </button>
    </>
  );
};
