"use client"

import VerticalTabs from "@/components/tab/verticalTab";
import { useGetMemberByIdQuery } from "@/services/membersApi";
import Image from "next/image";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

type Props = {
  params: {
    id: string;
  };
};

const MemberDetails = (props: Props) => {
  const id = props.params.id;
  const [editMode, setEditMode] = useState(false)

   const {
     data: member,
     error,
     isLoading,
   } = useGetMemberByIdQuery(
     id
   );

   console.log(member)
   

    if (isLoading) {
      return (
        <div className="w-[80%] flex justify-center items-center h-[80vh]">
          <TailSpin
            visible={true}
            height="50"
            width="50"
            color="#051632"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      );
    }

    if (error) {
      return (
        <h1 className="text-red">An error occurred while fetching contacts.</h1>
      );
    }


  return (
    <div>
      <div className="w-full h-[30vh] bg-member-details-header bg-no-repeat bg-cover bg-center"></div>
      <div>
        <div className="w-[94%] mx-auto -mt-[4rem] md:flex justify-between items-end">
          <div className="md:flex items-end">
            <Image
              // external url
              src="https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              width={300}
              height={200}
              className="h-[14rem] w-[14rem] rounded-full object-cover object-top"
            />
            <div className="ml-6 mb-6">
              <h2 className="text-[1.6rem] mt-4 md:mt-0 md:text-[2rem] font-bold">
                {member.surname} {member.othernames}
              </h2>
              <p className="md:text-[1.3rem]">Executive Member</p>
            </div>
          </div>
          <div className="edit-button ml-6 md:ml-0 mt-8 md:mt-0">
            <button
              onClick={() => setEditMode(!editMode)}
              className="border-2 text-[#0C63F4] font-bold px-12 py-4 rounded-xl border-[#0C63F4] mb-8"
            >
              {editMode ? "Edit Mode" : "Edit Profile"}
            </button>
          </div>
        </div>

        <div className="w-[94%] mx-auto mt-14 bg-yellow-500">
          <div className="bg-red-800">
            <VerticalTabs setEditMode={setEditMode} member={member} editMode={editMode} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
