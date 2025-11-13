import { MapPin, MessageCircle, Send, Globe, FileQuestion } from "lucide-react";
import { useState } from "react";

import { HeroSection } from "./ui/sections/hero";
import { ContactInfoSection } from "./ui/sections/info";
import { SupportOptionsSection } from "./ui/sections/suport-options";

export const ContactUsSection = () => {
  const [formData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });

  const faqs = [
    {
      question: "How quickly will I receive a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our support line.",
    },
    {
      question: "Can I submit a camping location?",
      answer:
        'Yes! Create an account and use the "Post a Location" feature to share your favorite camping spots with the community.',
    },
    {
      question: "How do I report inappropriate content?",
      answer:
        "Use the report button on any listing or review, or contact us directly with details about the content in question.",
    },
    {
      question: "Do you offer advertising opportunities?",
      answer:
        'Yes, we offer various partnership and advertising options. Select "Partnership" in the contact form to learn more.',
    },
  ];

  return (
    <div className="bg-white min-w-screen mt-10">
      {/* Hero Section */}
      <HeroSection />

      {/* Contact Info Cards */}
      <ContactInfoSection />

      {/* Support Options */}
      <SupportOptionsSection />

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours during business days.
              </p>

              <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      placeholder="How can we help?"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors"
                    >
                      <option value="general">General Support</option>
                      <option value="bug">Report a Bug</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      placeholder="Tell us more about your inquiry..."
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-lime-400 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full px-6 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-bold rounded-lg hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50 flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Info & FAQ */}
            <div>
              <div className="bg-linear-to-br from-emerald-900 to-green-800 rounded-xl p-8 text-white mb-8">
                <Globe className="h-12 w-12 text-lime-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Quick Response Guarantee
                </h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  We pride ourselves on providing excellent customer support.
                  Our dedicated team monitors all inquiries and strives to
                  respond within 24 hours during business days.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-900 font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-emerald-50">
                      Average response time: 12 hours
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-900 font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-emerald-50">
                      Available Mon-Fri, 8am-6pm MST
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-900 font-bold text-sm">
                        ✓
                      </span>
                    </div>
                    <span className="text-emerald-50">
                      Support in English, Spanish, French
                    </span>
                  </li>
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="bg-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FileQuestion className="h-6 w-6 text-emerald-600" />
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-4 shadow-sm"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Denver, Colorado - the gateway to
              adventure
            </p>
          </div>

          <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden shadow-2xl h-96 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <MapPin className="h-24 w-24 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">WildCamp Headquarters</h3>
              <p className="text-xl text-emerald-50 mb-4">123 Adventure Lane</p>
              <p className="text-lg text-emerald-50">Denver, Colorado 80202</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-emerald-900 via-green-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 text-lime-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Check out our comprehensive help center for instant answers to
            common questions, tutorials, and guides.
          </p>
          <button className="px-8 py-4 bg-linear-to-r from-lime-500 to-emerald-500 text-white font-bold rounded-full hover:from-lime-400 hover:to-emerald-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-lime-500/50">
            Visit Help Center
          </button>
        </div>
      </section>
    </div>
  );
};
