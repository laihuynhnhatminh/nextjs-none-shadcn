import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import AlertButton from "./_components/alert-button";

export default async function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Accordion type="single" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Panel 1</AccordionTrigger>
          <AccordionContent>
            <AlertButton />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Panel 1</AccordionTrigger>
          <AccordionContent>Item 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Panel 1</AccordionTrigger>
          <AccordionContent>Item 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
