"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { format } from "date-fns";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import PersonalInfo from "@/components/multistep-form/personal-info";

type Inputs = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    surname: z.string().min(3),
    othernames: z.string().min(1),
    gender: z.enum(["Male", "Female"]),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
    nationality: z.string(),
    stateOfOrigin: z.string(),
    lga: z.string(),
    residentialAddress: z.string(),
    landmark: z.string(),
    phoneNumbers: z.string(),
    whatsappNumber: z.string(),
    email: z.string().email(),
    nextOfKinName: z.string(),
    nextOfKinPhoneNumbers: z.string(),
  })
  .refine(
    (data) => {
      const dob = new Date(data.dob);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      return age >= 21;
    },
    {
      message: "Age must be 21 or older",
      path: ["dob"],
    }
  );

const TeachersForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);
    const delta = currentStep - previousStep;


  const steps = [
    {
      id: "Step 1",
      name: "Personal Information",
      fields: [
        "surname",
        "othernames",
        "gender",
        "dob",
        "nationality",
        "stateOfOrigin",
        "lga",
        "residentialAddress",
        "landmark",
        "phoneNumbers",
        "whatsappNumber",
        "email",
        "nextOfKinName",
        "nextOfKinPhoneNumbers",
      ],
    },
    {
      id: "Step 2",
      name: "Family Information",
      fields: ["country", "state", "city", "street", "zip"],
    },
    { id: "Step 3", name: "Career" },
    { id: "Step 4", name: "Previovs Denomination" },
  ];

  type FieldName = keyof Inputs;

  const next = async () => {
    const fields = steps[currentStep].fields;

    const isValid = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!isValid) return; // If validation fails, don't proceed to next step

    // Validation succeeded, proceed to next step
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      surname: "",
      othernames: "",
      // gender: "",
      // dob: "",
      nationality: "",
      stateOfOrigin: "",
      lga: "",
      residentialAddress: "",
      landmark: "",
      phoneNumbers: "",
      whatsappNumber: "",
      email: "",
      nextOfKinName: "",
      nextOfKinPhoneNumbers: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="overflow-hidden pt-10 w-[80%] mx-auto">
      <nav aria-label="Progress">
        <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-sky-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step">
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-20">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="">
            {currentStep === 0 && (
              <PersonalInfo delta={delta} form = {form} />
            )}
            {/* <Button type="submit" className="w-full">
              Submit
            </Button> */}
          </form>
        </Form>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachersForm;
