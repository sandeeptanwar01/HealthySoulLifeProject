export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://www.shutterstock.com/image-photo/contact-us-sign-virtual-screen-260nw-377799817.jpg"
              alt="Healthy SoulLife"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <span className="text-teal-500 font-semibold uppercase tracking-wider">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-gray-800">
              Short Story About Healthy SoulLife
            </h2>

            <p className="text-gray-600 mb-8 leading-7">
              Healthy SoulLife is dedicated to assisting all of our clients in
              living the healthiest lives possible. We provide a number of
              services to help them achieve these goals. Take a peek at some of
              the services we offer for health checkups and wellness.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>
                  We are a wellness company that provides you with a one-stop
                  shop for all medical needs.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>
                  For PAN India locations, we have agreements with all NABL and
                  ISO-recognized centres.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>
                  We have around 2000+ centres on our panel across India,
                  including tier 1, tier 2, and tier 3 cities.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>
                  You will be given a uniform price for all locations in India.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>
                  Our mission is to provide wellness services to corporates at
                  affordable prices.
                </span>
              </li>
            </ul>

            <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}