import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Select from "react-select";
import {
  filterName,
  filterCategories,
} from "../../../store/slices/filtersSlice";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 15px;
`;

const StyledInput = styled.input`
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  width: 50%;

  &:focus {
    border-color: #2684ff;
    border-width: 2px;
    outline: none;
  }
`;

const selectStyles = {
  container: (provided, state) => {
    const width = "50%";

    return { ...provided, width };
  },
};

const FiltersBar = ({ nameFilter, categoriesList, categoriesSelected }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const onFilterNameChange = (event) => {
    dispatch(filterName(event.target.value));
  };

  const onFilterCategoriesChange = (selectedOptions) => {
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
      <button
        onClick={() => setShowFilters((prevShowFilters) => !prevShowFilters)}
      >
        {t("show_filters")}
      </button>
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

const mapStateToProps = (state) => {
  return {
    nameFilter: state.filters.name,
    categoriesList: state.recipes.categories,
    categoriesSelected: state.filters.categories,
  };
};

export default connect(mapStateToProps)(FiltersBar);
