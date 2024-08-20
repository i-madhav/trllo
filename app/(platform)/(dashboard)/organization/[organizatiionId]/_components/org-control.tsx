"use client"
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'next/navigation';
import { useOrganizationList } from '@clerk/nextjs';

const OrgControl = () => {
    const params = useParams();
    const {setActive} = useOrganizationList(); 

    useEffect(() => {
        if(!setActive) return;

        setActive({
            organization:params.organizatiionId as string,
        });

    },[setActive,params.organizationId])
  return null;
}

export default OrgControl;