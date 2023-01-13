import React from "react";
import Image from "next/image";
import { HeaderType } from "../Gerador";

import metalerLogo from "../../images/logo.png";
import { StaticImageData } from "next/image";

interface HeaderProps {
  headerInfo: HeaderType;
}

export const Header = ({ headerInfo }: HeaderProps) => {
  const { elaborador, liberado, peca, op: ordem, cliente, qtd } = headerInfo;
  console.log(metalerLogo.src);

  return (
    <>
      <div>
        <table className="w-full mt-5">
          <tbody>
            <tr>
              <td className="px-20 border border-zinc-900 text-center border-b-1 relative" rowSpan={3}>
                <Image fill src="https://i.ibb.co/hXZPxw8/METALER-NOVA.png" alt="Logo" />
              </td>
              <td className="border border-b-1 border-zinc-900 bg-zinc-300 text-center font-bold" colSpan={3}>
                REGISTRO DE INSPEÇÃO PERIÓDICA
              </td>
              <td className="px-10 border border-zinc-900 text-center border-b-1 text-sm" rowSpan={3}>
                <p className="font-bold whitespace-nowrap">FOR-PRO-001</p>
                <p>REVISAO 1</p>
                <p>21/11/2022</p>
              </td>
            </tr>
            <tr>
              <td className="border border-b-1 border-zinc-900 bg-zinc-300 text-center font-semibold">ELABORADOR</td>
              <td className="px-6 text-center"></td>
              <td className="border border-zinc-900 text-center border-b-1 bg-zinc-300 font-semibold">LIBERADO</td>
            </tr>

            <tr>
              <td className="w-[50%] border border-zinc-900 text-center border-b-1">{elaborador.toLocaleUpperCase()}</td>
              <td className="text-center"></td>
              <td className="w-[50%] border border-zinc-900 text-center border-b-1">{liberado.toLocaleUpperCase()}</td>
            </tr>
            <tr>
              <td colSpan={5} className=" border border-yellow-300 bg-yellow-300 text-center font-bold">
                ANOTAR A MEDIDA DE HORA EM HORA
              </td>
            </tr>
          </tbody>
        </table>

        <table className="w-full">
          <tbody>
            <tr>
              <td className="border border-b-0 border-zinc-900 text-center bg-zinc-300 font-semibold">PEÇA</td>
              <td className="border border-b-0 border-zinc-900 text-center font-semibold text-red-600">{peca.toLocaleUpperCase()}</td>
              <td className="border border-b-0 border-zinc-900 text-center bg-zinc-300 font-semibold">QTD</td>
              <td className="border border-b-0 border-zinc-900 text-center font-semibold text-red-600">{qtd}</td>
              <td className="border border-b-0 border-zinc-900 text-center bg-zinc-300 font-semibold">OP</td>
              <td className="border border-b-0 border-zinc-900 text-center font-semibold text-red-600">{ordem.toLocaleUpperCase()}</td>
              <td className="border border-b-0 border-zinc-900 text-center bg-zinc-300 font-semibold">CLIENTE</td>
              <td className="border border-b-0 border-zinc-900 text-center font-semibold text-red-600">{cliente.toLocaleUpperCase()}</td>
            </tr>
            <tr>
              <td className="border border-zinc-900 text-center bg-zinc-300 font-semibold" colSpan={2}>
                PROCESSO
              </td>
              <td className=" border border-zinc-900 text-left px-1" colSpan={2}></td>
              <td className="border border-zinc-900 text-center bg-zinc-300 font-semibold" colSpan={2}>
                EQUIPAMENTO
              </td>
              <td className="border border-zinc-900 text-left px-1" colSpan={2}></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
