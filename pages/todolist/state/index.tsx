import { atom, selector } from "recoil";
import { Todo } from "../types";

export const todoListState = atom<Todo[]>({ key: "TodoList", default: [] });

export const filteredTodoListState = selector({
  key: "FilteredTodoList",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case "SHOW_COMPLETED":
        return list.filter((todo) => todo.isCompleted);
      case "SHOW_UNCOMPLETED":
        return list.filter((todo) => !todo.isCompleted);
      default:
        return list;
    }
  },
});
interface TodoListSummary {
  total: number;
  completed: number;
  percent: string;
}
export const todoListSummary = selector<TodoListSummary>({
  key: "TodoListStat",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const total = todoList.length;
    const completed = todoList.filter((todo) => todo.isCompleted).length;
    let percent = `${(completed / total) * 100}%`;
    console.log(percent);
    if (percent === "NaN%") {
      console.log(123123);
      percent = "0%";
    }
    return { total, completed, percent };
  },
});

export const todoListFilterState = atom<
  "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_UNCOMPLETED"
>({
  key: "TodoListFilter",
  default: "SHOW_ALL",
});
