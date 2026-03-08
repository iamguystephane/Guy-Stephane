import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const API_URL = "https://api.anexiums.com/api/portfolio/contact-stephane";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "").slice(0, 1000);
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const sanitizedData = {
      name: `${sanitizeInput(formData.firstName)} ${sanitizeInput(formData.lastName)}`,
      email: sanitizeInput(formData.email),
      subject: sanitizeInput(formData.subject),
      message: sanitizeInput(formData.message),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        "Failed to send message. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="!py-20">
      <div className="flex flex-col items-center justify-center">
        <Card className="!w-fit !bg-card/50">
          <CardContent className="!px-4 !py-1 flex items-center gap-3">
            Get In Touch
          </CardContent>
        </Card>
        <div className="flex items-center gap-3 !mt-6 flex-wrap justify-center">
          <h1 className="font-bold text-4xl">Contact</h1>
          <h1 className="text-4xl text-gray-500">Me</h1>
        </div>
        <p className="max-w-2xl text-center !mt-4 px-4">
          Have a project in mind? Let's work together to bring your ideas to
          life.
        </p>
      </div>

      <div className="grid xsm:grid-cols-1 lg:grid-cols-2 gap-8 !mt-12">
        <Card className="!bg-card/50 shadow-lg shadow-card/20">
          <CardContent className="!py-8 px-4!">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid xsm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium my-2! block">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`!py-5 bg-background/50 px-4! ${errors.firstName ? "border-red-500" : ""}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium my-2! block">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`!py-5 bg-background/50 px-4! ${errors.lastName ? "border-red-500" : ""}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium my-2! block">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`!py-5 bg-background/50 px-4! ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium my-2! block">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={`!py-5 bg-background/50 px-4! ${errors.subject ? "border-red-500" : ""}`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium my-2! block">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`min-h-[150px] bg-background/50 px-4! ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full !py-6 mt-4! cursor-pointer !bg-darkGreen text-white hover:!bg-darkGreen/90 shadow-lg shadow-darkGreen/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ?
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Sending...
                  </>
                : <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                }
              </Button>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-green-600 bg-green-100 dark:bg-green-900/30 rounded-lg mt-3! p-3!">
                  <CheckCircle size={18} />
                  <p className="text-sm">{statusMessage}</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 text-red-600 bg-red-100 dark:bg-red-900/30 rounded-lg mt-3! p-3!">
                  <AlertCircle size={18} />
                  <p className="text-sm">{statusMessage}</p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="!py-6 px-4! flex items-center gap-4">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full">
                <Mail size={24} className="text-darkGreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  gstephane138@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="!py-6 px-4! flex items-center gap-4">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full">
                <Phone size={24} className="text-darkGreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +237 672280977
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="!py-6 px-4! flex items-center gap-4">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full">
                <MapPin size={24} className="text-darkGreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Yaounde, Cameroon
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="!bg-card/50 shadow-lg shadow-card/20 overflow-hidden mt-4!">
            <CardContent className="!p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254743.60223618!2d11.432436!3d3.8480325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54bad35e693c51!2sYaounde%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
