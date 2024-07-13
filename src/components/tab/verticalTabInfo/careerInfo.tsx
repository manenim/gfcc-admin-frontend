import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface CareerProps {
  editMode: boolean;
}

type Inputs = z.infer<typeof formSchema>;

const formSchema = z.object({
  highestAcademicQualification: z.string(),
  discipline: z.string(),
  occupation: z.string(),
  specifyOccupation: z.string(),
  positionHeld: z.string(),
  officeAddress: z.string(),
});

const CareerInfo = ({ editMode }: CareerProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      highestAcademicQualification: "",
      discipline: "",
      occupation: "",
      specifyOccupation: "",
      positionHeld: "",
      officeAddress: "",
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
              name="highestAcademicQualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-md">
                    Highest Qualification
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Discipline
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Occupation
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Occupation
                  </FormLabel>
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
                  <FormLabel className="font-bold text-md">
                    Position Held
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Position Held/Rank"
                      type="text"
                    />
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
                  <FormLabel className="font-bold text-md">
                    Office Address
                  </FormLabel>
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
        </form>
      </Form>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        <div className="">
          <h4 className="font-bold text-md">Highest Academic Qualification</h4>
          <p className="py-2 w-[13vw]">Bsc</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Discipline</h4>
          <p className="py-2 w-[13vw]">Computer Science</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Occupation</h4>
          <p className="py-2 w-[13vw]">Software Developer</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Specify Occupation/Business</h4>
          <p className="py-2 w-[13vw]">Software Developer</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Position Held/Rank</h4>
          <p className="py-2 w-[13vw]">Software Developer</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Office/Business Address</h4>
          <p className="py-2 w-[13vw]">12 uruan street. nwanniba</p>
        </div>
      </div>
    </div>
  );
};
export default CareerInfo;
