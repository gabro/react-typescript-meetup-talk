import { ComponentProps } from "react";
import { DesignSystemProvider } from "./ui";

export const defaultMessages: ComponentProps<typeof DesignSystemProvider>["defaultMessages"] = {
  Chip: {
    dismissButtonLabel: "Remove",
  },
  Banner: {
    dismissButtonLabel: "Close",
  },
  DateField: {
    nextMonthLabel: "Next",
    previousMonthLabel: "Prev",
  },
  Modal: {
    closeButtonLabel: "Close",
  },
  SelectField: {
    noOptionsMessage: "No options",
    multiOptionsSelected: (n) => {
      const options = n > 1 ? "options" : "option";
      return `${n} ${options} selected`;
    },
  },
  SearchBar: {
    clearButtonLabel: "Clear",
  },
  Table: {
    noResultsTitle: "No results found",
    noResultsDescription: "Try adjusting your search filters to find what you're looking for.",
    missingValue: "-",
  },
  Loader: {
    loadingMessage: "Loading...",
  },
};
