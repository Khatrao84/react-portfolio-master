const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.youtube.com/channel/UC5WjFrtBdufl6CZojX3D8dQ"
        target="_blank"
        rel="noreferrer"
      >
      <img alt="LinkedIN" src="assets/linkedin.png" />  
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/Tesla"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Twitter" src="assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/TeslaMotorsCorp/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Facebook" src="assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/teslamotors/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="Instagram" src="assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
