/** @jsx preserve */
/** @jsxImportSource solid-js */
import { For, Index } from "solid-js";

interface Skill {
  name: string;
  children?: Skill[];
}
interface Props {
  skill: Skill;
}

export const FlowChartSegment = (props: Props) => {
  return (
    <div class="main-grid mb-2">
      <h4 class="p-1 border-2 border-gray-500 bg-gray-800 col-start-3 relative w-full">
        {props.skill.name}
      </h4>
      {props.skill?.children && (
        <For each={props.skill.children}>
          {(item, index) => {
            const isLeft = index() % 2 === 0;
            const colnr = isLeft ? 1 : 5;
            const rownr = Math.ceil((index() + 1) / 2);

            if (!Array.isArray(item.children)) {
              return (
                <div
                  class={`p-1 w-full border-2 bg-gray-700 border-gray-500 place- col-start-${colnr} row-start-${rownr}`}
                >
                  {item.name}
                </div>
              );
            }

            return (
              <div
                class={`w-full p-1 border-2 bg-slate-800 border-gray-500 text-center group grid cursor-pointer relative col-start-${colnr} row-start-${rownr}`}
              >
                <h5 class={`p-1 group-hover text-gray-100 row-start-${rownr}`}>
                  {item.name}
                </h5>
                <div
                  class={`child-list bg-gray-900  -m-1 transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100 absolute bg-grey-200  ${
                    isLeft ? "before:left-full" : "before:right-full"
                  } ${
                    isLeft ? "-left-32" : "-right-32"
                  } top-1 border-2 border-grey-500 w-28`}
                >
                  <For each={item.children}>
                    {(c) => <div class=" p-1">{c.name}</div>}
                  </For>
                </div>
              </div>
            );
          }}
        </For>
      )}
    </div>
  );
};
