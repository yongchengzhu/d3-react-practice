import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function GenderDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Please Select Gender
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onSelect={() => props.genderSelected("men")}>Men</Dropdown.Item>
        <Dropdown.Item onSelect={() => props.genderSelected("women")}>Women</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};