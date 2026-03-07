import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const Contact = () => {
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
          <CardContent className="!py-8">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid xsm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="!py-5 bg-background/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="!py-5 bg-background/50" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="!py-5 bg-background/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="Project Inquiry"
                  className="!py-5 bg-background/50"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[150px] bg-background/50"
                />
              </div>
              <Button className="w-full !py-6 cursor-pointer !bg-darkGreen text-white hover:!bg-darkGreen/90 shadow-lg shadow-darkGreen/30">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="!py-6 flex items-center gap-4">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full">
                <Mail size={24} className="text-darkGreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  guystephane@example.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="!py-6 flex items-center gap-4">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full">
                <Phone size={24} className="text-darkGreen" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  +237 6XX XXX XXX
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="!py-6 flex items-center gap-4">
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

          <Card className="!bg-card/50 shadow-lg shadow-card/20 overflow-hidden">
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
