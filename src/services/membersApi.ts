import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Backend_URL } from "../lib/constants";

export const membersApi = createApi({
  reducerPath: "membersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${Backend_URL}` }),
  tagTypes: ["Members"],

  endpoints: (builder) => ({
    getAllMembers: builder.query({
      query: (token?: string) => ({
        url: "/?results=50",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Members"],
    }),

    addMember: builder.mutation({
      query: ({ newMember }) => ({
        url: "/members",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newMember,
      }),
      invalidatesTags: ["Members"],
    }),
    // PATCH endpoint to update an existing contact
    updateMember: builder.mutation({
      query: ({ memberId, updatedMember }) => ({
        url: `/contacts/${memberId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: updatedMember,
      }),
      invalidatesTags: ["Members"],
    }),
    // DELETE endpoint to remove a contact
    deleteMember: builder.mutation({
      query: ({ memberId }) => ({
        url: `/contacts/${memberId}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Members"],
    }),

    getMemberById: builder.query({
      query: (memberId) => ({
        url: `/members/${memberId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),

    //login
    login: builder.query({
      query: () => ({
        url: "http://localhost:3000/auth/google",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetAllMembersQuery,
  useAddMemberMutation,
  useUpdateMemberMutation,
  useDeleteMemberMutation,
  useGetMemberByIdQuery,
  useLoginQuery,
} = membersApi;
