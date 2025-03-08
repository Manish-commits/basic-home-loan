import Link from "next/link";
import React from "react";

const Button = ({path }) => {
  return (
    <Link
      href={path}
      className="px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg "
    >
      Get Posts
    </Link>
  );
};

export default Button;
