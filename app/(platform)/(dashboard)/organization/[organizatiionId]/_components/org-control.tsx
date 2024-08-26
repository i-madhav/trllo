"use client";
import React from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

// each organisation have a particular id now what if i change the id manually in the url , earlier it was not changing but now due to orgcontrol it changes as per it's org id !!
const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizatiionId as string,
    });
  }, [setActive, params.organizationId]);
  return null;
};

export default OrgControl;
