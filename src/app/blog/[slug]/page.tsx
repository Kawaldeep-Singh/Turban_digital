import { getPostBySlug } from "@/sanity/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { client } from "@/sanity/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/image";

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const slugs = await client.fetch(groq`*[_type == "post"]{ "slug": slug.current }`);
  return slugs.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found | Turban Digital" };
  }
  
  return {
    title: `${post.title} | Turban Digital Blog`,
    description: post.excerpt || `Read our latest insights on ${post.title}.`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read our latest insights on ${post.title}.`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author] : ["Turban Digital"],
      images: post.coverImage ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read our latest insights on ${post.title}.`,
      images: post.coverImage ? [post.coverImage] : [],
    }
  };
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={value.alt || " "}
          loading="lazy"
          src={urlForImage(value)?.url() || ""}
          className="rounded-2xl shadow-md my-8 w-full"
        />
      );
    },
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-[120px] pb-24">
        
        <article className="max-w-4xl mx-auto px-6 md:px-12 bg-white rounded-[3rem] shadow-sm border border-slate-100 overflow-hidden">
          {/* Cover Image */}
          {post.coverImage && (
            <div className="w-full h-[400px] md:h-[500px] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
          )}

          <div className="p-8 md:p-16">
            {/* Header / Meta */}
            <header className="mb-12 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-sm font-semibold text-slate-500 mb-6">
                {post.publishedAt && (
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                )}
                {post.author && (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    <span className="flex items-center gap-1.5 text-primary">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                      {post.author}
                    </span>
                  </>
                )}
              </div>
              
              <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                {post.title}
              </h1>
              
              <p className="font-body-lg text-xl text-slate-500 leading-relaxed">
                {post.excerpt}
              </p>
            </header>

            {/* Portable Text Content rendered via Tailwind Typography plugin */}
            <div className="prose prose-lg md:prose-xl prose-slate mx-auto prose-headings:font-headline-lg prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-creative-purple">
              {post.body ? <PortableText value={post.body} components={ptComponents} /> : <p>No content available.</p>}
            </div>

            {/* Footer actions */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back to all posts
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
