import Image from "next/image";
import React from "react";

const Card = ({ icon, title, description, className, iconClassName }) => {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-transform duration-300 ${className}`}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className={`mb-4 ${iconClassName || ""}`} 
        />
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};


export default Card;
