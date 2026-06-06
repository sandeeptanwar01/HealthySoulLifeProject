export default function MissionSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Content */}
          <div className="px-6 lg:px-12 py-10">
            <span className="text-teal-500 font-semibold uppercase tracking-wider">
              Our Mission
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-8">
              Better Information, Better Health
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  Our AIM
                </h3>
                <p className="text-gray-600 leading-7">
                  Our aim is to provide our customers with the best medical
                  facilities, constant care, and reliable support.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-7">
                  Our vision is to provide health services in rural areas that
                  are as convenient as those in cities, allowing people to live
                  more active lifestyles with less stress.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-7">
                  Our mission is to inspire individuals and contribute to their
                  health and well-being by providing the best care possible. We
                  provide a hygienic, standard, and accredited centre to improve
                  medical care by enhancing quality and assisting customers with
                  simple solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200"
              alt="Healthcare Mission"
              className="w-full h-[600px] object-cover"
            />
          </div>

        </div>
      </div>

      {/* Decorative Shape */}
      <div className="hidden lg:block absolute left-0 bottom-0 opacity-20">
        <div className="w-40 h-40 bg-teal-300 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}