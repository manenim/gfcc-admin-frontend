"use client"

import VerticalTabs from "@/components/tab/verticalTab";
import Image from "next/image";
import { useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const MemberDetails = (props: Props) => {
  const id = props.params.id;
  const [editMode, setEditMode] = useState(false)

  return (
    <div>
      <div className="w-full h-[30vh] bg-member-details-header bg-no-repeat bg-cover bg-center"></div>
      <div>
        <div className="w-[88%] mx-auto -mt-[4rem] flex justify-between items-end">
          <div className="flex items-end">
            <Image
              // external url
              src="https://plus.unsplash.com/premium_photo-1670884442192-7b58d513cd55?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              width={300}
              height={200}
              className="h-[14rem] w-[14rem] rounded-full object-cover object-top"
            />
            <div className="ml-6 mb-6">
              <h2 className="text-[2rem] font-bold">Henrietta Okonkwo</h2>
              <p className="text-[1.3rem]">Executive Member</p>
            </div>
          </div>
          <div className="edit-button">
            <button onClick={() => setEditMode(!editMode)} className="border-2 text-[#0C63F4] font-bold px-12 py-4 rounded-xl border-[#0C63F4] mb-8">
              {editMode ? "Edit Mode" : "Edit Profile"}
            </button>
          </div>
        </div>

        <div className="w-[88%] mx-auto mt-14">
          
          <div>
            <VerticalTabs editMode={ editMode } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
