import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeNameFilter,
  selectNameFilter,
  // changeNumberFilter,
  // selectNumberFilter,
} from "../../redux/filtersSlice";

//екшен зміни фільтра при введенні в текстове поле

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  // const numberFilter = useSelector(selectNumberFilter);
  return (
    <div className={css.search}>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="name"
        onChange={(event) => dispatch(changeNameFilter(event.target.value))}
        value={nameFilter}
        className={css.inputSearch}
      ></input>
      {/* <label>Find contacts by number</label>
      <input
        type="text"
        name="number"
        onChange={(event) => dispatch(changeNumberFilter(event.target.value))}
        value={numberFilter}
        className={css.inputSearch}
      ></input> */}
    </div>
  );
}
