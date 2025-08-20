"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5"
import { cn } from "@/lib/utils"

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium outline-none group cursor-pointer",
          className
        )}
        {...props}
      >
        {children}

        {/* Swap icons using parent [data-state] */}
        <span className="shrink-0 translate-y-0.5 text-gray-400">
          <IoAddOutline className="block group-data-[state=open]:hidden" size={40} />
          <IoRemoveOutline className="hidden group-data-[state=open]:block" size={40} />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        className
      )}
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
