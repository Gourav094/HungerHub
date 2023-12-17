import { fireEvent, render, screen} from "@testing-library/react"
import Body from "../components/Body"
import { BrowserRouter } from "react-router-dom"
import MockResList from "../__tests__/mocks/MockResList.json"
import { act } from "react-dom/test-utils"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MockResList)
        }
    })
})
  
describe("",() =>{

    // beforeAll(() => {
    //     console.log("Before testcase")
    // })
    // beforeEach(() => {
    //     console.log("Before Each")
    // })
    // afterAll(() => {
    //     console.log("After testcases") 
    // })
    // afterEach(() => {
    //     console.log("After each")
    // })

    it("Should render body component with search feature",async() => {
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
    })


    it("Should search ResList for burger text input",async() => {
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))

        const TotalCards = screen.getAllByTestId("resCard")
        expect(TotalCards.length).toBe(18)

        const SearchButton = screen.getByRole("button",{name:"Search"})
        
        const searchInput  = screen.getByTestId("searchInput")

        fireEvent.change(searchInput,{target:{value:"burger"}})

        fireEvent.click(SearchButton)

        const searchCards = screen.getAllByTestId("resCard")

        expect(searchCards.length).toBe(2)
    })

    it("Should filter Top rated restaurant after clicking button",async() => {
        
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))

        const TotalCards = screen.getAllByTestId("resCard")
        expect(TotalCards.length).toBe(18)

        const Button = screen.getByRole("button",{name:"Top Rated Restaurant"})

        fireEvent.click(Button)

        const searchCards = screen.getAllByTestId("resCard")

        expect(searchCards.length).toBe(6) 
    })

    it("should render Username",async() => {
        await act(async() => 
            render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ))
        const userInput = screen.getByTestId("userInput")
        expect(userInput.value).toBe("Gourav")  
    }) 
})