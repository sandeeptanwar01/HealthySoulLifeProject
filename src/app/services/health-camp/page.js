export default function HealthCamp() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Health Camp
          </h2>

          <p className="text-green-600 mt-3 font-medium">
            Community Health Awareness Program
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white shadow-xl border rounded-3xl p-8 md:p-12 space-y-6">

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Health Camp Overview
          </h3>

          <p className="text-gray-600 leading-7">
            The primary goal of health camps is to encourage long-term healthy habits
            and increase awareness about common diseases, hygiene, nutrition, family planning,
            and sanitation. It helps improve access to basic healthcare services.
          </p>

          <p className="text-gray-600 leading-7">
            Health camps are especially conducted for underprivileged communities who lack
            access to healthcare facilities or awareness about diseases they may be suffering from.
          </p>

          <p className="text-gray-600 leading-7">
            The main objective is to provide early treatment for life-threatening conditions
            and follow medical ethics to ensure proper healthcare support for everyone.
          </p>

          {/* OBJECTIVES */}
          <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6">

            <h4 className="text-xl font-semibold text-green-700 mb-4">
              Other Objectives
            </h4>

            <ul className="space-y-3 text-gray-700">

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Provide quality medical services to the community
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Increase awareness about communicable & non-communicable diseases
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Train people for better health and hygiene practices
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Identify social and health challenges and work to eliminate them
              </li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}