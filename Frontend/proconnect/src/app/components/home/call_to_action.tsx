import Link from "next/link";

const CTASection = () => (
  <section className="bg-gradient-to-r from-primary to-primary text-white py-12 text-center">
    <h2 className="text-2xl lg:text-4xl font-bold">Get Started Now! 🚀</h2>
    <p className="mt-2 text-lg">
      Find the perfect freelancer or your next gig today.
    </p>
    <div className="mt-6 space-x-4">
      <Link href="/post-job">
        <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Post a Job
        </button>
      </Link>
      <Link href="/find-work">
        <button className="px-6 py-3 border border-secondary text-white font-semibold rounded-lg shadow-md hover:bg-secondary">
          Find Work
        </button>
      </Link>
    </div>
    <p className="mt-4 text-sm">
      Have questions?{" "}
      <Link href="/faq" className="underline">
        Check our FAQ
      </Link>
      .
    </p>
  </section>
);

export default CTASection;
