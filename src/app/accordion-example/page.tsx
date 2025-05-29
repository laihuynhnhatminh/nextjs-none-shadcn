import { HeavyComponent } from "@/components/customs/heavy-component";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default async function AccordionExample() {
  return (
    <div className="w-3xs md:w-2xl flex flex-col gap-6 items-center justify-items-center min-h-full p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-xl font-semibold mb-4">Single Mode</h2>
        <Accordion
          type="single"
          defaultValue="item-1"
          className="border rounded-lg bg-white"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>✨ Panel 1</AccordionTrigger>
            <AccordionContent>
              <HeavyComponent name="Panel 1" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>🎭 Panel 2</AccordionTrigger>
            <AccordionContent>
              <HeavyComponent name="Panel 2" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>🌟 Panel 3</AccordionTrigger>
            <AccordionContent>
              <HeavyComponent name="Panel 3" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-xl font-semibold mb-4">Multi Mode</h2>
        <Accordion type="multiple" className="border rounded-lg bg-white">
          <AccordionItem value="item-1">
            <AccordionTrigger>✨ Panel 1</AccordionTrigger>
            <AccordionContent>
              <HeavyComponent name="Panel 1" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>🎭 Panel 2</AccordionTrigger>
            <AccordionContent>
              <HeavyComponent name="Panel 2" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>🌟 Panel 3</AccordionTrigger>
            <AccordionContent>
              <HeavyComponent name="Panel 3" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
