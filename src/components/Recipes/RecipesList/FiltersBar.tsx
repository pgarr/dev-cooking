import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  filterName,
  filterCategories,
} from "../../../store/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { CategoryOption } from "../../../types";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const nameFilter = useAppSelector((state) => state.filters.name);
  const categoriesList = useAppSelector((state) => state.recipes.categories);
  const categoriesSelected = useAppSelector(
    (state) => state.filters.categories,
  );

  const { t } = useTranslation();

  const [categoriesOptions, setCategoriesOptions] = useState<CategoryOption[]>(
    [],
  );

  const onFilterNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    dispatch(filterName(event.target.value));
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

    dispatch(filterCategories(newSelectedCategories));
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
