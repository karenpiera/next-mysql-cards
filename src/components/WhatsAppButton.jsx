// components/WhatsAppButton.js
import React from "react";

const WhatsAppButton = ({ phoneNumber }) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-blue text-white py-2 px-4 rounded-full shadow-sm shadow-black hover:shadow-md hover:shadow-black active:shadow-inner active:shadow-black">
      Contactar por WhatsApp
    </a>
  );
};

export default WhatsAppButton;

//         <WhatsAppButton phoneNumber="+543816426399" />
// importar e colocar a eleccion
