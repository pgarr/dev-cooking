import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { filterName } from "../../../store/slices/filtersSlice";

const Container = styled.div`
  margin-bottom: 40px;
`;

const FiltersBar = ({ nameFilter }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onFilterNameChange = (event) => {
    dispatch(filterName(event.target.value));
  };

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder={t("name")}
        value={nameFilter}
        onChange={onFilterNameChange}
      ></Form.Control>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    nameFilter: state.filters.name,
  };
};

export default connect(mapStateToProps)(FiltersBar);
