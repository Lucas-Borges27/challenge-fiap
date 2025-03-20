import "./globals.css";
import BuscaDestino from "./componentes/buscaDestino";
import Recentes from "./componentes/recentes";
import Mapa from "./componentes/mapa";


export default function Home() {
  return (
    <>
      
      <main>
        <div>
          <BuscaDestino />
          <Recentes/>
          <Mapa/>
        </div>
      </main>
      

      
    </>
  );
}

