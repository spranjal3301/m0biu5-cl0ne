import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 md:px-6 bg-white border-t border-gray-100">
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Mobius Services LLC</h3>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Image
                    src="https://ext.same-assets.com/3633050338/3767979809.png"
                    alt="Location icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm text-gray-600">
                    1875 Mission St Ste 103 #450
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>

                <div className="flex items-center">
                  <Image
                    src="https://ext.same-assets.com/3633050338/1625838089.png"
                    alt="Phone icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <p className="text-sm text-gray-600">Tel: 650-889-6026</p>
                </div>

                <div className="flex items-center">
                  <Image
                    src="https://ext.same-assets.com/3633050338/3651993112.png"
                    alt="Email icon"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <Link
                    href="mailto:finance@mobiusengine.ai"
                    className="text-sm text-primary hover:underline"
                  >
                    finance@mobiusengine.ai
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="https://ext.same-assets.com/3633050338/2139970902.png"
                alt="Mobius Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
              />

              <div className="flex space-x-4 mt-4">
                <Link
                  href="https://www.reddit.com/r/mobiusengine/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://ext.same-assets.com/3633050338/1166128607.png"
                    alt="Reddit"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/mobiusservices/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://ext.same-assets.com/3633050338/1729228624.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            <Image
              src="https://ext.same-assets.com/3633050338/900374243.png"
              alt="Copyright icon"
              width={12}
              height={12}
              className="inline mr-1"
            />
            2023 Mobiusservices LLC
          </p>

          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
