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

const PrevDenom = ({ delta, form, submit }: any) => {
  return (
    <div>
      <FormField
        control={form.control}
        name="previousDenomination1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous Denomination 1</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Previous Denomination 1"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### From ```jsx
      <FormField
        control={form.control}
        name="previousDenomination1From"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From</FormLabel>
            <FormControl>
              <Input {...field} placeholder="From" type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### To ```jsx
      <FormField
        control={form.control}
        name="previousDenomination1To"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To</FormLabel>
            <FormControl>
              <Input {...field} placeholder="To" type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Position Held ```jsx
      <FormField
        control={form.control}
        name="previousDenomination1PositionHeld"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Held</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Position Held" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Ministerial Office Held (If any) ```jsx
      <FormField
        control={form.control}
        name="previousDenomination1MinisterialOffice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ministerial Office Held (If any)</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ministerial Office Held (If any)"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Previous Denomination 2 ```jsx
      <FormField
        control={form.control}
        name="previousDenomination2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous Denomination 2</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Previous Denomination 2"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### From ```jsx
      <FormField
        control={form.control}
        name="previousDenomination2From"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From</FormLabel>
            <FormControl>
              <Input {...field} placeholder="From" type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### To ```jsx
      <FormField
        control={form.control}
        name="previousDenomination2To"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To</FormLabel>
            <FormControl>
              <Input {...field} placeholder="To" type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Position Held ```jsx
      <FormField
        control={form.control}
        name="previousDenomination2PositionHeld"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Held</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Position Held" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Ministerial Office Held (If any) ```jsx
      <FormField
        control={form.control}
        name="previousDenomination2MinisterialOffice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ministerial Office Held (If any)</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ministerial Office Held (If any)"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Previous Denomination 3 ```jsx
      <FormField
        control={form.control}
        name="previousDenomination3"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous Denomination 3</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Previous Denomination 3"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### From ```jsx
      <FormField
        control={form.control}
        name="previousDenomination3From"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From</FormLabel>
            <FormControl>
              <Input {...field} placeholder="From" type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### To ```jsx
      <FormField
        control={form.control}
        name="previousDenomination3To"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To</FormLabel>
            <FormControl>
              <Input {...field} placeholder="To" type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Position Held ```jsx
      <FormField
        control={form.control}
        name="previousDenomination3PositionHeld"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Held</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Position Held" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Ministerial Office Held (If any) ```jsx
      <FormField
        control={form.control}
        name="previousDenomination3MinisterialOffice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ministerial Office Held (If any)</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ministerial Office Held (If any)"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="familyChurch"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Which is your family church (Where you were born into)?
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="Family Church" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Have you been baptized in water? ```jsx
      <FormField
        control={form.control}
        name="baptizedInWater"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Have you been baptized in water?</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Baptized in water?" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      #### If yes, when/where? ```jsx
      <FormField
        control={form.control}
        name="baptizedInWaterWhenWhere"
        render={({ field }) => (
          <FormItem>
            <FormLabel>If yes, when/where?</FormLabel>
            <FormControl>
              <Input {...field} placeholder="When/Where" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### Have you been baptized in the Holy Spirit? ```jsx
      <FormField
        control={form.control}
        name="baptizedInHolySpirit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Have you been baptized in the Holy Spirit?</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Baptized in holy spirit" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="baptizedInHolySpiritWhenWhere"
        render={({ field }) => (
          <FormItem>
            <FormLabel>If yes, where/when?</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Where/When" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### What is your passion (What you love to do and are good at)? ```jsx
      <FormField
        control={form.control}
        name="passion"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              What is your passion (What you love to do and are good at)?
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="Passion" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### What kind of church family would you expect us to be? ```jsx
      <FormField
        control={form.control}
        name="expectedChurchFamily"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              What kind of church family would you expect us to be?
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Expected Church Family"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      #### List your special skills (The things you do well) ```jsx
      <FormField
        control={form.control}
        name="specialSkills"
        render={({ field }) => (
          <FormItem>
            <FormLabel>List your special skills (The do well)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Special Skills" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button
        type="submit"
        onSubmit={() => submit()}
        className="w-full  bg-red-300"
      >
        Submit
      </Button>
    </div>
  );
};

export default PrevDenom;
