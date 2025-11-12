import { Container } from "@/components/layouts/container";
import Image from "next/image";

const features = [
  {
    title: "Exhibitor & Attendee Management",
    description:
      "Registrant lists with database, bulk invites, booth assignments.",
    image: "/exhibitor-management.png",
    bgColor: "bg-[#C85A1A]",
  },
  {
    title: "Product Catalogue & Booths",
    description:
      "Exhibitor product listings, multi-user booth access, and searchable booth inventory.",
    image: "/catalogueandbooth.png",
    bgColor: "bg-[#F5E6DC]",
  },
  {
    title: "Meetings & Engagement",
    description:
      "Real-time appointment booking, waitlists, QR based locked chats, and favorites.",
    image: "/engagement.png",
    bgColor: "bg-[#F5E6DC]",
  },
  {
    title: "Orders & Payments",
    description:
      "On-application ordering, multi-currency invoicing, payment proof uploads, and receipt generation.",
    image: "/ordersandpayment.png",
    bgColor: "bg-[#C85A1A]",
  },
  {
    title: "Analytics",
    description: "Live dashboards, post-event reporting, and CSV/PDF exports.",
    image: "/analytics.png",
    bgColor: "bg-[#F5E6DC]",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="w-full py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-18 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="flex flex-col h-full">
                <div
                  className={`${feature.bgColor} rounded-2xl  flex items-center justify-center min-h-[280px] md:min-h-[320px] lg:min-h-[400px] xl:min-h-[428px] relative overflow-hidden`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={748}
                      height={458}
                      className="object-contain max-w-full h-auto"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-[1.5rem] md:text-[2rem] font-semibold text-black mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
