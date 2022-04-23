import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../redux/action-creators";
import classes from "./DisplayItem.module.css";

const DisplayItem = ({isEditHandler}) => {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.item}
          <div className={classes['delete-btn']} onClick={() => dispatch(deleteItem(item.id))}>
          <i className="fa fa-trash"></i>
          </div>
          <div className={classes['delete-btn']} onClick={() => { 
            isEditHandler(true, item.id)
          }
            }>
            <i className="fa fa-pencil"></i>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default DisplayItem;
