import "./globals.css";
import BuscaDestino from "./componentes/buscaDestino";
import Recentes from "./componentes/recentes";
import Mapa from "./componentes/mapa";


export default function Home() {
  return (
    <>
    <script src="https://cdn.userway.org/widget.js" data-account="wWYZXkVTsK"></script>
      
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

