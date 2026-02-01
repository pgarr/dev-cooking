import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { CategoryOption } from "@/types";
import { RecipesContext } from "../context/recipesContext";
import { FiltersContext } from "../context/filtersContext";

const FiltersBar = () => {
  const { state } = useContext(RecipesContext);
  const categoriesList = state.categories;
  const {
    name: nameFilter,
    categories: categoriesSelected,
    filterCategories,
    filterName,
  } = useContext(FiltersContext);

  const { t } = useTranslation();

  const [categoriesOptions, setCategoriesOptions] = useState<CategoryOption[]>(
    [],
  );

  const onFilterNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    filterName(event.target.value);
  };

  const toggleCategory = (categoryValue: string) => {
    const isSelected = categoriesSelected.some(
      (option) => option.value === categoryValue,
    );

    let newSelectedCategories: CategoryOption[];

    if (isSelected) {
      newSelectedCategories = categoriesSelected.filter(
        (option) => option.value !== categoryValue,
      );
    } else {
      const categoryToAdd = categoriesOptions.find(
        (option) => option.value === categoryValue,
      );
      newSelectedCategories = categoryToAdd
        ? [...categoriesSelected, categoryToAdd]
        : categoriesSelected;
    }

    filterCategories(newSelectedCategories);
  };

  useEffect(() => {
    const options = categoriesList.map((category) => {
      return { value: category, label: t(`categories.${category}`) };
    });

    setCategoriesOptions(options);
  }, [categoriesList, t]);

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-7">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          placeholder={t("name")}
          onChange={onFilterNameChange}
          value={nameFilter}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">{}</InputGroupAddon>
      </InputGroup>
      <div className="flex flex-row items-start gap-1">
        {categoriesOptions.map((option) => {
          return (
            <Button
              key={option.value}
              variant={
                categoriesSelected.some(
                  (selectedOption) => selectedOption.value === option.value,
                )
                  ? "default"
                  : "ghost"
              }
              size="sm"
              className={
                categoriesSelected.some(
                  (selectedOption) => selectedOption.value === option.value,
                )
                  ? "default"
                  : "outline"
              }
              onClick={() => {
                toggleCategory(option.value);
              }}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default FiltersBar;
