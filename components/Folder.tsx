import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Folder(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-6 hover:bg-gray-200"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200">
      <div>
        <div className="px-1">
          <div className="py-1 bg-yellow-500"></div>
          <div className="py-1 bg-yellow-500"></div>
        </div>
        <div className="px-4 py-4 bg-yellow-400"></div>
        <p>{props.children}</p>
      </div>
    </button>
  );
}
