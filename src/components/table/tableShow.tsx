"use client";

import { useGetAllMembersQuery, useLoginQuery } from "@/services/membersApi";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Loader2 } from "lucide-react";
import { TailSpin } from "react-loader-spinner";
import Link from "next/link";


const MembersTable = () => {
  const { data: members, error, isLoading } = useGetAllMembersQuery("data");


  if (!members) {
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



  return (
    <div>
      <Link href ="http://localhost:3000/auth/google">Click to login</Link>
      <div className="w-[80%] mx-auto">
        <DataTable columns={columns} data={members.results} />
      </div>
    </div>
  );
};

export default MembersTable;
