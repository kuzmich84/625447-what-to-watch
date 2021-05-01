import React, {useState} from "react";

const withActiveTab = (Component) => {
  const WithActiveTab = (props) => {

    const [isActive, setIsActive] = useState(0);

    const handlerTabOpen = (i) => {
      setIsActive(+i);
    };
    return <Component
      {...props}
      handlerTabOpen={handlerTabOpen}
      isActive={isActive}
    />;
  };

  return WithActiveTab;
};

export default withActiveTab;
