import React from "react";

const Home = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-indigo-50">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* Badge */}
    <div className="flex justify-center mb-6">
      <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full 
        bg-gradient-to-r from-indigo-100 to-purple-100 
        text-blue-600 font-medium text-sm md:text-base shadow-sm">
        ✦ AI-Powered Enterprise Solutions
      </span>
    </div>

    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
      Transform Your Business with{" "}
      <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Intelligent AI
      </span>
    </h1>

    {/* Subtitle */}
    <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      Leading the future of enterprise AI with cutting-edge agentic
      applications, fine-tuned foundational models, and comprehensive
      data engineering solutions.
    </p>

    <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition">
              Explore Our Services
            </button>
            <button className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
              Schedule a Consultation
            </button>
          </div>

  </div>
</section>


      {/* ================= STATS SECTION ================= */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">500+</h2>
            <p className="mt-2 text-gray-600">Enterprise Clients</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">99.9%</h2>
            <p className="mt-2 text-gray-600">Uptime SLA</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">24/7</h2>
            <p className="mt-2 text-gray-600">Support Available</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-indigo-600">50+</h2>
            <p className="mt-2 text-gray-600">AI Models Deployed</p>
          </div>

        </div>
      </section>

      {/* ================= CORE SERVICES SECTION ================= */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-900">
        Our Core Services
      </h2>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Comprehensive AI and data solutions tailored for enterprise success
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
          🧠
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Agentic & GenAI Development
        </h3>

        <p className="text-gray-600 mb-6">
          Enterprise-grade AI applications with intelligent agents and
          generative AI capabilities
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Custom AI Agents
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> LLM Integration
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Automation Workflows
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Multi-modal AI
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Enterprise Security
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
          ⚙️
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Foundational Model Fine-tuning
        </h3>

        <p className="text-gray-600 mb-6">
          Domain-specific model optimization for enhanced performance and
          accuracy
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Custom Training
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Domain Adaptation
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Performance Optimization
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Model Deployment
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Continuous Learning
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
          🗄️
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Data Engineering & Analytics
        </h3>

        <p className="text-gray-600 mb-6">
          Comprehensive data pipeline architecture and management solutions
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> ETL Pipelines
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Data Warehousing
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Real-time Processing
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Data Governance
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600">•</span> Quality Assurance
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


{/* ================= ADDITIONAL SERVICES ================= */}
<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
          ☁️
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Cloud Data Platforms
        </h3>

        <p className="text-gray-600 mb-6">
          Expert implementation with Snowflake and Databricks platforms
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Snowflake Solutions
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Databricks Integration
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Cloud Migration
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Performance Tuning
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Cost Optimization
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
          📊
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Advanced Data Visualization
        </h3>

        <p className="text-gray-600 mb-6">
          Transform complex data into actionable insights with stunning
          visualizations
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Interactive Dashboards
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Custom Analytics
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Real-time Reporting
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Predictive Analytics
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Mobile BI
          </li>
        </ul>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
          🛡️
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">
          AI Infrastructure & Security
        </h3>

        <p className="text-gray-600 mb-6">
          Robust cloud infrastructure setup, monitoring, and optimization
        </p>

        <ul className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Cloud Architecture
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Security Management
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Performance Monitoring
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Compliance
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600">•</span> Disaster Recovery
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>


{/* ================= INDUSTRIES WE TRANSFORM ================= */}
<section className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">

    {/* Heading */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Industries We Transform
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Delivering AI-powered solutions across diverse sectors with
      industry-specific expertise
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Financial Services */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 mx-auto mb-6">
          🏦
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Financial Services
        </h3>

        <p className="text-gray-600">
          Specialized AI solutions tailored for financial services
          challenges and opportunities
        </p>
      </div>

      {/* Healthcare */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 mx-auto mb-6">
          ❤️
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Healthcare
        </h3>

        <p className="text-gray-600">
          Specialized AI solutions tailored for healthcare
          challenges and opportunities
        </p>
      </div>

      {/* Retail & E-commerce */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition">
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 mx-auto mb-6">
          🛒
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Retail & E-commerce
        </h3>

        <p className="text-gray-600">
          Specialized AI solutions tailored for retail & e-commerce
          challenges and opportunities
        </p>
      </div>

    </div>
  </div>
</section>


{/* ===== MORE INDUSTRIES ===== */}
<section className="pb-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Manufacturing */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-indigo-100">
          🏭
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Manufacturing
        </h3>
        <p className="text-gray-600">
          Specialized AI solutions tailored for manufacturing
          challenges and opportunities
        </p>
      </div>

      {/* Technology */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-indigo-100">
          💻
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Technology
        </h3>
        <p className="text-gray-600">
          Specialized AI solutions tailored for technology
          challenges and opportunities
        </p>
      </div>

      {/* Energy & Utilities */}
      <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-indigo-100">
          ⚡
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Energy & Utilities
        </h3>
        <p className="text-gray-600">
          Specialized AI solutions tailored for energy & utilities
          challenges and opportunities
        </p>
      </div>

    </div>
  </div>
</section>


{/* ================= SUCCESS STORIES ================= */}
<section className="py-12 bg-white text-center">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Success Stories
    </h2>

    <p className="text-gray-600 text-lg">
      Real-world results from our AI and data transformation projects
    </p>

  </div>
</section>


{/* ================= SUCCESS STORIES CARDS ================= */}
<section className="pb-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Healthcare
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Netezza Migration for Healthcare Payor
        </h3>

        <p className="text-gray-600 mb-6">
          Set up new Snowflake environment with metadata driven
          replication framework to move data from Netezza to
          Snowflake, both initial load and delta.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Successful Migration →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Real Estate
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          AUM Automation for a Leading Real Estate Player
        </h3>

        <p className="text-gray-600 mb-6">
          Eliminated manual processes and Excel dependency by
          building an automated, auditable AUM reporting
          system on Snowflake.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Scalable Data Infrastructure →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Financial Services
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Global Bank Transforms Risk Management
        </h3>

        <p className="text-gray-600 mb-6">
          Implemented AI-powered risk assessment system reducing
          processing time by 75% while improving accuracy by 40%.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          $10M Annual Savings →
        </a>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Healthcare
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Healthcare Provider Optimizes Patient Care
        </h3>

        <p className="text-gray-600 mb-6">
          Deployed predictive analytics for patient outcomes,
          enabling early intervention and reducing readmission
          rates by 30%.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          30% Better Outcomes →
        </a>
      </div>

    </div>
  </div>
</section>


{/* ================= SUCCESS STORIES – ROW 2 ================= */}
<section className="pb-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Retail
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Retail Giant Enhances Supply Chain
        </h3>

        <p className="text-gray-600 mb-6">
          Built real-time demand forecasting system, optimizing
          inventory levels and reducing stockouts by 45%.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          45% Efficiency Gain →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Healthcare
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Virtual Pain Clinic (VPC) – AI-Powered Patient Intake System
        </h3>

        <p className="text-gray-600 mb-6">
          Built an intelligent, agentic intake system using LangGraph
          with 3D Pain Mapping and dynamic question routing.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          85% Reduction in Questions →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Technology
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          AI Solution for Ontologics (IP Analytics Platform)
        </h3>

        <p className="text-gray-600 mb-6">
          Implemented AI assistant for enterprise data interaction
          using Snowflake Cortex AI with natural language querying.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          AI-Powered Chatbot →
        </a>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <span className="inline-block mb-4 px-4 py-1 text-sm text-blue-600 bg-blue-100 rounded-full">
          Entertainment
        </span>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Station Casino Chatbot
        </h3>

        <p className="text-gray-600 mb-6">
          Integrated the AI assistant for HR policy queries using
          the Contextual AI platform with role-specific answers.
        </p>

        <a
          href="#"
          className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Scalable HR Support →
        </a>
      </div>

    </div>
  </div>
</section>


{/* ================= CTA SECTION ================= */}
<section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      Ready to Transform Your Enterprise?
    </h2>

    <p className="text-lg md:text-xl text-white/90 mb-12">
      Let's discuss how our AI solutions can drive your business forward
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-6">

      {/* Primary Button */}
      <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold text-lg shadow-lg hover:scale-105 transition">
        <span>📈</span>
        Start Your AI Journey
      </button>

      {/* Secondary Button */}
      <button className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-blue-600 transition">
        View Case Studies
      </button>

    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
