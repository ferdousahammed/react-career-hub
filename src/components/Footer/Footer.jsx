const Footer = () => {
  return (
    <footer className="p-10 bg-black text-gray-200">
      <div className="lg:mx-[12%] mx-[5%] flex gap-16 justify-between flex-col lg:flex-row">
        <div>
          <h3 className="text-white text-3xl font-extrabold mb-5">CareerHub</h3>
          <p className="max-w-80">
            Unleash potential with expert guidance, resources, and job
            opportunities. Your gateway to professional growth and success.
          </p>
        </div>
        <div className="flex gap-16 flex-wrap">
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
