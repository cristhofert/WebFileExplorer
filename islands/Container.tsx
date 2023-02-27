import { useState } from "preact/hooks";
import { File } from "../components/File.tsx";
import { Folder } from "../components/Folder.tsx";

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
        <Folder onClick={() => setCount(count - 1)}>{ item.name }/</Folder>
        : 
        <File onClick={() => setCount(count - 1)} extentions={item.extentions} name={item.name}></File>
      ))
        }
    </div>
  );
}
