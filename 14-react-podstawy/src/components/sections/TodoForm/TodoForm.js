import { useState } from 'react'
import Button from "../../atoms/Button/Button";
import ErrorSpan from "../../atoms/ErrorSpan/ErrorSpan";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";

const TodoForm = (props) => {
 
    return (
        <form onSubmit={props.handleSubmit}>
            <Label
                text='Task Name'
            >
                <Input
                    type="text"
                    value={props.inputValue}
                    onChange={props.handleTaskNameChange}
                />
                <ErrorSpan
                    showError={props.showError}
                    errorMsg={props.errorMsg}
                />
                {/* <input
                    type="text"
                    value={props.inputValue}
                    onChange={props.handleTaskNameChange}
                /> */}
            </Label>
            <Button type="submit" text="Send" />
            {/* <button type="submit">Send</button> */}
        </form>
    )
}
export default TodoForm;