"use client"
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

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

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
import { useForm } from "react-hook-form";
import * as z from "zod";

interface PrevDenomProps {
  editMode: boolean;
}


type Inputs = z.infer<typeof prevDenomSchema>;

const prevDenomSchema = z.object({
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
});



const PrevDenomInfo = ({ editMode }: PrevDenomProps) => {
   const form = useForm<z.infer<typeof prevDenomSchema>>({
     resolver: zodResolver(prevDenomSchema),
     defaultValues: {
       previousDenomination1: "",
      //  previousDenomination1From: null,
      //  previousDenomination1To: null,
       previousDenomination1PositionHeld: "",
       previousDenomination1MinisterialOffice: "",
       previousDenomination2: "",
      //  previousDenomination2From: null,
      //  previousDenomination2To: null,
       previousDenomination2PositionHeld: "",
       previousDenomination2MinisterialOffice: "",
       previousDenomination3: "",
      //  previousDenomination3From: null,
      //  previousDenomination3To: null,
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

   const handleSubmit = async (values: z.infer<typeof prevDenomSchema>) => {
     console.log({ values });
   };

   if (editMode) {
     return (
       <Form {...form}>
         <form onSubmit={form.handleSubmit(handleSubmit)} className="">
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-12">
             {/* Form fields go here */}
             <FormField
               control={form.control}
               name="previousDenomination1"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className="font-bold text-md">Denom 1</FormLabel>
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
             {/* Add more form fields here */}
             <FormField
               control={form.control}
               name="previousDenomination1From"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className="font-bold text-md">
                     Denom 1 From
                   </FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl className="min-w-full">
                         <Button
                           variant={"outline"}
                           className={cn(
                             "pl-3 text-left font-normal",
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
                   <FormLabel className="font-bold text-md">
                     Denom 1 To
                   </FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl className="min-w-full">
                         <Button
                           variant={"outline"}
                           className={cn(
                             "pl-3 text-left font-normal",
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
                   <FormLabel className="font-bold text-md">
                     Denom 1 Position
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Previous Denomination 1 Position Held"
                       type="text"
                     />
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
                   <FormLabel className="font-bold text-md">
                     Denom 1 Office held
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Previous Denomination 1 Ministerial Office"
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
                   <FormLabel className="font-bold text-md">Denom 2</FormLabel>
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
                   <FormLabel className="font-bold text-md">
                     Denom 2 From
                   </FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl className="min-w-full">
                         <Button
                           variant={"outline"}
                           className={cn(
                             "pl-3 text-left font-normal",
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
                   <FormLabel className="font-bold text-md">
                     Denom 2 To
                   </FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl className="min-w-full">
                         <Button
                           variant={"outline"}
                           className={cn(
                             "pl-3 text-left font-normal",
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
                   <FormLabel className="font-bold text-md">
                     Denom 2 Position
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Previous Denomination 2 Position Held"
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
                   <FormLabel className="font-bold text-md">
                     Denom 2 Office
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Previous Denomination 2 Ministerial Office"
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
                   <FormLabel className="font-bold text-md">Denom 3</FormLabel>
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
                   <FormLabel className="font-bold text-md">
                     Denom 3 From
                   </FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl className="min-w-full">
                         <Button
                           variant={"outline"}
                           className={cn(
                             "pl-3 text-left font-normal",
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
                   <FormLabel className="font-bold text-md">
                     Denom 3 To
                   </FormLabel>
                   <Popover>
                     <PopoverTrigger asChild>
                       <FormControl className="min-w-full">
                         <Button
                           variant={"outline"}
                           className={cn(
                             "pl-3 text-left font-normal",
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
                   <FormLabel className="font-bold text-md">
                      Denom 3 Position 
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Previous Denomination 3 Position Held"
                       type="text"
                     />
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
                   <FormLabel className="font-bold text-md">
                     Denom 3 Office held
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Previous Denomination 3 Ministerial Office"
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
                   <FormLabel className="font-bold text-md">
                     Family Church
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Family Church"
                       type="text"
                     />
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
                   <FormLabel className="font-bold text-md">
                     Baptized in Water
                   </FormLabel>
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
               name="baptizedInWaterWhenWhere"
               render={({ field }) => (
                 <FormItem>
                   <FormLabel className="font-bold text-md">
                     Baptized Where
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Baptized in Water When/Where"
                       type="text"
                     />
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
                   <FormLabel className="font-bold text-md">Passion</FormLabel>
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
                   <FormLabel className="font-bold text-md">
                     Expected Family
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
                   <FormLabel className="font-bold text-md">
                     Special Skills
                   </FormLabel>
                   <FormControl>
                     <Input
                       {...field}
                       placeholder="Special Skills"
                       type="text"
                     />
                   </FormControl>
                   <FormMessage />
                 </FormItem>
               )}
             />
           </div>
         </form>
       </Form>
     );
   }


    return (
      <div>
        {/* Read-only display goes here */}
        <div className="grid grid-cols-4 gap-x-8 gap-y-14">
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 1</h4>
            <p>Christ Apostolic Church</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 1 From</h4>
            <p>2015-01-01</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 1 To</h4>
            <p>2020-01-01</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">
              Previous Denomination 1 Position Held
            </h4>
            <p>Pastor</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">
              Previous Denomination 1 Ministerial Office
            </h4>
            <p>Reverend</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 2</h4>
            <p>Redeemed Christian Church of God</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 2 From</h4>
            <p>2010-01-01</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 2 To</h4>
            <p>2015-01-01</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">
              Previous Denomination 2 Position Held
            </h4>
            <p>Minister</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">
               Denom 2  Office held
            </h4>
            <p>Deacon</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md"> Denom 3</h4>
            <p>Living Faith Church Worldwide</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 3 From</h4>
            <p>2005-01-01</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Previous Denomination 3 To</h4>
            <p>2010-01-01</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">
              Previous Denomination 3 Position Held
            </h4>
            <p>Elder</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">
              Previous Denomination 3 Ministerial Office
            </h4>
            <p>Priest</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Family Church</h4>
            <p>Christ Apostolic Church</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Baptized in Water</h4>
            <p>Yes</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Baptized in Holy Spirit</h4>
            <p>Yes</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Passion</h4>
            <p>Evangelism</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Expected Church Family</h4>
            <p>Christ Apostolic Church</p>
          </div>
          <div className="">
            <h4 className="font-bold text-md">Special Skills</h4>
            <p>Public Speaking</p>
          </div>
        </div>
      </div>
    );
  

};

export default PrevDenomInfo