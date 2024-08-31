import React, { useState } from "react";

function Info({ title, desc }) {
  const shortDesc = `${desc.slice(0, 300)}<br/><p class='text-gray-600 cursor-pointer hover:underline'>Read More...</p>`;
  const longDesc = `${desc}<br/><p class='text-gray-600 cursor-pointer hover:underline'>Read Less...</p>`;

  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg ">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <p
        dangerouslySetInnerHTML={{
          __html: desc.length >= 300 ? (toggle ? longDesc : shortDesc) : desc,
        }}
        className="text-gray-800 dark:text-gray-300 text-sm sm:text-base md:text-md cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />
    </div>
  );
}

export default Info;
