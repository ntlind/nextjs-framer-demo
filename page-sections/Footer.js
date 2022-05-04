import React from "react";

export default function Footer() {
  return (
    <div id="footer" className={"pt-10 pb-6"}>
      <div className="flex justify-between text-contrast">
        <div>
          <a
            href="https://github.com/ntlind/nextjs-framer-demo"
            target="_blank"
            className="slide-middle slide-middle active"
          >
            Source
          </a>
        </div>
        <div>© 2022 Nick Lind</div>
      </div>
    </div>
  );
}
