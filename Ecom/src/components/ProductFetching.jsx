import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../store/productSlice";
import {
  markFetchDone,
  markFetchingCompleted,
  markFetchStarting,
} from "../store/fetchStatusSlice";
import { useEffect } from "react";
import axios from "axios";

const ProductFetching = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    dispatch(markFetchStarting());

    axios
      .get("/api/products")
      .then((response) => {
        dispatch(addProducts(response.data));
        dispatch(markFetchDone());
        dispatch(markFetchingCompleted());
      })
      .catch((error) => {
        console.log(error);
        dispatch(markFetchingCompleted());
      });
  }, []);

  return <></>;
};
export default ProductFetching;
