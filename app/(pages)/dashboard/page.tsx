"use client"
import { SubmitEvent } from "react";
import styles from "../dashboard.module.css";

export default function Page() {
  async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget)
    const response = await fetch('http://192.168.1.28:3001/api/shops/homme/', {
      method: 'POST',
      body: formData,
    })

    // const data = await response.json();
  }

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="image" />
          <input type="text" placeholder="image alt" />
          <input type="text" placeholder="title" />
          <input type="textarea" placeholder="description" />
          <input type="number" placeholder="price" />

          <button type="submit">accept</button>
        </form>
      </section>
    </>
  );
}
