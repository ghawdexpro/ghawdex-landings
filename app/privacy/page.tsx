import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Ghawdex Solar",
  description: "Privacy Policy for Ghawdex Solar - How we collect, use, and protect your personal data in compliance with GDPR.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "November 19, 2024";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sky-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-sky-100">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ghawdex ("we," "us," or "our") is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website at ghawdex.pro (the "Website") or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This policy complies with the General Data Protection Regulation (GDPR) and applicable data protection laws in the Republic of Malta and the European Union.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Data Controller:</strong><br />
              Ghawdex<br />
              Xewkija Industrial Zone, Malta<br />
              Email: info@ghawdex.pro<br />
              Phone: +356 7905 5156
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you use our solar analysis tool, request a quote, or contact us, we may collect:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Physical address and property location</li>
              <li>Property details (roof size, building type, energy consumption)</li>
              <li>Any other information you voluntarily provide in forms or communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you visit our Website:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and version</li>
              <li>Device information (type, operating system)</li>
              <li>Pages visited, time spent on pages, and navigation paths</li>
              <li>Referral source (how you arrived at our Website)</li>
              <li>Date and time of access</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Cookies and Tracking Technologies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies, pixels, and similar tracking technologies to enhance your experience and analyze Website usage. See our <Link href="/cookies" className="text-sky-600 hover:underline">Cookie Policy</Link> for details.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your personal data for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Service Delivery:</strong> To provide solar analysis, quotations, and installation services</li>
              <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
              <li><strong>Analytics:</strong> To analyze Website usage and improve our services (via Google Analytics)</li>
              <li><strong>Marketing:</strong> To send promotional materials and offers (with your consent)</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</li>
            </ul>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Under GDPR, we process your data based on:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Consent:</strong> You have given explicit consent for specific purposes (e.g., marketing communications)</li>
              <li><strong>Contract Performance:</strong> Processing is necessary to fulfill our services to you</li>
              <li><strong>Legitimate Interest:</strong> We have a legitimate business interest (e.g., improving services, security)</li>
              <li><strong>Legal Obligation:</strong> Processing is required by law</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal data. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Service Providers:</strong> Supabase (database hosting), Google Analytics (analytics), email service providers</li>
              <li><strong>Third-Party Tools:</strong> Our solar analysis tool and related mapping services (Google Earth, Google Solar API)</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              All third-party processors are contractually bound to protect your data and comply with GDPR.
            </p>
          </section>

          {/* International Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some of our service providers (e.g., Google, Supabase) may be located outside the European Economic Area (EEA). When we transfer data internationally, we ensure:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>The recipient country has adequate data protection laws (adequacy decision)</li>
              <li>Standard Contractual Clauses (SCCs) are in place</li>
              <li>Other appropriate safeguards are implemented as required by GDPR</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We retain your personal data only as long as necessary for the purposes outlined in this policy:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Lead Data:</strong> Up to 3 years from last contact</li>
              <li><strong>Customer Data:</strong> Duration of service relationship plus 7 years (legal/tax requirements)</li>
              <li><strong>Analytics Data:</strong> 26 months (Google Analytics default)</li>
              <li><strong>Marketing Consent:</strong> Until consent is withdrawn</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              After the retention period, data is securely deleted or anonymized.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights Under GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Right to Access:</strong> Request a copy of your personal data we hold</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or for marketing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (does not affect prior processing)</li>
              <li><strong>Right to Lodge a Complaint:</strong> File a complaint with the Office of the Information and Data Protection Commissioner (Malta)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise your rights, contact us at <a href="mailto:info@ghawdex.pro" className="text-sky-600 hover:underline">info@ghawdex.pro</a>. We will respond within 30 days.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or destruction:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Encryption of data in transit (SSL/TLS) and at rest</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security audits and updates</li>
              <li>Secure data storage with Supabase and other certified providers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website is not intended for individuals under 16 years of age. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Website may contain links to third-party websites (e.g., our solar analysis tool, social media platforms). We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Significant changes will be communicated via email or prominent notice on our Website. Continued use of the Website after changes constitutes acceptance.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Ghawdex</p>
              <p className="text-gray-700">Xewkija Industrial Zone, Malta</p>
              <p className="text-gray-700">Email: <a href="mailto:info@ghawdex.pro" className="text-sky-600 hover:underline">info@ghawdex.pro</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+35679055156" className="text-sky-600 hover:underline">+356 7905 5156</a></p>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Supervisory Authority</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to lodge a complaint with the data protection supervisory authority in Malta:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Office of the Information and Data Protection Commissioner</p>
              <p className="text-gray-700">Second Floor, Airways House</p>
              <p className="text-gray-700">High Street, Sliema SLM 1549, Malta</p>
              <p className="text-gray-700">Website: <a href="https://idpc.org.mt" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">idpc.org.mt</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
