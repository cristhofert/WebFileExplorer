import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type Props = {
  paths: string[];
}
export function PathsBar(props: Props) {

  return (
    <div class="flex">
      {props.paths.map((path) => (
        <div class="flex">
          <button
            class="p-1 m-1 hover:text-blue-700 p-1 mr-0 ml-1 text-blue-600">
            <p>{path}</p>
          </button>
          <p
            disabled={true}
            class="p-1 m-1"> / </p>
        </div>
      ))}
    </div>
  );
}
