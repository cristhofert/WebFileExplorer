import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

type FileProps = {
  disabled?: boolean;
  extentions: string;
  name: string;
  onClick: () => void;
};

export function File(props: FileProps) {
  return (
    <button
      className="px-4 py-6 hover:bg-gray-200"
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200">
      <div>
        <div className="w-15 h-8 bg-indigo-50"></div>
        <div className="flex h-8">
          <div className="w-16 bg-indigo-50"></div>
          <div className="w-16 bg-indigo-50 text-blue-200">{props.extentions}</div>
        </div>
        <p>{props.name}</p>
      </div>
    </button>
  );
}
