export const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/galembeck"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/github.svg"
              alt="GitHub"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/pedro-galembeck"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/linkedin.svg"
              alt="LinkedIn"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://instagram.com/galembeckx"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="/assets/instagram.svg"
              alt="Instagram"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        &copy; {new Date().getFullYear()} Pedro Galembeck. All rights reserved.
      </p>
    </section>
  );
};
