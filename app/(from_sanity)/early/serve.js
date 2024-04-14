

import React from "react";
import { getEarlyChildhood } from "@/sanity/sanity.query";
import EarlyCard from "./EarlyCard";

export default async function Early() {
  const earlys = await getEarlyChildhood();


  const earlyCards = earlys.map((early) => (
    <EarlyCard key={early._id} early={early} />
  ));


  return <div className="main-container">{earlyCards}</div>;
}
