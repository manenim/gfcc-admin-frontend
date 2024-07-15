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
      <FormField
        control={form.control}
        name="previousDenomination1From"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="min-w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1997}
                  toYear={2024}
                  disabled={(date: any) =>
                    date > new Date() || date < new Date("1997-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="previousDenomination1To"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="min-w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1997}
                  toYear={2024}
                  disabled={(date: any) =>
                    date > new Date() || date < new Date("1997-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <FormField
        control={form.control}
        name="previousDenomination2From"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="min-w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1997}
                  toYear={2024}
                  disabled={(date: any) =>
                    date > new Date() || date < new Date("1997-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="previousDenomination2To"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="min-w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1997}
                  toYear={2024}
                  disabled={(date: any) =>
                    date > new Date() || date < new Date("1997-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="previousDenomination2PositionHeld"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Held</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Ministerial position Held (If any)"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <FormField
        control={form.control}
        name="previousDenomination3From"
        render={({ field }) => (
          <FormItem>
            <FormLabel>From</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="min-w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1997}
                  toYear={2024}
                  disabled={(date: any) =>
                    date > new Date() || date < new Date("1997-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="previousDenomination3To"
        render={({ field }) => (
          <FormItem>
            <FormLabel>To</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl className="min-w-full">
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[240px] pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      format(field.value, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="center">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={field.onChange}
                  captionLayout="dropdown-buttons"
                  fromYear={1997}
                  toYear={2024}
                  disabled={(date: any) =>
                    date > new Date() || date < new Date("1997-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
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
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
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
                <SelectItem value="Yes">Yes</SelectItem>
                <SelectItem value="No">No</SelectItem>
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
      <FormField
        control={form.control}
        name="specialSkills"
        render={({ field }) => (
          <FormItem>
            <FormLabel>List your special skills</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Special Skills" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="w-full flex justify-end">
        <Button
          type="submit"
          className="w-[8rem] btn btn-primary mt-4 "
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default PrevDenom;
