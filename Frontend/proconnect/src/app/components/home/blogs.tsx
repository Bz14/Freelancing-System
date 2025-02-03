import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Land High-Paying Freelance Jobs",
    description:
      "Learn how to craft winning proposals and stand out in the freelancing world.",
    link: "/blog/5-tips-freelance-jobs",
  },
  {
    id: 2,
    title: "Success Story: How I Made $10K in a Month",
    description:
      "A freelancer shares their journey to earning big on our platform.",
    link: "/blog/success-story-10k",
  },
  {
    id: 3,
    title: "Why Secure Payments Matter for Freelancers",
    description:
      "Understanding escrow and safe transactions for freelancers and clients.",
    link: "/blog/secure-payments",
  },
];

const BlogSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Latest Insights 📝
      </h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-primary">{post.title}</h3>
            <p className="text-secondary mt-2">{post.description}</p>
            <Link
              href={post.link}
              className="text-primary font-bold mt-3 inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
