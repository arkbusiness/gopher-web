import { Container } from "@/components/layouts/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { faqData } from "@/constants";

export const FAQSection = () => {
  return (
    <section className="w-full py-20 bg-background" id="faq">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-black font-semibold text-[clamp(1.75rem,5vw,2.2rem)] font-montserrat leading-[120%] mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-foreground text-base">
              Gopher Event Management Software
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-0 py-2"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground text-base leading-relaxed font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
