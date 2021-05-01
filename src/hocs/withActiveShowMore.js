import React, {useEffect, useState} from "react";

const withActiveShowMore = (Component) => {

  const WithActiveShowMore = (props) => {

    const [number, setNumber] = useState(8);

    useEffect(() => {
      return () => {
        setNumber(8);
      };
    }, []);

    const handlerClickButton = () => {
      setNumber((prevState) => prevState + 8);
    };

    return <Component
      {...props}
      number={number}
      handlerClickButton={handlerClickButton}
    />;
  };

  return WithActiveShowMore;
};

export default withActiveShowMore;
