import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Select, { MultiValue, StylesConfig } from "react-select";
import {
  filterName,
  filterCategories,
} from "../../../store/slices/filtersSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";

const FiltersButton = styled.button`
  background-color: #3d94f6;
  border-radius: 2px;
  border: 1px solid #337fed;
  cursor: pointer;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1570cd;
  margin: 8px;

  &:hover {
    background: linear-gradient(to bottom, #1e62d0 5%, #3d94f6 100%);
    background-color: #1e62d0;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 15px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const StyledInput = styled.input`np
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  height: 48px;
  padding: 10px;
  width: 50%;

  &:focus {
    border-color: #2684ff;
    border-width: 2px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

const selectStyles: StylesConfig = {
  container: (provided) => {
    const flexGrow = 1;
    const height = "49px";

    return { ...provided, flexGrow, height };
  },
};

const FiltersBar = () => {
  const dispatch = useAppDispatch();
  const nameFilter = useAppSelector((state) => state.filters.name);
  const categoriesList = useAppSelector((state) => state.recipes.categories);
  const categoriesSelected = useAppSelector(
    (state) => state.filters.categories,
  );

  const { t } = useTranslation();

  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const onFilterNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    dispatch(filterName(event.target.value));
  };

  const onFilterCategoriesChange = (selectedOptions: MultiValue<unknown>) => {
    dispatch(filterCategories(selectedOptions));
  };

  useEffect(() => {
    const options = categoriesList.map((category) => {
      return { value: category, label: t(`categories.${category}`) };
    });

    setCategoriesOptions(options);
  }, [categoriesList, t]);

  return (
    <>
      <FiltersButton
        onClick={() => {
          setShowFilters((prevShowFilters) => !prevShowFilters);
        }}
      >
        {t("show_filters")}
      </FiltersButton>
      {showFilters && (
        <Container>
          <StyledInput
            type="text"
            placeholder={t("name")}
            value={nameFilter}
            onChange={onFilterNameChange}
          ></StyledInput>
          <Select
            styles={selectStyles}
            placeholder={t("categories_name") + "..."}
            closeMenuOnSelect={false}
            isMulti
            options={categoriesOptions}
            onChange={onFilterCategoriesChange}
            value={categoriesSelected}
          />
        </Container>
      )}
    </>
  );
};

export default FiltersBar;
