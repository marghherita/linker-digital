"use client";

import React, { useEffect } from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bottom-0  border-t-2 py-6 text-center border-primary lg:fixed md:fixed  h-fit w-full text-sm text-cardHover">
      Copyright © {year} Linker Digital. Tutti i diritti riservati.
    </div>
  );
}

export default Footer;
