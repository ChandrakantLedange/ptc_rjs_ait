import Button from "../Button";
import React from "react";
import ReactDOM   from "react-dom";

import {render, screen} from "@testing-library/react";

test("check button render",()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>,div);
})

it("check button label",()=>{
render(<Button  label="click me"/>);
const my_text = screen.getByText(/click me/i);
expect(my_text).toBeInTheDocument();

})

//note : it is an aliase name of test