export default function PreHealth() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* HERO TITLE */}
        <div className="text-center mb-14">
          <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900">
            Pre-Health Checkup
          </h1>

          <p className="text-green-600 mt-3 text-lg">
            Employee Wellness Screening Program
          </p>
        </div>

        {/* MAIN CONTENT BOX */}
        <div className="bg-white shadow-lg p-10 lg:p-14 space-y-8">

          {/* INTRO */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Overview
            </h2>

            <p className="text-gray-600 leading-7">
              Screening provides an overview of employees’ physical and emotional wellbeing.
              It ensures individuals are physically and mentally fit to perform their job.
            </p>

            <p className="text-gray-600 leading-7 mt-4">
              A healthy workforce leads to better productivity. Regular health checkups help
              identify issues early before they affect performance.
            </p>
          </div>

          {/* EMPLOYEE BENEFITS */}
          <div className="bg-green-50 p-8">
            <h3 className="text-xl font-semibold text-green-700 mb-5">
              Benefits to Employees
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Reduces stress and improves physical performance</li>
              <li>✔ Improves overall well-being and personality</li>
              <li>✔ Reduces medical expenses over time</li>
              <li>✔ Minimizes health risks</li>
              <li>✔ Provides access to medical information</li>
            </ul>
          </div>

          {/* ORGANIZATION BENEFITS */}
          <div className="bg-slate-50 p-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-5">
              Benefits to Organization
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Reduces employee sick leaves</li>
              <li>✔ Improves engagement and workplace mood</li>
              <li>✔ Increases job satisfaction and commitment</li>
              <li>✔ Boosts overall productivity</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}