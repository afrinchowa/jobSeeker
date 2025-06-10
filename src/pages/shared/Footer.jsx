import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex flex-col md:flex-row justify-between items-center gap-10 bg-neutral text-neutral-content px-10 py-12">
      <div className="flex items-center gap-4">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current text-white"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515..."></path>
        </svg>
        <div>
          <h2 className="text-lg font-bold">ACME Industries Ltd.</h2>
          <p className="text-sm">Providing reliable tech since 1992</p>
        </div>
      </div>

      <div className="text-center md:text-right">
        <h6 className="footer-title mb-2 text-white">Follow Us</h6>
        <div className="flex gap-5 justify-center md:justify-end">
          <a
            href="#"
            className="hover:text-sky-400 transition-colors duration-200"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828..."></path>
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631..."></path>
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642..."></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
