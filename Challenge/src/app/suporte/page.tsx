"use client";
import BotaoDenuncia from "../componentes/botaoDenuncia";
import Script from "next/script";

export default function Suporte() {
  return (
    <>
      <Script src="https://cdn.userway.org/widget.js" data-account="wWYZXkVTsK" strategy="lazyOnload" />
      
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="w-full max-w-3xl">
          <BotaoDenuncia />

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h4 className="font-bold text-lg">SMS Denúncia</h4>
            <p className="text-sm text-gray-700">
              Envie um SMS para 
              <a href="sms:11912776323" className="text-red-700 font-semibold"> 11 91277-6323</a>
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h4 className="font-bold text-lg">Fale com a ViaMobilidade</h4>
            <p className="text-sm text-gray-700">
              Para informações sobre as linhas, achados e perdidos e atendimento nas estações, ligue para a Central de Atendimento.
            </p>
            <p className="text-xl font-bold text-red-700 mt-2">
              <a href="tel:0800-770-7106">0800 - 770 - 7106</a>
            </p>
            <p className="text-xs text-gray-500">Segunda a sexta das 06h30 às 22h00, sábado das 08h00 às 18h00</p>
            <p>
              <a href="#" className="text-red-700 font-semibold">
                <strong>Ouvidoria:</strong> entre em contato direto pelo nosso site
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
