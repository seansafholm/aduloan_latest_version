import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Terms of Use</h1>
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <Home className="w-5 h-5 mr-2" />
              Back to Calculator
            </Link>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-4">Last updated: November 16, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p>By accessing and using ADUloan.co (the "Website"), you agree to be bound by these Terms of Use. If you disagree with any part of these terms, you do not have permission to access the Website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p>ADUloan.co provides information and resources related to Accessory Dwelling Unit (ADU) financing and loans. Our services include but are not limited to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Information about ADU loan options</li>
                <li>Loan qualification tools</li>
                <li>Educational resources about ADU financing</li>
                <li>Loan application processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Representations</h2>
              <p>By using the Website, you represent and warrant that:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>You are at least 18 years of age</li>
                <li>You possess the legal authority to create a binding legal obligation</li>
                <li>You will use the Website in accordance with these Terms</li>
                <li>All information you provide is accurate, complete, and current</li>
                <li>You will maintain the accuracy of such information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
              <p>The Website and its original content, features, and functionality are owned by ADUloan.co and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. User Account Responsibilities</h2>
              <p>If you create an account on the Website, you are responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Maintaining the confidentiality of your account information</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Prohibited Activities</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use the Website in any way that violates applicable laws</li>
                <li>Impersonate any person or entity</li>
                <li>Submit false or misleading information</li>
                <li>Engage in unauthorized framing or linking to the Website</li>
                <li>Interfere with or disrupt the Website or servers</li>
                <li>Attempt to gain unauthorized access to the Website</li>
                <li>Use any data mining, robots, or similar data gathering tools</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Disclaimer</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>All information provided is for informational purposes only</li>
                <li>We do not guarantee loan approval</li>
                <li>Rates and terms shown are subject to change</li>
                <li>Information provided does not constitute financial advice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, ADUloan.co shall not be liable for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Any loss of profits, revenue, data, or data use</li>
                <li>Any damages exceeding the amounts paid by you for services in the prior 12 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
              <p>The Website may contain links to third-party websites. We are not responsible for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>The content of any linked websites</li>
                <li>Any losses or damages arising from your use of third-party websites</li>
                <li>The privacy practices of third-party websites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Modifications</h2>
              <p>We reserve the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Modify or terminate the Website for any reason</li>
                <li>Change these Terms at any time</li>
                <li>Change our fees and billing methods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
              <p>You agree to indemnify and hold ADUloan.co harmless from any claims, losses, liability, expenses, or fees arising from your:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use of the Website</li>
                <li>Violation of these Terms</li>
                <li>Violation of any rights of a third party</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
              <p>These Terms shall be governed by the laws of the State of Georgia, without regard to its conflict of law provisions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary while preserving the remaining provisions.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Entire Agreement</h2>
              <p>These Terms constitute the entire agreement between you and ADUloan.co regarding the use of the Website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Contact Information</h2>
              <p>For questions about these Terms, please contact us at:</p>
              <ul className="list-none pl-0 mt-2">
                <li>Email: sean@mortgagebroker.co</li>
                <li>Address: 1100 Satellite Blvd NW, Suwanee, GA 30024</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};