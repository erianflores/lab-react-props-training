import React from "react";

function Greetings({ lang, children }) {
  const greetingsMap = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  const greeting = greetingsMap[lang] || "Hello";

  return (
    <div>
      {greeting} {children}
    </div>
  );
}

export default Greetings;
