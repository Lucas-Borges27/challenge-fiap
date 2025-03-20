"use client";

import { useState } from "react";

export default function BuscaDestino() {
    const [destino, setDestino] = useState("");

    return (
        <div className="relative flex items-center w-100 mx-auto mt-5">
            <input 
                type="text"
                value={destino}
                onChange={(e) => setDestino(e.target.value)}
                placeholder="Para onde deseja ir?"
                className="w-full  px-4 py-2 rounded-full border border-gray-300 text-lg"
            /> 
        </div>
    );
}
