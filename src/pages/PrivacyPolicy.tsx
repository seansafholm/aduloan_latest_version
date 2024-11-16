import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
              <Home className="w-5 h-5 mr-2" />
              Back to Calculator
            </Link>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-4">Last updated: November 16, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>Welcome to ADUloan.co ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
              <p>We may collect information that you voluntarily provide when you:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact us through forms</li>
                <li>Subscribe to newsletters</li>
                <li>Create an account</li>
                <li>Make a purchase</li>
                <li>Leave comments</li>
              </ul>

              <p>This information may include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Billing information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
              <p>When you visit our website, we automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages visited</li>
                <li>Time and date of visits</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Providing and maintaining our website</li>
                <li>Responding to your requests and inquiries</li>
                <li>Sending newsletters and updates (with your consent)</li>
                <li>Improving our website and user experience</li>
                <li>Analyzing usage patterns</li>
                <li>Protecting against fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Information Sharing and Disclosure</h2>
              <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Law enforcement when required by law</li>
                <li>Third parties in the event of a business sale or merger</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with regulatory authorities</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at:</p>
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