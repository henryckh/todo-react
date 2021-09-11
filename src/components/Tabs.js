import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as filters from "../constants/FilterTypes";

const TabWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Tab = styled.div`
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
  background: ${(props) => (props.focused ? "#707070" : "#aeaeae")};
  color: white;
  padding: 8px;
  border: 1px solid white;
`;

const Tabs = ({ todoFilter, setTodoFilter }) => {
  let tabs = [
    {
      text: "All",
      filter: filters.FILTER_TODO_ALL,
    },
    {
      text: "Active",
      filter: filters.FILTER_TODO_ACTIVE,
    },
    {
      text: "Completed",
      filter: filters.FILTER_TODO_COMPLETED,
    },
  ];
  return (
    <TabWrapper>
      {tabs.map((tab) => (
        <Tab
          key={tab.text}
          focused={todoFilter === tab.filter ? true : false}
          onClick={() => setTodoFilter(tab.filter)}
        >
          {tab.text}
        </Tab>
      ))}
    </TabWrapper>
  );
};

Tabs.prototype = {
  todoFilter: PropTypes.string.isRequired,
  setTodoFilter: PropTypes.func.isRequired,
};

export default Tabs;
