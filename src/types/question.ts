// We can have a enum here, but it will create additional boilerplate during transpilation
export type QuestionType = "single" | "multiple" | "info";
interface Option {
  label: string;
  value: string;
}

export type Question = {
  key: string;
  label: string;
  type: QuestionType;
  options?: Option[];
};
