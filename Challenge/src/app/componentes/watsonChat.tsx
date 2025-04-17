'use client'

import { useEffect } from "react";

const WatsonChat = () => {
  useEffect(() => {
    (window as any).watsonAssistantChatOptions = {
      integrationID: "912587da-ee2d-48a8-9ae8-798178bfb06c",
      region: "au-syd",
      serviceInstanceID: "69313e87-b04b-4ed9-851b-09f1b8c1f691",
      onLoad: async (instance: any) => {
        await instance.render();
        // Posicionando o chat à esquerda
        setTimeout(() => {
          const chatContainer = document.querySelector(
            "div[class^='WatsonAssistantChat']"
          ) as HTMLElement;
          if (chatContainer) {
            chatContainer.style.left = "10px"; // Ajuste conforme necessário
            chatContainer.style.right = "auto";
          }
        }, 2000); // Tempo para garantir que o chat carregue
      },
    };

    setTimeout(() => {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        ((window as any).watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    }, 0);
  }, []);

  return null; // O componente não renderiza nada visível
};

export default WatsonChat;
