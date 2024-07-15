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

const FamilyInfo = ({ delta, form }: any) => {
  return (
    <div className=" grid grid-cols-2 gap-x-10 gap-y-8">
      <FormField
        control={form.control}
        name="maritalStatus"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Marital Status</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Marital Status" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="spouseName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Name (If Married)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Spouse Name" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="maidenName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Maiden Name (For female spouse)</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Maiden Name" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="spousePhoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Phone Number(s)</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Spouse Phone Number(s)"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="spouseEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Email</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Spouse Email" type="email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="marriageAnniversary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Marriage Anniversary</FormLabel>
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
        name="spouseBirthday"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Birthday</FormLabel>
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
        name="spouseOccupation"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Occupation</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Spouse Occupation" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid col-span-2 grid-cols-3 gap-4 gap-x-10 gap-y-8">
        <FormField
          control={form.control}
          name="spouseNationality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spouse Nationality</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Spouse Nationality"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spouseStateOfOrigin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spouse State of Origin</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Spouse State of Origin"
                  type="text"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="spouseLGA"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spouse LGA</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Spouse LGA" type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="hometown"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Hometown</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Hometown" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="spousePositionHeld"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position Held by Spouse</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Spouse Position Held"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="spouseOfficeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Office Address</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Spouse Office Address"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="otherRelevantInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Other Relevant Info</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Other Relevant Info" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lengthOfMarriage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Length of Marriage</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Length of Marriage" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="numberOfChildren"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Children</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Number of Children" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="numberOfGraceChildren"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Grace Children</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Number of Grace Children"
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
          name="isSingleParent"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is Single Parent?</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
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
          name="isSpouseInGrace"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is Spouse in Grace?</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
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
          name="spouseChurchAttendance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Spouse Church Attendance</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
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
      </div>
      <FormField
        control={form.control}
        name="spouseDenomination"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Spouse Denomination</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Spouse Denomination" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="engagedButLivingTogether"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Engaged But Living Together?</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
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
        name="marriedTraditionally"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Married Traditionally?</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
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
        name="marriedInCourt"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Married In Court?</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
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
        name="marriedInChurch"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Married In Church?</FormLabel>
            <Select onValueChange={field.onChange}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your gender" />
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
        name="churchName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Church Name</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Church Name" type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="marriageDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Marriage Date</FormLabel>
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
    </div>
  );
};

export default FamilyInfo;
