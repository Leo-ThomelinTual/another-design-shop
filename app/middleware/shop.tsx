"use client"
import { useEffect, useState } from "react";


export function GetShops(category: string) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://192.168.1.28:3000/api/shop/${category}`).then(
      res => res.json()
    ).then(data => {
      setData(data);
    })
  }, [])

  return data;
}

export function GetShopsById(category: string, id: string | number) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://192.168.1.28:3000/api/shop/${category}/${id}`).then(
      res => res.json()
    ).then((data) => {
      setData(data);
    })
  }, [category, id])

  return data;
}
