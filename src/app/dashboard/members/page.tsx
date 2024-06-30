import MembersTable from '@/components/table/tableShow'
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Members = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-[80%] mx-auto pt-8">
        <h3 className="text-2xl font-bold mb-8 ">All Members</h3>
        <Link href="/dashboard/students/register">
          <Button>
            <CirclePlus />
            <h4 className="ml-2">Add a Member</h4>
          </Button>
        </Link>
      </div>

      <MembersTable />
    </div>
  );
}

export default Members