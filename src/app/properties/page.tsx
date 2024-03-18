'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function fetchProperties () {
    try {
        const response = axios.get('/api/properties')
        if(!response){
            throw new Error('Failed to fetch data');
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}
const page = async () => {
  const properties = await fetchProperties();
  return (
    <>
    properties
    </>
  )
}

export default page