import { ContactForm } from "@/components/contact/ContactForm";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiClock, FiFileText } from "react-icons/fi";
import Link from "next/link";

export const metadata = {
  title: "Contact & Collaboration",
  description:
    "Get in touch with Takebul Islam, Full-Stack Web Developer. Inquire about software engineering opportunities, contract roles, or technical collaborations.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
            Let's build something useful.
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Whether you are hiring for an engineering team, need a full-stack product built from scratch, or want to discuss technical architecture, I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Direct Contact Channels
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:takebulislam@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-sky-950/80 text-blue-600 dark:text-sky-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                      takebulislam@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+8801799439775"
                  className="flex items-start gap-4 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                      Phone / WhatsApp
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      +880 1799-439775
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40">
                  <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">
                      Nazirpur, Pirojpur, Bangladesh
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="https://github.com/takebul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/takebulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <FiLinkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <FiFileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
