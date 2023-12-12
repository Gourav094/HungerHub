import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Grocery from "../components/Grocery"
import { renderMatches } from "react-router-dom"

test("should load contact us component",() => {
    render(<Grocery/>)

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();
})
test("should load button inside contact component",() => {
    render(<Grocery/>)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument();
})
test("should load input name inside contact compoent",() => {
    render(<Grocery/>)
    const inputName = screen.getByPlaceholderText("name")

    expect(inputName).toBeInTheDocument()
})

test("should load mutiple input boxes",() => {
    render(<Grocery/>)
    const inputBoxes = screen.getAllByRole("textbox")

    // console.log(inputBoxes.length)
    expect(inputBoxes.length).toBe(2)
})

