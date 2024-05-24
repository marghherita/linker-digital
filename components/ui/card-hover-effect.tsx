"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import { Clock, Timer, TimerOffIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "./scroll-area";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id?: string;
    title: string;
    description?: JSX.Element | string;
    price?: string;
    time?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.id}
          className="relative group  block p-2 h-full w-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-cardHover dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Dialog>
            <DialogTrigger className="h-full w-full ">
              <Card>
                <CardTitle className="text-left">{item.title}</CardTitle>
                <div>
                  <CardPrice>{item.price}</CardPrice>
                  <CardTime>{item.time}</CardTime>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="border-4 border-blue-600">
              <ScrollArea className=" max-h-[400px] sm:max-h-[600px]  w-auto rounded-md border border-red-800">
                <div className="flex flex-col gap-4">
                  <DialogTitle className="text-xl">
                    {item?.title.toUpperCase()}
                  </DialogTitle>
                  {item?.description}
                  <div>
                    <p>
                      Durata: <span className="font-bold">{item?.time}</span>
                    </p>
                    <p>
                      Prezzo: <span className="font-bold">€{item?.price}</span>{" "}
                      + IVA
                    </p>
                  </div>

                  <Button variant="default" className="mt-4">
                    Prenota
                  </Button>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-cardBg border border-transparent dark:border-cardHover group-hover:border-cardHover relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4 flex flex-col justify-between gap-10 ">
          {children}
        </div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardPrice = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row  gap-2 tracking-wide leading-relaxed text-sm">
      <p className={cn(" text-zinc-100 font-bold ", className)}>€{children}</p>
      <p className=" text-cardHover">+ IVA</p>
    </div>
  );
};
export const CardTime = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-row  gap-2 mt-2 tracking-wide leading-relaxed text-sm items-center">
      <p className={cn(" text-zinc-100 font-bold ", className)}>{children}</p>
      <Clock width={16} color="#f4f4f5" />
    </div>
  );
};
