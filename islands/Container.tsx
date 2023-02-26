import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Container(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const items = [
    { name: "foo", extentions: "txt" },
    { name: "bar", extentions: "txt" },
    { name: "baz", extentions: "txt" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qusx", extentions: "/" },
    { name: "qus", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
    { name: "qux", extentions: "/" },
  ];

  return (
    <div class="grid grid-cols-10 gap-2 w-full">
      {items.map((item) => (
        item.extentions === "/" ?
        <Button onClick={() => setCount(count - 1)}>{ item.name }/</Button>
        : 
        <Button onClick={() => setCount(count - 1)}>{ item.name }</Button>
      ))
        }
    </div>
  );
}
