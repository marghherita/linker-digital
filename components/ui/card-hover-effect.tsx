"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { Button } from "./button";
import { Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "./scroll-area";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useCalendly } from "@/zustand/useCalendly";
import { isMobile } from "react-device-detect";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const { isOpen, setOpen, setClose } = useCalendly();

  useCalendlyEventListener({
    onEventScheduled: () => {
      console.log("quindi?");
      setSuccess(true);
      // setClose();
    },
  });

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10 ",
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
          <Dialog
            onOpenChange={() => {
              setSuccess(false);
              setClose();
            }}
          >
            <DialogTrigger className="h-full w-full ">
              <Card>
                <CardTitle className="text-left">{item.title}</CardTitle>
                <div>
                  <CardPrice>{item.price}</CardPrice>
                  <CardTime>{item.time}</CardTime>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              {!isOpen && (
                <ScrollArea className="h-fit sm:h-[500px] w-auto rounded-md ">
                  <div className="flex flex-col gap-4">
                    <DialogTitle className="text-xl font-extrabold">
                      {item?.title.toUpperCase()}
                    </DialogTitle>
                    {item?.description}
                    <div>
                      <p>
                        Durata: <span className="font-bold">{item?.time}</span>
                      </p>
                      <p>
                        Prezzo:{" "}
                        <span className="font-bold">€{item?.price}</span> + IVA
                      </p>
                    </div>

                    <Button
                      variant="default"
                      className="mt-4"
                      onClick={setOpen}
                    >
                      Prenota
                    </Button>
                  </div>
                </ScrollArea>
              )}
              {/* {success && (
                <ScrollArea className="h-fit sm:h-[400px]  w-auto rounded-md ">
                  <div className="flex flex-col gap-4">
                    <DialogTitle className="text-xl text-center ">
                      Grazie!
                    </DialogTitle>
                  </div>
                </ScrollArea>
              )} */}

              {isOpen && (
                <InlineWidget
                  styles={
                    isMobile && {
                      height: "500px",
                    }
                  }
                  url="https://calendly.com/margherita-grasso/first-meeting"
                />
              )}
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
        "rounded-2xl h-full  w-full p-4 overflow-hidden bg-primary border border-transparent dark:border-cardHover group-hover:border-cardHover relative z-20",
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
