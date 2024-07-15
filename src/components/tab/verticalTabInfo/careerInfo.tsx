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
import { Button } from "@/components/ui/button";
import { useUpdateMemberMutation } from "@/services/membersApi";
import { useRouter } from "next/router";

interface CareerProps {
  editMode: boolean;
  member: Inputs;
  id: string;
  setEditMode: (value: boolean) => void;
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

const CareerInfo = ({ editMode, member, id, setEditMode }: CareerProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      highestAcademicQualification: member.highestAcademicQualification,
      discipline: member.discipline,
      occupation: member.occupation,
      specifyOccupation: member.specifyOccupation,
      positionHeld: member.positionHeld,
      officeAddress: member.officeAddress,
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

          <Button type="submit">Save</Button>
        </form>
      </Form>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-14">
        <div className="">
          <h4 className="font-bold text-md">Highest Academic Qualification</h4>
          <p className="py-2 w-[13vw]">{member.highestAcademicQualification}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Discipline</h4>
          <p className="py-2 w-[13vw]">{member.discipline}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Occupation</h4>
          <p className="py-2 w-[13vw]">{member.occupation}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Specify Occupation/Business</h4>
          <p className="py-2 w-[13vw]">{member.specifyOccupation}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Position Held/Rank</h4>
          <p className="py-2 w-[13vw]">{member.positionHeld}</p>
        </div>
        <div className="">
          <h4 className="font-bold text-md">Office/Business Address</h4>
          <p className="py-2 w-[13vw]">{member.officeAddress}</p>
        </div>
      </div>
    </div>
  );
};
export default CareerInfo;
