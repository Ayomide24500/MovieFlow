import { Component, useEffect, useState } from "react";

interface iComp {
  Component?: React.ReactNode;
}

const wrapCompHOC = (Component: any) => {
  return (props: any) => (
    <div className="text-gray-500 text-[30px]">
      <Component {...props} />
    </div>
  );
};

const counterWrapper = (Component: any) => {
  return (props: any) => {
    const [state, setState] = useState(0);

    const add = () => {
      setState((el) => el + 1);
    };

    return (
      <div>
        {state}
        <Component {...props} add={add} />
      </div>
    );
  };
};

const countWrapper = (Component: any) => {
  return (props: any) => {
    const [state, setState] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setState(false);
      }, 3000);
    }, []);

    return (
      <div>
        {state ? <div>Loading</div> : <Component {...props}></Component>}
      </div>
    );
  };
};

const Counter = (props: any) => {
  return (
    <div className="">
      <h1 onClick={props.add}>Counter</h1>
    </div>
  );
};

const CounterII = () => {
  const [state, setState] = useState(0);

  const add = () => {
    setState(state + 1);
  };

  return (
    <div className="">
      <h1 onMouseEnter={add}>Counter Hover</h1>
      {state}
    </div>
  );
};

const DisplayCount = countWrapper(Counter);
const DisplayCounter = counterWrapper(Counter);
export const TestBuid = () => {
  return (
    <div>
      <div>Viewing HOC</div>
      <DisplayCount />
    </div>
  );
};
