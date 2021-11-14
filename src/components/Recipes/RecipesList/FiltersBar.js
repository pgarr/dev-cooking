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
  border-bottom: solid 1px;
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  padding-bottom: 15px;
`;

const Input = styled.input`
  max-width: 800px;
`;

const FiltersBar = ({ nameFilter, categoriesList }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [categoriesOptions, setCategoriesOptions] = useState([]);

  const onFilterNameChange = (event) => {
    dispatch(filterName(event.target.value));
  };

  const onFilterCategoriesChange = (selectedOptions) => {
    const optionsList = selectedOptions.map((option) => {
      return option.value;
    });
    dispatch(filterCategories(optionsList));
  };

  useEffect(() => {
    const options = categoriesList.map((category) => {
      return { value: category, label: t(`categories.${category}`) };
    });

    setCategoriesOptions(options);
  }, [categoriesList, t]);

  return (
    <Container>
      <Input
        type="text"
        placeholder={t("name")}
        value={nameFilter}
        onChange={onFilterNameChange}
      ></Input>
      <Select
        placeholder={t("categories_name") + "..."}
        closeMenuOnSelect={false}
        isMulti
        options={categoriesOptions}
        onChange={onFilterCategoriesChange}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    nameFilter: state.filters.name,
    categoriesList: state.recipes.categories,
  };
};

export default connect(mapStateToProps)(FiltersBar);
