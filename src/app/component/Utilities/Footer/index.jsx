const { default: Image } = require("next/image");

const Footer = () => {
  return (
    <footer className="bg-blue-500">
      <div className="mx-10">
        <h1 className="font-bold text-lg py-2">Social Media</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
          <div>
            Sosmed 1
            <Image
              src="https://placehold.co/600x400/png"
              alt="..."
              width={400}
              height={400}
            />
          </div>
          <div>
            Sosmed 2
            <Image
              src="https://placehold.co/600x400/png"
              alt="..."
              width={400}
              height={400}
            />
          </div>
          <div>
            Sosmed 3
            <Image
              src="https://placehold.co/600x400/png"
              alt="..."
              width={400}
              height={400}
            />
          </div>
          <div>
            Sosmed 4
            <Image
              src="https://placehold.co/600x400/png"
              alt="..."
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="text-center py-10">
          <p>Copyright &copy; 2024 || Create by Artiko</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
