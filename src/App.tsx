import { Shield, EyeOff, Zap, Watch, Battery, Mail, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import { ReactNode, useState } from 'react';

function Section({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-20"
    >
      <h2 className="text-2xl md:text-3xl font-display text-slate-800 mb-6 font-semibold tracking-tight">
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-4 text-base md:text-lg">
        {children}
      </div>
    </motion.section>
  );
}

function FeatureCard({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col gap-4"
    >
      <div className="w-14 h-14 bg-white backdrop-blur-md border border-slate-100 rounded-2xl flex items-center justify-center text-sky-600 shadow-sm">
        <Icon size={26} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-slate-800 mb-2 font-display">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#EAF1F8] font-sans selection:bg-sky-200">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-sky-200/60 mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-yellow-200/50 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-slate-200/60 mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header / Hero */}
        <header className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-24 h-24 sm:w-28 sm:h-28 shadow-xl border border-white rounded-[2.25rem] overflow-hidden mx-auto mb-8 flex items-center justify-center bg-white"
              id="app-logo"
            >
              {!imgError ? (
                <img 
                  src="https://i.imgur.com/TUPr7Sf.png" 
                  alt="Wear Activity Manager Logo" 
                  className="w-full h-full object-cover" 
                  onError={() => setImgError(true)}
                />
              ) : (
                <Watch size={48} className="text-sky-500" strokeWidth={1.5} />
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100/50 border border-sky-200/50 text-sky-700 text-sm font-medium mb-6 backdrop-blur-md"
            >
              <Zap size={16} className="text-sky-600" />
              <span>Wear OS Productivity Tool</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display text-slate-900 tracking-tight font-bold mb-6 leading-tight"
              id="page-title"
            >
              Wear Activity Manager
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-light"
            >
              Skip the menus. Bridge the clicking gap.
            </motion.p>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.3 }}
               className="text-md md:text-lg text-slate-600 max-w-2xl mx-auto mt-6"
            >
               The ultimate Wear OS shortcut maker. Create custom tiles and complications to launch any app activity instantly. Built for extreme efficiency with zero ads and strict privacy.
            </motion.p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 pb-24 w-full">
          {/* Core Values Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24" id="core-values">
            <FeatureCard 
              icon={Zap}
              title="Instant Action"
              description="Bypass the app drawer. Launch apps straight from Wear OS complications or tiles with zero friction."
              delay={0.1}
            />
            <FeatureCard 
              icon={LayoutGrid}
              title="Custom Layouts"
              description="Keep your watch face clean but your actions close. Create custom tiles populated solely with your most-used activities."
              delay={0.2}
            />
            <FeatureCard 
              icon={Battery}
              title="Zero Battery Drain"
              description="Built natively for smartwatches using standard Android APIs. Your shortcuts remain totally dormant until tapped."
              delay={0.3}
            />
            <FeatureCard 
              icon={Shield}
              title="Zero Data Collection"
              description="We do not collect, store, or share personal data. Your shortcuts and preferences stay securely on your device."
              delay={0.4}
            />
            <FeatureCard 
              icon={EyeOff}
              title="100% Free & Ad-Free"
              description="No premium paywalls. No subscriptions. Absolutely no annoying advertisements. Just pure control."
              delay={0.5}
            />
          </section>

          {/* Formal Privacy Policy Sections */}
          <div className="bg-white/60 backdrop-blur-2xl p-8 md:p-12 md:px-16 rounded-[2.5rem] shadow-xl border border-white/80 relative overflow-hidden" id="formal-policy">
            {/* Glossy gradient top border - softer colors matching icon */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-yellow-300 to-slate-400 opacity-80" />
            
            <div className="text-sm font-mono text-slate-500 mb-12 uppercase tracking-widest font-semibold">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>

            <Section title="1. Information Collection and Use" id="data-collection">
              <p>
                <b>Wear Activity Manager</b> is a productivity utility designed for Wear OS smartwatches to improve interaction speeds. We adamantly prioritize your privacy and have engineered the app to execute completely offline without demanding or intercepting your personal data.
              </p>
              <p>
                <strong>Personal Data:</strong> We do not actively prompt for, collect, store, or transmit any Personally Identifiable Information (PII) such as your name, email address, physical location, or contact details.
              </p>
              <p>
                <strong>Device Data & Activities:</strong> The app relies on reading installed applications to populate your list of selectable intents and activities. This process occurs exclusively locally on your device. We never upload your installed app list or launch history to any external servers.
              </p>
              <p>
                <strong>Diagnostics & Crash Reporting:</strong> To maintain app stability across the fragmented Wear OS ecosystem, we collect Crashlytics information to monitor and resolve fatal errors. This includes anonymous, non-identifying technical data (such as device model, OS version, and crash stack traces) strictly when the app crashes.
              </p>
            </Section>

            <Section title="2. Third-Party Services" id="third-party">
              <p>
                To provide a truly private experience, we limit third-party integrations to the absolute minimum required for distribution and stability.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong className="text-slate-700">Google Play Store:</strong> The app is securely distributed via the Play Store. Google Play may automatically collect basic installation and crash metrics as per standard Android device telemetry. (<a href="https://policies.google.com/privacy" className="text-sky-600 hover:text-sky-700 underline underline-offset-4 decoration-sky-500/30 transition-colors" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>)</li>
                <li><strong className="text-slate-700">Firebase Crashlytics:</strong> We collect Crashlytics information exclusively for catching and resolving app crashes. This framework does not collect your name, location, or usage habits. (<a href="https://firebase.google.com/support/privacy" className="text-sky-600 hover:text-sky-700 underline underline-offset-4 decoration-sky-500/30 transition-colors" target="_blank" rel="noopener noreferrer">Firebase Privacy</a>)</li>
              </ul>
            </Section>

            <Section title="3. User Rights & Data Control" id="user-rights">
              <p>
                Because Wear Activity Manager does not utilize remote servers or user accounts, there is no centralized database holding your profiles. 
              </p>
              <p>
                Any shortcuts, configurations, and tile layouts you create are stored natively and securely within your device's local application sandbox. You retain absolute control over this data. You can instantly erase all local configuration by uninstalling the application or by clearing its cache/data directly via your Wear OS settings menu.
              </p>
            </Section>

            <Section title="4. Permissions Justification" id="permissions">
              <p>
                Our philosophy is minimal required access. The app only requests permissions that are fundamentally necessary for its core operation:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
                <li><strong className="text-slate-700">Query All Packages:</strong> Required solely to populate the list of installed applications so you can choose which activity or app to create a shortcut for.</li>
                <li><strong className="text-slate-700">Complications & Tiles API:</strong> Standard Wear OS bindings required to render your chosen shortcuts onto your watch face or swipeable tiles.</li>
              </ul>
            </Section>

            <Section title="5. Contact Information" id="contact">
              <p>
                If you have any questions, feedback, or concerns regarding this Privacy Policy or the app's functionality, please reach out to the developer directly.
              </p>
              <div className="flex items-center gap-3 mt-8 p-5 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-100 shadow-sm w-fit transition-all hover:bg-white hover:border-slate-200">
                <div className="w-10 h-10 rounded-full bg-sky-100/80 flex items-center justify-center">
                  <Mail className="text-sky-600" size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium mb-0.5">Developer Contact</div>
                  <a href="mailto:20mincode@gmail.com" className="text-sm md:text-base font-semibold text-slate-800 hover:text-sky-600 transition-colors">
                    20mincode@gmail.com
                  </a>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Watch size={16} className="text-slate-400" />
                <span>Wear Activity Manager</span>
              </div>
              <div>
                &copy; {new Date().getFullYear()} All rights reserved.
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
