import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Ghawdex Solar",
  description: "Terms of Service for Ghawdex Solar - Legal terms governing use of our website and services.",
};

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-sky-100">Last Updated: {lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">

          {/* Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using the website ghawdex.pro (the "Website") operated by Ghawdex ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not access or use the Website.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms constitute a legally binding agreement between you and Ghawdex. We reserve the right to modify these Terms at any time. Your continued use of the Website following any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Use of Website */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Website is provided for informational purposes regarding solar energy solutions and installation services. You may use the Website for lawful purposes only and in accordance with these Terms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Prohibited Conduct</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use the Website for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorized access to the Website, servers, or databases</li>
              <li>Interfere with or disrupt the Website's operation or security</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Engage in data mining, scraping, or automated data collection without permission</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Upload or transmit any content that is defamatory, obscene, or violates intellectual property rights</li>
              <li>Use the Website to spam, harass, or engage in fraudulent activity</li>
            </ul>
          </section>

          {/* Informational Content Only */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Informational Content Only</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-red-600">IMPORTANT:</strong> All information, estimates, analyses, and content provided on the Website (including solar analysis tools, installation timelines, cost estimates, and energy savings projections) are for <strong>informational and illustrative purposes only</strong> and do not constitute:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>A binding offer, quotation, or contract</li>
              <li>Professional advice (financial, legal, or technical)</li>
              <li>A guarantee of specific results or savings</li>
              <li>Accurate measurements or final specifications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Actual installation costs, timelines, system specifications, and energy savings will be determined through a formal consultation and site assessment. Any binding agreements must be documented in a separate written contract.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property Rights</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Our Content</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content on the Website, including but not limited to text, graphics, logos, images, videos, software, and design, is the exclusive property of Ghawdex or our licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Restrictions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may not, without our prior written consent:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Reproduce, distribute, modify, or create derivative works from our content</li>
              <li>Use our trademarks, logos, or branding without authorization</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              <li>Use our content for commercial purposes</li>
            </ul>
          </section>

          {/* Third-Party Links and Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Links and Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Website may contain links to third-party websites or services (including our solar analysis tool, Google services, and social media platforms). We do not control, endorse, or assume responsibility for any third-party content or services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your use of third-party websites is at your own risk and subject to their terms and privacy policies. We are not liable for any damages or losses arising from your use of third-party services.
            </p>
          </section>

          {/* User Submissions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Submissions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you submit information to us through contact forms, analysis tools, or other means, you grant us a non-exclusive, royalty-free, perpetual, worldwide license to use, store, and process such information for the purposes described in our <Link href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You represent and warrant that you have the right to submit such information and that it does not violate any third-party rights or applicable laws.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-red-600">THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, we disclaim all warranties, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
              <li>Warranties regarding accuracy, reliability, or completeness of content</li>
              <li>Warranties that the Website will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding results from using the Website or its tools</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We do not warrant that the Website will meet your requirements or that any defects will be corrected. You use the Website at your own risk.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong className="text-red-600">TO THE MAXIMUM EXTENT PERMITTED BY LAW, GHAWDEX SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, WHETHER IN CONTRACT, TORT, OR OTHERWISE, ARISING FROM:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Your use or inability to use the Website</li>
              <li>Any errors, inaccuracies, or omissions in Website content</li>
              <li>Unauthorized access to or alteration of your data</li>
              <li>Reliance on information provided on the Website</li>
              <li>Any interruption or cessation of the Website</li>
              <li>Third-party conduct or content on the Website</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our total liability to you for any claims arising from or related to the Website shall not exceed €100 (one hundred euros) or the amount you paid us (if any), whichever is less.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Note:</strong> This limitation does not affect warranties or liabilities that cannot be excluded or limited under applicable law, or liabilities arising from a formal installation contract.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Ghawdex, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Any content or information you submit through the Website</li>
            </ul>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to the Website at any time, without notice or liability, for any reason, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Violation of these Terms</li>
              <li>Fraudulent or illegal activity</li>
              <li>Security concerns</li>
              <li>At our sole discretion</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the Website ceases immediately. Sections of these Terms that by their nature should survive termination (including disclaimers, limitations of liability, and indemnification) shall remain in effect.
            </p>
          </section>

          {/* Force Majeure */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We shall not be liable for any failure to perform our obligations under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, governmental actions, internet or telecommunications failures, or other force majeure events.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Malta, without regard to its conflict of law provisions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from or relating to these Terms or the Website shall be subject to the exclusive jurisdiction of the courts of Malta. You irrevocably submit to the jurisdiction of such courts.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before initiating legal proceedings, you agree to first attempt to resolve any dispute informally by contacting us at info@ghawdex.pro. We will attempt to resolve disputes in good faith within 30 days.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If informal resolution fails, either party may pursue legal remedies in accordance with Section 12 (Governing Law and Jurisdiction).
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our <Link href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</Link> and <Link href="/cookies" className="text-sky-600 hover:underline">Cookie Policy</Link>, constitute the entire agreement between you and Ghawdex regarding use of the Website and supersede all prior agreements and understandings.
            </p>
          </section>

          {/* Waiver */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Waiver</h2>
            <p className="text-gray-700 leading-relaxed">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorized representative of Ghawdex.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website with an updated "Last Updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Material changes will be communicated via email (if you have provided contact information) or through a prominent notice on the Website. Your continued use of the Website after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Ghawdex</p>
              <p className="text-gray-700">Xewkija Industrial Zone, Malta</p>
              <p className="text-gray-700">Email: <a href="mailto:info@ghawdex.pro" className="text-sky-600 hover:underline">info@ghawdex.pro</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+35679055156" className="text-sky-600 hover:underline">+356 7905 5156</a></p>
              <p className="text-gray-700 mt-3">Website: <a href="https://ghawdex.pro" className="text-sky-600 hover:underline">ghawdex.pro</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
