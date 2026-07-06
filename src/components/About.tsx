import { availability, educationBackground } from "../data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="About" title="Profil Singkat" description="" />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white">
              Fokus pada organic growth, audit website, optimasi halaman, dan
              reporting berbasis data.
            </h3>

            <p className="mt-4 leading-8 text-slate-300">
              Saya adalah kandidat SEO Specialist yang memiliki ketertarikan
              pada keyword research, search intent, technical SEO audit, on-page
              optimization, SEO content brief, internal linking, Google Search
              Console, GA4, dan SEO reporting. Saya terbiasa bekerja secara
              terstruktur: memahami tujuan website, memetakan keyword, mengecek
              issue teknis, mengoptimasi halaman, memantau performa, lalu
              menyusun rekomendasi perbaikan.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              Pengalaman saya di area IT Support dan administrasi membantu saya
              memiliki pola problem solving yang rapi, teliti membaca data,
              terbiasa membuat checklist, dan mampu menjelaskan issue teknis
              dengan bahasa yang mudah dipahami stakeholder.
            </p>

            <div className="mt-6 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Learning Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {educationBackground.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold text-white">Career Target</h3>

            <div className="mt-5 space-y-4">
              {availability.targetRoles.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
