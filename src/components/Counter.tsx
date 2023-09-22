import { createResource, createSignal } from "solid-js";
import "./Counter.css";

const fetcher = async () => {
  const response = await fetch("http://localhost:8080/api");

  const data = await response.json();
  console.log(data);
  return data;
};

export default function Counter() {
  const [data] = createResource(fetcher);
  return <div>Data: {JSON.stringify(data())}</div>;
}
