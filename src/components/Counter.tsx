import { createResource, createSignal, onMount } from "solid-js";
import "./Counter.css";

const fetcher = async () => {
  const response = await fetch("http://localhost:8080/api");

  const data = await response.json();
  console.log(data);
  return data;
};

export default function Counter() {
  const [data, setData] = createSignal({});

  onMount(async () => {
    const response = await fetcher();
    setData(response);
  });
  return <div>Data: {JSON.stringify(data())}</div>;
}
