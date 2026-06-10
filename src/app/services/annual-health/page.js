export default function AnnualHealthCheckup() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Annual Health Checkup
          </h2>

          <p className="text-green-600 mt-3 font-medium">
            Preventive Corporate Health Program..
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="bg-white shadow-xl border rounded-3xl p-8 md:p-12 space-y-6">

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
            Annual Health Checkup Overview
          </h3>

          <p className="text-gray-600 leading-7">
            It helps identify health problems at an early stage, allowing timely treatment
            and potentially saving lives. Employees with a family history of chronic diseases
            benefit greatly from this program.
          </p>

          <p className="text-gray-600 leading-7">
            Early diagnosis and prevention help control health issues before they worsen,
            improving recovery chances and overall well-being.
          </p>

          <p className="text-gray-600 leading-7">
            In corporate environments, regular health checkups help detect health issues
            before they impact employee performance, making it beneficial for both employees
            and organizations.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-green-700 mb-4">
              Advantages of Full Body Health Checkup
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Reduces frequent illness and improves immunity
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Early detection of life-threatening diseases
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Improves treatment and recovery chances
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Helps monitor existing health conditions
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Enhances overall health and wellbeing
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Reduces long-term medical expenses
              </li>

              <li className="flex gap-2">
                <span className="text-green-600">✔</span>
                Keeps you updated with modern medical advancements
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}