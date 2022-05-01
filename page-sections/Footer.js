import React from "react";

export default function Footer() {
  return (
    <div className="bg-nearBlack text-white">
      <div
        id="footer"
        className={
          "max-w-screen-xl	mx-auto h-16 lg:px-40 px-6 flex flex-col justify-center"
        }
      >
        <div className="flex justify-between font-thin uppercase text-sm">
          <div>
            <a
              href="https://github.com/ntlind/nextjs-minimalist-websume"
              target="_blank"
            >
              Source
            </a>
          </div>
          <div>© 2022 Nick Lind</div>
        </div>
      </div>
    </div>
  );
}
