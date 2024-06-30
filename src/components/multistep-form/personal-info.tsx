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

const PersonalInfo = ({ delta, form }: any) => {
  return (
    <motion.div
      initial={{ x: delta >= 0 ? "50%" : "-10%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}>
      <p className="text-base font-semibold leading-7 mb-8 text-gray-900">
        Provide your personal details.
      </p>
      <div className=" grid grid-cols-2 gap-x-10 gap-y-8">
        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  Surname
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Surname" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="othernames"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  Othernames
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="other names" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  Gender
                </FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="block text-md leading-6">
                Date of birth
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl className="min-w-full">
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}>
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

        <div className="grid col-span-2 grid-cols-3 gap-4 gap-x-10 gap-y-8">
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  Nationality
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Nationality" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stateOfOrigin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  State of Origin (For Nigerians)
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="State of Origin" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lga"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-md leading-6">LGA</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="LGA" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="residentialAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-md leading-6">
                Residential Address
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Residential Address"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="landmark"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-md leading-6">
                Major road/Street/Landmark locating your residence
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Landmark" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nextOfKinName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-md leading-6">
                Next of Kin Name
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder="Next of Kin Name" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nextOfKinPhoneNumbers"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-md leading-6">
                Phone Numbers
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Next of Kin Phone Numbers"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid col-span-2 grid-cols-3 gap-4 gap-x-10 gap-y-8">
          <FormField
            control={form.control}
            name="phoneNumbers"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  Phone Numbers
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Phone Numbers" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsappNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-md leading-6">
                  Whatsapp Number
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Whatsapp Number" type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block text-md leading-6">Email</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Email" type="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
