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
import { format, parseISO } from "date-fns";

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
import { useRouter } from "next/navigation";
import { useUpdateMemberMutation } from "@/services/membersApi";

interface FamilyInfoProps {
  editMode: boolean;
  member: any;
  id: string;
  setEditMode: (value: boolean) => void;
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
    isSingleParent: z.string(),
    isSpouseInGrace: z.string(),
    spouseChurchAttendance: z.string(),
    spouseDenomination: z.string(),
    engagedButLivingTogether: z.string(),
    marriedTraditionally: z.string(),
    marriedInCourt: z.string(),
    marriedInChurch: z.string(),
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
const FamilyInfo = ({ editMode, member, id, setEditMode }: FamilyInfoProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // family information
      maritalStatus: member.maritalStatus,
      spouseName: member.spouseName,
      maidenName: member.maidenName,
      spousePhoneNumber: member.spousePhoneNumber,
      spouseEmail: member.spouseEmail,
      marriageAnniversary: parseISO(member.marriageAnniversary),
      spouseBirthday: parseISO(member.spouseBirthday),
      spouseNationality: member.spouseNationality,
      spouseStateOfOrigin: member.spouseStateOfOrigin,
      spouseLGA: member.spouseLGA,
      hometown: member.hometown,
      spouseOccupation: member.spouseOccupation,
      spousePositionHeld: member.spousePositionHeld,
      spouseOfficeAddress: member.spouseOfficeAddress,
      otherRelevantInfo: member.otherRelevantInfo,
      lengthOfMarriage: member.lengthOfMarriage,
      numberOfChildren: member.numberOfChildren,
      numberOfGraceChildren: member.numberOfGraceChildren,
      isSingleParent: member.isSingleParent,
      isSpouseInGrace: member.isSpouseInGrace,
      spouseChurchAttendance: member.spouseChurchAttendance,
      spouseDenomination: member.spouseDenomination,
      engagedButLivingTogether: member.engagedButLivingTogether,
      marriedTraditionally: member.marriedTraditionally,
      marriedInCourt: member.marriedInCourt,
      marriedInChurch: member.marriedInChurch,
      churchName: member.churchName,
      marriageDate: parseISO(member.marriageDate),
    },
  });

  const [updateMember, { isLoading, error }] = useUpdateMemberMutation();
  const router = useRouter();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("clicked");
    console.log({ values });

    try {
      const res = await updateMember({
        memberId: id,
        updatedMember: values,
      });
      console.log(res);
      // router.push("/contacts");
    } catch (err) {
      console.log(err);
    }
    setEditMode(!editMode);
    router.push(`/dashboard/members`);
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
              name="spousePositionHeld"
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
                  <Select
                    defaultValue={member.isSingleParent}
                    onValueChange={field.onChange}
                  >
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
                  <Select
                    defaultValue={member.isSpouseInGrace}
                    onValueChange={field.onChange}
                  >
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
                  <Select
                    defaultValue={member.spouseChurchAttendance}
                    onValueChange={field.onChange}
                  >
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
                  <Select
                    defaultValue={member.engagedButLivingTogether}
                    onValueChange={field.onChange}
                  >
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
                  <Select
                    defaultValue={member.marriedTraditionally}
                    onValueChange={field.onChange}
                  >
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
                  <Select
                    defaultValue={member.marriedInCourt}
                    onValueChange={field.onChange}
                  >
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
                  <Select
                    defaultValue={member.marriedInChurch}
                    onValueChange={field.onChange}
                  >
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

          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        <div className="">
          <h4 className="font-bold text-md">Marital Status</h4>
          <p className="py-2 w-[13vw]">{member.maritalStatus}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Name</h4>
          <p className="py-2 w-[13vw]">{member.spouseName}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Maiden Name</h4>
          <p className="py-2 w-[13vw]">{member.maidenName}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Phone Number</h4>
          <p className="py-2 w-[13vw]">{member.spousePhoneNumber}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Email</h4>
          <p className="py-2 w-[13vw]">{member.spouseEmail}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Marriage Anniversary</h4>
          <p className="py-2 w-[13vw]">
            {format(member.marriageAnniversary, "PP")}
          </p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Birthday</h4>
          <p className="py-2 w-[13vw]">{format(member.spouseBirthday, "PP")}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Nationality</h4>
          <p className="py-2 w-[13vw]">{member.spouseNationality}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse State of Origin</h4>
          <p className="py-2 w-[13vw]">{member.spouseStateOfOrigin}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse LGA</h4>
          <p className="py-2 w-[13vw]">{member.spouseLGA}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Hometown</h4>
          <p className="py-2 w-[13vw]">{member.hometown}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Occupation</h4>
          <p className="py-2 w-[13vw]">{member.spouseOccupation}</p>
        </div>
        {/* <div className="">
          <h4 className="font-bold text-md">Specify Occupation</h4>
          <p className="py-2 w-[13vw]">{member.occ}</p>
        </div> */}
        <div className="">
          <h4 className="font-bold text-md">Spouse Position Held</h4>
          <p className="py-2 w-[13vw]">{member.spousePositionHeld}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Office Address</h4>
          <p className="py-2 w-[13vw]">{member.spouseOfficeAddress}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Other Relevant Info</h4>
          <p className="py-2 w-[13vw]">{member.otherRelevantInfo}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Length of Marriage</h4>
          <p className="py-2 w-[13vw]">{member.lengthOfMarriage}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Number of Children</h4>
          <p className="py-2 w-[13vw]">{member.numberOfChildren}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Number of Grace Children</h4>
          <p className="py-2 w-[13vw]">{member.numberOfGraceChildren}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Is Single Parent</h4>
          <p className="py-2 w-[13vw]">
            {member.isSingleParent ? "Yes" : "No"}
          </p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Is Spouse in Grace</h4>
          <p className="py-2 w-[13vw]">
            {member.isSpouseInGrace ? "Yes" : "No"}
          </p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse church attendance</h4>
          <p className="py-2 w-[13vw]">
            {member.spouseChurchAttendance ? "Yes" : "No"}
          </p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Spouse Denomination</h4>
          <p className="py-2 w-[13vw]">{member.spouseDenomination}</p>
        </div>
      </div>
    </div>
  );
};

export default FamilyInfo;
