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

interface PersonalInfoProps {
  editMode: boolean;
}


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


const PersonalInformation = ({editMode}: PersonalInfoProps) => {

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

    if (editMode) {
        return (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="">
              <div className="grid grid-cols-4 gap-x-8 gap-y-12">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="block font-bold text-md">
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
                      <FormLabel className="block font-bold text-md">
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

                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-bold text-md">
                        Nationality
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nationality"
                          type="text"
                        />
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
                      <FormLabel className="block font-bold text-md">
                        State of Origin
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="State of Origin"
                          type="text"
                        />
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
                      <FormLabel className="block font-bold text-md">
                        LGA
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="LGA" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              

              <FormField
                control={form.control}
                name="residentialAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block font-bold text-md">
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
                    <FormLabel className="block font-bold text-md">
                      Landmark 
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
                    <FormLabel className="block font-bold text-md">
                      Next of Kin Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Next of Kin Name"
                        type="text"
                      />
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
                    <FormLabel className="block font-bold text-md">
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

              {/* <div className="grid col-span-2 grid-cols-3 gap-4 gap-x-10 gap-y-8"> */}
                <FormField
                  control={form.control}
                  name="phoneNumbers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block font-bold text-md">
                        Phone Numbers
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Phone Numbers"
                          type="text"
                        />
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
                      <FormLabel className="block font-bold text-md">
                        Whatsapp Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Whatsapp Number"
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
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        <div className="">
          <h4 className="font-bold text-md">Gender</h4>
          <p className="py-2 w-[13vw]">Male</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Date Of Birth</h4>
          <p className="py-2 w-[13vw]">20/07/2000</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Nationality</h4>
          <p className="py-2 w-[13vw]">Nigeria</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">State of Origin</h4>
          <p className="py-2 w-[13vw]">Akwa Ibom</p>
              </div>
        <div className="">
          <h4 className="font-bold text-md">LGA</h4>
          <p className="py-2 w-[13vw]">Ikwa</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Residential Address</h4>
          <p className="py-2 w-[13vw]">No. 24, Akwa Ibom Road</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Landmark</h4>
          <p className="py-2 w-[13vw]">Near the Post Office</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Phone Numbers</h4>
          <p className="py-2 w-[13vw]">+0000000000000000</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Whatsapp Number</h4>
          <p className="py-2 w-[13vw]">+0000000000000000</p>
              </div>
              <div className="">
          <h4 className="font-bold text-md">Next of Kin Name</h4>
          <p className="py-2 w-[13vw]">John Doe</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Next of Kin Phone Numbers</h4>
          <p className="py-2 w-[13vw]">+0000000000000000</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation