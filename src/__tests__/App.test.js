import React from "react";
import {render, unmountComponentAtNode} from 'react-dom'; // render function from react-dom
import DatePicker from '../components/Date-picker.component';
import SearchField from "../components/Search.component";
import DefaultAppBar from "../components/AppBar.component";
import { act } from 'react-dom/test-utils';
import { 
  createRender 
} from '@material-ui/core/test-utils'; // to test material ui component, must import material ui testing libs
import {configure} from 'enzyme'; // 
import Adapter from 'enzyme-adapter-react-16';
import { create } from "react-test-renderer";

configure({adapter: new Adapter()})

let domContainer = null;
beforeEach(() => {
  // setup a dom element, I'm following the react doc
  domContainer = document.createElement("div");
  document.body.appendChild(domContainer);
});

afterEach(() => {
  unmountComponentAtNode(domContainer);
  domContainer.remove();
  domContainer = null;
});

it("Test <DatePicker /> component:", () => {
  act(() => {
    render(<DatePicker />, domContainer);
  });
  expect(domContainer);
});


describe("Test the basic search field <SearchField />", () => {
  test("Run and render <SearchField />", () => {
    let tree = create(<SearchField />);
    expect(tree.toJSON()).toMatchSnapshot();
  })
});