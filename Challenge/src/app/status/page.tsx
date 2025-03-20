"use client";

export default function status() {
  return (
    <>
      <script src="https://cdn.userway.org/widget.js" data-account="wWYZXkVTsK"></script>
      <div className="container mx-auto p-4">
      <div className="search-bar mb-4">
          <input type="text" placeholder="🔍 Busque uma estação" className="w-full p-2 border rounded-lg shadow-sm" />
      </div>
      <div className="status-list grid grid-cols-1 gap-4">

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#011289"}}>1</div>
          <div className="ml-4">
            <div className="font-semibold">Azul</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#01775A"}}>2</div>
          <div className="ml-4">
            <div className="font-semibold">Verde</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#F51200"}}>3</div>
          <div className="ml-4">
            <div className="font-semibold">Vermelha</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#F9A800"}}>4</div>
          <div className="ml-4">
            <div className="font-semibold">Amarela</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#9A3784"}}>5</div>
          <div className="ml-4">
            <div className="font-semibold">Lilás</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#C80857"}}>7</div>
          <div className="ml-4">
            <div className="font-semibold">Rubi</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#949488"}}>8</div>
          <div className="ml-4">
            <div className="font-semibold">Diamante</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#F59E0B"}}>Circulação de trens</div>
            <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#50B8A1"}}>9</div>
          <div className="ml-4">
            <div className="font-semibold">Esmeralda</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#EF4444"}}>Falta de energia</div>
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#40B0C1"}}>10</div>
          <div className="ml-4">
            <div className="font-semibold">Turquesa</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#FF7F50"}}>11</div>
          <div className="ml-4">
            <div className="font-semibold">Coral</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#F97316"}}>Obras na via</div>
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#1F2086"}}>12</div>
          <div className="ml-4">
            <div className="font-semibold">Safira</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>

      <a href="#" className="no-underline text-black">
        <button className="status-item flex items-center p-4 border rounded-lg shadow-md w-full cursor-pointer transition-all duration-200 hover:shadow-lg hover:transform hover:-translate-y-1">
          <div className="w-10 h-10 flex items-center justify-center text-white font-bold rounded-full" style={{backgroundColor: "#29B352"}}>13</div>
          <div className="ml-4">
            <div className="font-semibold">Jade</div>
          </div>
          <div className="ml-auto flex items-center">
            <div className="text-sm mr-2 font-bold" style={{color: "#4CAF50"}}>Operação normal</div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
          </div>
        </button>
      </a>
      </div>
    </div>
  </>
  );
}

