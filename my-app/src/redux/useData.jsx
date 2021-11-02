import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../redux/reducers/productsReducer";
import { bindActionCreators } from "redux";

function useData() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const productFuntions = bindActionCreators(productActions, dispatch);

  return { productFuntions, state };
}

export default useData;
