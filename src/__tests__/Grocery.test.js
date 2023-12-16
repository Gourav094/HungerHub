import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Grocery from "../components/Grocery"

describe("Grocery page test",() => {
    it("should load grocery component",() => {
        render(<Grocery/>)
    
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument();
    })

    it("should load button inside grocery component",() => {
        render(<Grocery/>)
    
        const button = screen.getByRole("button")
    
        expect(button).toBeInTheDocument();
    })

    it("should load input name inside grocery compoent",() => {
        render(<Grocery/>)
        const inputName = screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument()
    })

    it("should load mutiple input boxes",() => {
        render(<Grocery/>)
        const inputBoxes = screen.getAllByRole("textbox")
    
        // console.log(inputBoxes.length)
        expect(inputBoxes.length).toBe(2)
    })
      
})

