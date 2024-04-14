import React from "react";
import { getStaff } from "@/sanity/sanity.query";
import StaffCard from "./StaffCard";

export default async function Staff() {
  const staffs = await getStaff();

// map
  const staffCards = staffs.map((staff) => (
    <StaffCard key={staff._id} staff={staff} />
  ));

  // To staffcard.js
  return <div className="main-container">{staffCards}</div>;
}