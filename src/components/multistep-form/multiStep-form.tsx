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
import PersonalInfo from "./personal-info";
import FamilyInfo from "./family-info";
import Career from "./career";
import PrevDenom from "./prev-denom";

type Inputs = z.infer<typeof formSchema>;

const formSchema = z
  .object({
    surname: z.string().min(3),
    othernames: z.string().min(1),
    gender: z.enum(["Male", "Female"]),
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
    nationality: z.string().min(3),
    stateOfOrigin: z.string().min(3),
    lga: z.string().min(3),
    residentialAddress: z.string().min(3),
    landmark: z.string().min(3),
    phoneNumbers: z.string().min(3),
    whatsappNumber: z.string().min(3),
    email: z.string().email().min(3),
    nextOfKinName: z.string().min(3),
    nextOfKinPhoneNumbers: z.string().min(3),

    // FAMILY INFORMATION

    maritalStatus: z.string().min(3),
    spouseName: z.string().min(3),
    maidenName: z.string().min(3),
    spousePhoneNumber: z.string().min(3),
    spouseEmail: z.string().email(),
    marriageAnniversary: z.date(),
    spouseBirthday: z.date(),
    spouseNationality: z.string().min(3),
    spouseStateOfOrigin: z.string().min(3),
    spouseLGA: z.string().min(3),
    hometown: z.string().min(3),
    spouseOccupation: z.string().min(3),
    // specifyOccupation: z.string().min(3),
    spousePositionHeld: z.string().min(3),
    spouseOfficeAddress: z.string().min(3),
    otherRelevantInfo: z.string(),
    lengthOfMarriage: z.string(),
    numberOfChildren: z.string(),
    numberOfGraceChildren: z.string(),
    isSingleParent: z.boolean(),
    isSpouseInGrace: z.boolean(),
    spouseChurchAttendance: z.boolean(),
    spouseDenomination: z.string(),
    engagedButLivingTogether: z.boolean(),
    marriedTraditionally: z.boolean(),
    marriedInCourt: z.boolean(),
    marriedInChurch: z.boolean(),
    churchName: z.string(),
    marriageDate: z.date(),

    // career

    highestAcademicQualification: z.string(),
    discipline: z.string(),
    occupation: z.string(),
    specifyOccupation: z.string(),
    positionHeld: z.string(),
    officeAddress: z.string(),

    // prev denom

    previousDenomination1: z.string(),
    previousDenomination1From: z.date(),
    previousDenomination1To: z.date(),
    previousDenomination1PositionHeld: z.string(),
    previousDenomination1MinisterialOffice: z.string(),
    previousDenomination2: z.string(),
    previousDenomination2From: z.date(),
    previousDenomination2To: z.date(),
    previousDenomination2PositionHeld: z.string(),
    previousDenomination2MinisterialOffice: z.string(),
    previousDenomination3: z.string(),
    previousDenomination3From: z.date(),
    previousDenomination3To: z.date(),
    previousDenomination3PositionHeld: z.string(),
    previousDenomination3MinisterialOffice: z.string(),
    familyChurch: z.string(),
    baptizedInWater: z.boolean(),
    baptizedInWaterWhenWhere: z.string(),
    baptizedInHolySpirit: z.boolean(),
    baptizedInHolySpiritWhenWhere: z.string(),
    passion: z.string(),
    expectedChurchFamily: z.string(),
    specialSkills: z.string(),
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

const MultiForm = () => {
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
      fields: [
        "maritalStatus",
        "spouseName",
        "maidenName",
        "spousePhoneNumber",
        "spouseEmail",
        "marriageAnniversary",
        "spouseBirthday",
        "spouseNationality",
        "spouseStateOfOrigin",
        "spouseLGA",
        "hometown",
        "spouseOccupation",
        "specifyOccupation",
        "positionHeld",
        "officeAddress",
        "otherRelevantInfo",
        "lengthOfMarriage",
        "numberOfChildren",
        "numberOfGraceChildren",
        "isSingleParent",
        "isSpouseInGrace",
        "spouseChurchAttendance",
        "spouseDenomination",
        "engagedButLivingTogether",
        "marriedTraditionally",
        "marriedInCourt",
        "marriedInChurch",
        "churchName",
        "marriageDate",
      ],
    },
    {
      id: "Step 3",
      name: "Career",
      fields: [
        "highestAcademicQualification",
        "discipline",
        "occupation",
        "specifyOccupation",
        "positionHeld",
        "officeAddress",
      ],
    },
    {
      id: "Step 4",
      name: "Previovs Denomination",
      fields: [
        "previousDenomination1",
        "previousDenomination1From",
        "previousDenomination1To",
        "previousDenomination1PositionHeld",
        "previousDenomination1MinisterialOffice",
        "previousDenomination2",
        "previousDenomination2From",
        "previousDenomination2To",
        "previousDenomination2PositionHeld",
        "previousDenomination2MinisterialOffice",
        "previousDenomination3",
        "previousDenomination3From",
        "previousDenomination3To",
        "previousDenomination3PositionHeld",
        "previousDenomination3MinisterialOffice",
        "familyChurch",
        "baptizedInWater",
        "baptizedInWaterWhenWhere",
        "baptizedInHolySpirit",
        "baptizedInHolySpiritWhenWhere",
        "passion",
        "expectedChurchFamily",
        "specialSkills",
      ],
    },
  ];

  type FieldName = keyof Inputs;

  const next = async () => {
    // const fields = steps[currentStep].fields;

    // const isValid = await form.trigger(fields as FieldName[], {
    //   shouldFocus: true,
    // });

    // if (!isValid) return; // If validation fails, don't proceed to next step

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

      // family information

      maritalStatus: "",
      spouseName: "",
      maidenName: "",
      spousePhoneNumber: "",
      spouseEmail: "",
      // marriageAnniversary: "",
      // spouseBirthday: "",
      spouseNationality: "",
      spouseStateOfOrigin: "",
      spouseLGA: "",
      hometown: "",
      spouseOccupation: "",
      spousePositionHeld: "",
      spouseOfficeAddress: "",
      otherRelevantInfo: "",
      lengthOfMarriage: "",
      numberOfChildren: "",
      numberOfGraceChildren: "",
      isSingleParent: false,
      isSpouseInGrace: false,
      spouseChurchAttendance: false,
      spouseDenomination: "",
      engagedButLivingTogether: false,
      marriedTraditionally: false,
      marriedInCourt: false,
      marriedInChurch: false,
      churchName: "",
      // marriageDate: "",

      //career

      highestAcademicQualification: "",
      discipline: "",
      occupation: "",
      specifyOccupation: "",
      positionHeld: "",
      officeAddress: "",

      // prev denom
   
      previousDenomination1: "",
      // previousDenomination1From: "",
      // previousDenomination1To: "",
      previousDenomination1PositionHeld: "",
      previousDenomination1MinisterialOffice: "",
      previousDenomination2: "",
      // previousDenomination2From: "",
      // previousDenomination2To: "",
      previousDenomination2PositionHeld: "",
      previousDenomination2MinisterialOffice: "",
      previousDenomination3: "",
      // previousDenomination3From: "",
      // previousDenomination3To: "",
      previousDenomination3PositionHeld: "",
      previousDenomination3MinisterialOffice: "",
      familyChurch: "",
      baptizedInWater: false,
      baptizedInWaterWhenWhere: "",
      baptizedInHolySpirit: false,
      baptizedInHolySpiritWhenWhere: "",
      passion: "",
      expectedChurchFamily: "",
      specialSkills: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="overflow-hidden pt-10 w-[80%] mx-auto px-8">
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
            {currentStep === 0 && <PersonalInfo delta={delta} form={form} />}
            {currentStep === 1 && <FamilyInfo delta={delta} form={form} />}
            {currentStep === 2 && <Career delta={delta} form={form} />}
            {currentStep === 3 && <PrevDenom delta={delta} form={form} />}
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

export default MultiForm;
