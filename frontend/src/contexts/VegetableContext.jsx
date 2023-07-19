import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import vegetableService from "../services/vegetableService";

const VegetableContext = createContext();

export default VegetableContext;

export function VegetableContextProvider({ children }) {
  const [vegetablesData, setVegetablesData] = useState();

  async function fetch() {
    try {
      const vege = await vegetableService.getVegetables();
      setVegetablesData(vege.data);
    } catch (error) {
      console.error(error);
    }
  }

  const successToastTemplate = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const errorToastTemplate = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const memo = useMemo(() => {
    return {
      vegetablesData,
      setVegetablesData,
      fetch,
      successToastTemplate,
      errorToastTemplate,
    };
  }, [vegetablesData]);

  return (
    <VegetableContext.Provider value={memo}>
      {children}
    </VegetableContext.Provider>
  );
}

export const useVegetableContext = () => useContext(VegetableContext);

VegetableContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
