import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Ghawdex Solar",
  description: "Cookie Policy for Ghawdex Solar - How we use cookies and tracking technologies on our website.",
};

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
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
              This Cookie Policy explains how Ghawdex ("we," "us," or "our") uses cookies and similar tracking technologies on our website at ghawdex.pro (the "Website").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our Website, you consent to the use of cookies in accordance with this policy. If you do not agree to our use of cookies, you should disable them following the instructions in Section 7 or refrain from using the Website.
            </p>
          </section>

          {/* What Are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, smartphone, tablet) when you visit a website. They help websites remember your preferences, actions, and behavior over time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (stored on your device for a set period or until you delete them).
            </p>
          </section>

          {/* Why We Use Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Why We Use Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use cookies to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Ensure the Website functions properly</strong> (essential cookies)</li>
              <li><strong>Analyze how visitors use the Website</strong> to improve user experience (analytics cookies)</li>
              <li><strong>Remember your preferences</strong> and settings (functionality cookies)</li>
              <li><strong>Deliver personalized content and advertisements</strong> (marketing cookies)</li>
              <li><strong>Track conversions</strong> and measure the effectiveness of our marketing campaigns</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Essential Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies are necessary for the Website to function and cannot be disabled. They enable core functionality such as security, network management, and accessibility.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Cookie Name</th>
                    <th className="border border-gray-300 p-3 text-left">Purpose</th>
                    <th className="border border-gray-300 p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">session_id</td>
                    <td className="border border-gray-300 p-3">Maintains user session</td>
                    <td className="border border-gray-300 p-3">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">cookie_consent</td>
                    <td className="border border-gray-300 p-3">Stores your cookie preferences</td>
                    <td className="border border-gray-300 p-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Analytics Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use analytics cookies to understand how visitors interact with the Website. This helps us improve our content, design, and functionality.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Cookie Name</th>
                    <th className="border border-gray-300 p-3 text-left">Provider</th>
                    <th className="border border-gray-300 p-3 text-left">Purpose</th>
                    <th className="border border-gray-300 p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">_ga</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                    <td className="border border-gray-300 p-3">Distinguishes unique users</td>
                    <td className="border border-gray-300 p-3">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_gid</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                    <td className="border border-gray-300 p-3">Distinguishes unique users</td>
                    <td className="border border-gray-300 p-3">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_gat</td>
                    <td className="border border-gray-300 p-3">Google Analytics</td>
                    <td className="border border-gray-300 p-3">Throttles request rate</td>
                    <td className="border border-gray-300 p-3">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Learn more about Google Analytics cookies: <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Google Analytics Cookie Usage</a>
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Marketing and Advertising Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies track your browsing activity to deliver personalized advertisements and measure campaign effectiveness. They may be set by us or third-party advertising partners.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Cookie Name</th>
                    <th className="border border-gray-300 p-3 text-left">Provider</th>
                    <th className="border border-gray-300 p-3 text-left">Purpose</th>
                    <th className="border border-gray-300 p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">_fbp</td>
                    <td className="border border-gray-300 p-3">Facebook Pixel</td>
                    <td className="border border-gray-300 p-3">Tracks conversions, retargeting</td>
                    <td className="border border-gray-300 p-3">3 months</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">_gcl_au</td>
                    <td className="border border-gray-300 p-3">Google Ads</td>
                    <td className="border border-gray-300 p-3">Tracks ad conversions</td>
                    <td className="border border-gray-300 p-3">3 months</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">IDE</td>
                    <td className="border border-gray-300 p-3">Google DoubleClick</td>
                    <td className="border border-gray-300 p-3">Personalized advertising</td>
                    <td className="border border-gray-300 p-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.4 Functionality Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These cookies remember your preferences and settings to provide enhanced, personalized features.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3 text-left">Cookie Name</th>
                    <th className="border border-gray-300 p-3 text-left">Purpose</th>
                    <th className="border border-gray-300 p-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3">language_pref</td>
                    <td className="border border-gray-300 p-3">Stores language preference</td>
                    <td className="border border-gray-300 p-3">1 year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3">theme_pref</td>
                    <td className="border border-gray-300 p-3">Stores display preferences</td>
                    <td className="border border-gray-300 p-3">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third-party services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> Website traffic and behavior analysis</li>
              <li><strong>Google Ads:</strong> Advertisement tracking and conversion measurement</li>
              <li><strong>Facebook Pixel:</strong> Social media advertising and retargeting</li>
              <li><strong>Supabase:</strong> Database and authentication services</li>
              <li><strong>Google Maps/Earth:</strong> Solar analysis and mapping tools</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Please review the privacy and cookie policies of these third parties:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Google Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/policies/cookies/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Facebook Cookie Policy</a></li>
              <li><a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Supabase Privacy Policy</a></li>
            </ul>
          </section>

          {/* Cookie Consent */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Consent</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you first visit our Website, you will be presented with a cookie consent banner. You can choose to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Accept all cookies:</strong> All cookies will be enabled</li>
              <li><strong>Reject non-essential cookies:</strong> Only essential cookies will be used</li>
              <li><strong>Customize preferences:</strong> Select specific cookie categories to enable</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can change your cookie preferences at any time by clearing your browser cookies or using the cookie settings link in our website footer.
            </p>
          </section>

          {/* How to Manage Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. How to Manage and Delete Cookies</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.1 Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Most browsers allow you to control cookies through their settings. You can set your browser to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Block all cookies</li>
              <li>Block third-party cookies only</li>
              <li>Delete cookies when you close the browser</li>
              <li>Notify you when a website sets a cookie</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instructions for popular browsers:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.2 Opt-Out Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt out of specific tracking services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
              <li><strong>Online advertising:</strong> <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Your Online Choices (EU)</a></li>
              <li><strong>Network Advertising Initiative:</strong> <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">NAI Opt-Out Tool</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">7.3 Impact of Disabling Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Please note:</strong> Blocking or deleting cookies may impact your experience on the Website. Some features may not function properly, and you may need to re-enter information or preferences on each visit.
            </p>
          </section>

          {/* Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Do Not Track (DNT) Signals</h2>
            <p className="text-gray-700 leading-relaxed">
              Some browsers have a "Do Not Track" (DNT) feature that signals websites you visit that you do not want your online activity tracked. Currently, there is no industry standard for how to respond to DNT signals. At this time, our Website does not respond to DNT signals.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Cookie Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our use of cookies or applicable laws. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* More Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. More Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about how we collect, use, and protect your data, please see our <Link href="/privacy" className="text-sky-600 hover:underline">Privacy Policy</Link> and <Link href="/terms" className="text-sky-600 hover:underline">Terms of Service</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-900 font-semibold mb-2">Ghawdex</p>
              <p className="text-gray-700">Xewkija Industrial Zone, Malta</p>
              <p className="text-gray-700">Email: <a href="mailto:info@ghawdex.pro" className="text-sky-600 hover:underline">info@ghawdex.pro</a></p>
              <p className="text-gray-700">Phone: <a href="tel:+35679055156" className="text-sky-600 hover:underline">+356 7905 5156</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
