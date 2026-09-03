import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogTopics } from "@/data/blogTopics";

export const metadata: Metadata = {
  title: "Blog | OralClin Odontologia",
  description: "Artigos e dicas sobre odontologia, implantes, alinhadores invisíveis e prótese protocolo.",
};

export default function BlogIndex() {
  return (
    <main>
      <Header />

      <section className="py-20 md:py-28 bg-brand-mist">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-brand-navy">Blog da OralClin</h1>
            <p className="text-base md:text-lg text-[#52717a] max-w-2xl mx-auto">
              Artigos, dicas e conteúdo educativo sobre odontologia e cuidado com a saúde bucal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogTopics.map((topic, index) => (
              <article
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg border border-brand-line hover:shadow-sm transition-all"
              >
                <span className="inline-block px-3 py-1 bg-brand-mist rounded text-xs font-heading font-semibold text-brand-blue mb-3">
                  Em breve
                </span>
                <h2 className="text-lg md:text-xl font-heading font-semibold text-brand-navy">{topic.title}</h2>
                <p className="mt-3 text-sm text-[#52717a]">Conteúdo em preparação para você.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
