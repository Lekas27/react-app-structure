import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Globe,
  Users,
  Headphones,
  FileQuestion,
  Bug,
  Lightbulb,
  Mountain,
} from "lucide-react";
import { useState } from "react";

export const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "general",
    message: "",
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      content: "support@wildcamp.com",
      description: "Send us an email anytime",
      link: "mailto:support@wildcamp.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      content: "123 Adventure Lane",
      description: "Denver, Colorado 80202",
      link: "#",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "Monday - Friday",
      description: "8:00 AM - 6:00 PM MST",
      link: "#",
    },
  ];

  const supportOptions = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "General Support",
      description:
        "Questions about using WildCamp, account issues, or general inquiries about our platform and services.",
      tag: "general",
    },
    {
      icon: <Bug className="h-8 w-8" />,
      title: "Report a Bug",
      description:
        "Found a technical issue? Let us know so we can fix it and improve the experience for everyone.",
      tag: "bug",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Feature Request",
      description:
        "Have an idea to make WildCamp better? We love hearing suggestions from our community members.",
      tag: "feature",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description:
        "Interested in partnering with WildCamp? Reach out to discuss collaboration opportunities.",
      tag: "partnership",
    },
  ];

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
      <section className="relative py-20 bg-linear-to-br from-emerald-900 via-green-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <MessageCircle className="absolute top-10 right-20 h-64 w-64 text-lime-400" />
          <Mountain className="absolute bottom-10 left-20 h-48 w-48 text-lime-400" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get in
            <span className="block bg-linear-to-r from-lime-400 to-emerald-300 bg-clip-text text-transparent mt-2">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Have questions, feedback, or need assistance? Our team is here to
            help you make the most of your WildCamp experience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-lime-400 group"
              >
                <div className="w-12 h-12 bg-linear-to-br from-lime-400 to-emerald-500 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-emerald-600 font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the topic that best matches your inquiry for faster
              assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <button
                key={index}
                onClick={() =>
                  setFormData({ ...formData, category: option.tag })
                }
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-left border-2 ${
                  formData.category === option.tag
                    ? "border-lime-400"
                    : "border-transparent"
                }`}
              >
                <div className="w-16 h-16 bg-linear-to-br from-lime-400 to-emerald-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {option.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

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
