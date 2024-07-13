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

interface FamilyInfoProps {
  editMode: boolean;
}

type Inputs = z.infer<typeof formSchema>;

const formSchema = z
  .object({
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
  })
  .refine(
    (data) => {
      return data.marriageAnniversary <= new Date();
    },
    {
      message: "Anniversary date must be in the past",
      path: ["marriageAnniversary"],
    }
  );
const FamilyInfo = ({ editMode }: FamilyInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
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
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  if (editMode) {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-12">
            <FormField
              control={form.control}
              name="maritalStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Marital Status
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Marital Status"
                      type="text"
                    />
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
                  <FormLabel className="font-bold text-md">
                    Spouse Name
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Maiden Name
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Spouse Phone Number(s)
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Spouse Email
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Marriage Anniversary
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
              name="spouseBirthday"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Spouse Birthday
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
              name="spouseOccupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Spouse Occupation
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Spouse Occupation"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="spouseNationality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Spouse Nationality
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Spouse State of Origin
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Spouse LGA
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Spouse LGA" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hometown"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">Hometown</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Hometown" type="text" />
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
                  <FormLabel className="font-bold text-md">
                    Spouse Position
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Spouse Office Address
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Other Relevant Info
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Other Relevant Info"
                      type="text"
                    />
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
                  <FormLabel className="font-bold text-md">
                    Length of Marriage
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Length of Marriage"
                      type="text"
                    />
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
                  <FormLabel className="font-bold text-md">
                    Number of Children
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Number of Children"
                      type="text"
                    />
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
                  <FormLabel className="font-bold text-md">
                    Children in church
                  </FormLabel>
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

            <FormField
              control={form.control}
              name="isSingleParent"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Is Single Parent?
                  </FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
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
              name="isSpouseInGrace"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Is Spouse in Grace?
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
              name="spouseChurchAttendance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Spouse Attend
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
              name="spouseDenomination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Spouse Denomination
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Spouse Denomination"
                      type="text"
                    />
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
                  <FormLabel className="font-bold text-md">
                    Living Together?
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
              name="marriedTraditionally"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Married Traditionally?
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
              name="marriedInCourt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Married In Court?
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
              name="marriedInChurch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Married In Church?
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
              name="churchName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Church Name
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Marriage Date
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
          </div>
        </form>
      </Form>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        <div className="">
          <h4 className="font-bold text-md">Marital Status</h4>
          <p className="py-2 w-[13vw]">Married</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Name</h4>
          <p className="py-2 w-[13vw]">John Doe</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Maiden Name</h4>
          <p className="py-2 w-[13vw]">Jane Doe</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Phone Number</h4>
          <p className="py-2 w-[13vw]">+1234567890</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Email</h4>
          <p className="py-2 w-[13vw]">johndoe@example.com</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Marriage Anniversary</h4>
          <p className="py-2 w-[13vw]">2022-01-01</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Birthday</h4>
          <p className="py-2 w-[13vw]">2022-01-01</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Nationality</h4>
          <p className="py-2 w-[13vw]">British</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse State of Origin</h4>
          <p className="py-2 w-[13vw]">Lagos</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse LGA</h4>
          <p className="py-2 w-[13vw]">Agege</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Hometown</h4>
          <p className="py-2 w-[13vw]">London</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Occupation</h4>
          <p className="py-2 w-[13vw]">Engineer</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Specify Occupation</h4>
          <p className="py-2 w-[13vw]">Teacher</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Position Held</h4>
          <p className="py-2 w-[13vw]">Manager</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Office Address</h4>
          <p className="py-2 w-[13vw]">123 Main St, London</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Other Relevant Info</h4>
          <p className="py-2 w-[13vw]">-</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Length of Marriage</h4>
          <p className="py-2 w-[13vw]">10 years</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Number of Children</h4>
          <p className="py-2 w-[13vw]">2</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Number of Grace Children</h4>
          <p className="py-2 w-[13vw]">0</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Is Single Parent</h4>
          <p className="py-2 w-[13vw]">No</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Is Spouse in Grace</h4>
          <p className="py-2 w-[13vw]">No</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md"> Spouse church attendance</h4>
          <p className="py-2 w-[13vw]">yes</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md"> Spouse Denomination</h4>
          <p className="py-2 w-[13vw]">Grace Family</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;
