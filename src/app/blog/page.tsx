import { getPosts } from "@/sanity/queries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Insights & Marketing Strategies | Turban Digital Blog",
  description: "Actionable strategies, deep dives, and expert insights on SEO, Performance Marketing, and Web Development to help you scale your business revenue.",
  openGraph: {
    title: "Growth Insights & Marketing Strategies | Turban Digital Blog",
    description: "Actionable strategies, deep dives, and expert insights on SEO, Performance Marketing, and Web Development.",
    images: [{ url: "/Logo.png", width: 1200, height: 630, alt: "Turban Digital Blog" }],
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-[120px] pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="font-headline-xl text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Growth <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-creative-purple">Insights</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              No fluff. Just proven strategies, actionable tutorials, and deep dives into the exact tactics we use to scale our clients' revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any, index: number) => (
              <Link 
                href={`/blog/${post.slug}`} 
                key={post.slug}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-700 shadow-sm">
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : ''}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="font-headline-sm text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="font-body-md text-slate-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                    <span className="text-sm font-semibold text-slate-500 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {post.author.charAt(0)}
                      </div>
                      {post.author}
                    </span>
                    <span className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">article</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">No posts yet</h2>
              <p className="text-slate-500">Check back later for new articles and insights!</p>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
