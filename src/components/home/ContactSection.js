import { ContactForm } from "@/components/contact/ContactForm";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Have an open engineering role, a startup MVP to launch, or an inquiry? Send me a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:takebulislam@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40 hover:border-blue-500/40 dark:hover:border-sky-500/40 transition-colors group"
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
                  className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors group"
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

                <div className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/40">
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

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                  Connect & Inspect
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/takebul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/takebulislam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <FiFileText className="w-3.5 h-3.5" />
                    <span>Credentials</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
