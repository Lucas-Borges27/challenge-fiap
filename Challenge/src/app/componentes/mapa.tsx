"use client";

export default function Mapa() {
    return (
        <div className="my-5 mx-auto w-[80%] max-w-[1500px] flex justify-center items-center">
            <iframe
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.287482432738!2d-46.65539072468329!3d-23.561399578807597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c794a7aa7f%3A0xb829a724a0e0f972!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1715632070583!5m2!1spt-BR!2sbr"
                className="w-[80%] h-[400px] rounded-lg border-none"
                allowFullScreen
            ></iframe>
        </div>
    );
}