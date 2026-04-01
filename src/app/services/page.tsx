import Link from "next/link";
import { formatPrice, formatDuration } from "@/lib/utils";
import { IoTime } from "react-icons/io5";

export const metadata = {
  title: "Services | Rafael's Barbershop Vintage",
  description: "View our full menu of barbershop services including haircuts, beard trims, signature shaves, and grooming.",
};

const services = [
  { id: "regular-haircut", name: "Regular Haircut", description: "Classic precision cut tailored to your style", price: 43, duration: 30 },
  { id: "shampoo-cut", name: "Shampoo & Cut", description: "Full shampoo followed by a precision haircut", price: 46, duration: 40 },
  { id: "long-hair-scissor", name: "Long Hair / Scissor Cut", description: "Detailed scissor work for longer styles", price: 55, duration: 45 },
  { id: "crew-cut", name: "Crew Cut", description: "Clean, classic short crew cut", price: 30, duration: 25 },
  { id: "beard-trim", name: "Beard Trim", description: "Professional beard trim and grooming", price: 19, duration: 15 },
  { id: "beard-trim-shapeup", name: "Beard Trim & Shape-Up", description: "Beard trim with precise edge shaping", price: 25, duration: 20 },
  { id: "signature-shave", name: "Signature Shave & Face Massage", description: "Luxurious straight razor shave with relaxing face massage", price: 49, duration: 45 },
  { id: "head-shave", name: "Head Shave & Massage", description: "Full head shave with soothing massage", price: 49, duration: 40 },
  { id: "shape-up", name: "Shape-Up & Clean-Up", description: "Hairline edge-up and neckline cleanup", price: 21, duration: 15 },
  { id: "clean-up-neckline", name: "Clean-Up Neckline", description: "Quick neckline cleanup and taper", price: 15, duration: 10 },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-forest-dark text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Classic cuts and grooming services at Rafael&apos;s Barbershop Vintage in the East Village.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-cream-light border border-forest/10 p-6 hover:border-forest/30 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-serif text-xl text-forest">
                    {service.name}
                  </h3>
                  <span className="font-serif text-2xl text-forest">
                    {formatPrice(service.price)}
                  </span>
                </div>

                <p className="text-forest/60 mb-4">{service.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-forest/50">
                    <IoTime className="w-4 h-4" />
                    <span className="text-sm">
                      {formatDuration(service.duration)}
                    </span>
                  </div>
                  <Link href={`/#book`} className="btn-primary text-sm px-4 py-2">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-cream/70 mb-6">
            Select your service and choose a time that works for you.
          </p>
          <Link href="/#book" className="btn-primary">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
