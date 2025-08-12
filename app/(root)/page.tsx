
'use client'

import React, { useEffect, useState } from 'react'

export const page = () => {
  const [birthday, setBirthday] = useState()
  useEffect(() => {
    fetch("data.json")
            .then(res => res.json())
            .then(data => setBirthday(data))
            .catch(err => console.error("Error fetching data:", err));
        }, []);
  return (
    <div>page</div>
  )
}
export default page