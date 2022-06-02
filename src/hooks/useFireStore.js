import { useReducer, useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
  email: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, email: null, success: false, error: null };
    case "ADDED_EMAIL":
      return {
        isPending: false,
        email: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const ref = projectFirestore.collection(collection);

  // only dispatch if not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addEmail = async (email) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const addedEmail = await ref.add({ ...email });
      dispatchIfNotCancelled({
        type: "ADDED_EMAIL",
        payload: addedEmail,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
      return () => setIsCancelled(true)
  }, [])

  return
};
