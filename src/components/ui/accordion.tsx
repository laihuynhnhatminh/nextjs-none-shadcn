"use client";

import React, { useState, useContext, createContext, useRef } from "react";
import { LuChevronDown } from "react-icons/lu";

type AccordionType = "single" | "multiple";

type AccordionContextType = Readonly<{
  type: AccordionType;
  openItems: Set<string>;
  toggleItem: (value: string) => void;
  mountedItems: Set<string>;
  markAsMounted: (value: string) => void;
}>;

type AccordionProps = Readonly<{
  type?: AccordionType;
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}>;

type AccordionItemProps = Readonly<{
  value: string;
  className?: string;
  children: React.ReactNode;
}>;

type AccordionTriggerProps = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

type AccordionContentProps = Readonly<{
  className?: string;
  children: React.ReactNode;
}>;

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordionContext(): AccordionContextType {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
}

export function Accordion({
  type = "single",
  defaultValue,
  className = "",
  children,
  ...props
}: React.ComponentProps<"div"> & AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    if (defaultValue) {
      if (Array.isArray(defaultValue)) {
        return new Set(defaultValue);
      }

      return new Set([defaultValue]);
    }

    return new Set();
  });

  const [mountedItems, setMountedItems] = useState<Set<string>>(() => {
    if (defaultValue) {
      if (Array.isArray(defaultValue)) {
        return new Set(defaultValue);
      }

      return new Set([defaultValue]);
    }

    return new Set();
  });

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);

      if (type === "single") {
        if (newSet.has(value)) {
          newSet.delete(value);
        } else {
          newSet.clear();
          newSet.add(value);
        }
      } else {
        if (newSet.has(value)) {
          newSet.delete(value);
        } else {
          newSet.add(value);
        }
      }
      return newSet;
    });
  };

  const markAsMounted = (value: string) => {
    setMountedItems((prev) => new Set([...prev, value]));
  };

  const contextValue: AccordionContextType = {
    type,
    openItems,
    toggleItem,
    mountedItems,
    markAsMounted,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`accordion ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = createContext<string | null>(null);

export function AccordionItem({
  value,
  className,
  children,
}: React.ComponentProps<"div"> & AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={`border-b last:border-b-0 ${className ? className : ""}`}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  className = "",
  children,
  ...props
}: React.ComponentProps<"button"> & AccordionTriggerProps) {
  const { openItems, toggleItem, markAsMounted } = useAccordionContext();
  const value = useContext(AccordionItemContext);

  if (!value) {
    throw new Error("AccordionTrigger must be used within an AccordionItem");
  }

  const isOpen = openItems.has(value);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!openItems.has(value)) {
      markAsMounted(value);
    }

    toggleItem(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`w-full flex items-center justify-between py-4 px-4 text-left font-medium transition-colors rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring focus:ring-inset ${className}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      id={`accordion-trigger-${value}`}
      name={`accordion-trigger-${value}`}
      aria-expanded={isOpen}
      aria-controls={`accordion-content-${value}`}
      {...props}
    >
      <span>{children}</span>
      <LuChevronDown
        size={24}
        className={`transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

export function AccordionContent({
  className = "",
  children,
  ...props
}: React.ComponentProps<"div"> & AccordionContentProps) {
  const { openItems, mountedItems } = useAccordionContext();
  const value = useContext(AccordionItemContext);

  if (!value) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }

  const isOpen = openItems.has(value);
  const isMounted = mountedItems.has(value);

  return (
    <div
      id={`accordion-content-${value}`}
      role="region"
      aria-hidden={!isOpen}
      aria-labelledby={`accordion-trigger-${value}`}
      className={`overflow-hidden transition-all duration-300 ${
        isOpen
          ? "fade-out-50 opacity-100 max-h-screen"
          : "fade-in-50 opacity-0 max-h-0"
      }`}
    >
      {/* Lazy mounting: only render children after first open */}
      {isMounted && (
        <div className={`p-4 ${className}`} {...props}>
          {children}
        </div>
      )}
    </div>
  );
}
