"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { motion } from "framer-motion";

import {
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
import { CalendarIcon } from "lucide-react";
const Career = ({ delta, form }: any) => {
  return (
    <div>
      <FormField
        control={form.control}
        name="highestAcademicQualification"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Highest Academic Qualification</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Highest Academic Qualification"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="discipline"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Discipline</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Discipline" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="occupation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Occupation</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Occupation" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="specifyOccupation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Specify Occupation/Business</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Specify Occupation/Business"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="positionHeld"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Held/Rank</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Position Held/Rank" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="officeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Office/Business Address</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Office/Business Address"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Career;
