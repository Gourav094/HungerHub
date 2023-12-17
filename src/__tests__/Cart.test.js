import { fireEvent, render,screen } from "@testing-library/react"
import RestaurantMenu from "../components/RestaurantMenu"
import Header from "../components/Header"
import Cart from "../components/Cart"
import { BrowserRouter } from "react-router-dom"
import { act } from "react-dom/test-utils"
import Mock_Data from "./mocks/MockRestaurantMenu.json"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => 
    Promise.resolve({
        json:() => Promise.resolve(Mock_Data)
        
    })
)

it("should Load Restaurant Menu component",async() => {
    await act(async() => {
        render(
            <Provider store ={appStore}>
                <BrowserRouter>
                    <RestaurantMenu/>
                </BrowserRouter>
            </Provider>
        )
    })
}) 

it("should click accordian and show list",async() => {
    await act(async() => {
        render(
            <Provider store ={appStore}>
                <BrowserRouter>
                    <RestaurantMenu/>
                </BrowserRouter>
            </Provider>
        )
    })
    const accordian = screen.getByText("Thali (10)")
    fireEvent.click(accordian)

    const items = screen.getAllByTestId("foodItems")
    expect(items.length).toBe(10)
}) 

it("should click add and sub button and change in header",async() => {
    await act(async() => {
        render(
            <Provider store ={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                </BrowserRouter>
            </Provider>
        )
    })
    const accordian = screen.getByText("Thali (10)")
    fireEvent.click(accordian)

    const items = screen.getAllByTestId("foodItems")
    expect(items.length).toBe(10)

    expect(screen.getByText("Cart(0)")).toBeInTheDocument()
    // getting add and sub btn and show the changes of header component
    const Addbtn = screen.getAllByTestId("addButton")
    fireEvent.click(Addbtn[0])
    expect(screen.getByText("Cart(1)")).toBeInTheDocument()
    
    fireEvent.click(Addbtn[0])
    expect(screen.getByText("Cart(2)")).toBeInTheDocument()

    const subBtn = screen.getAllByTestId("substractButton")
    fireEvent.click(subBtn[0])
    expect(screen.getByText("Cart(1)")).toBeInTheDocument()

    fireEvent.click(subBtn[0])
    expect(screen.getByText("Cart(0)")).toBeInTheDocument()
}) 

it("should change cart items when add items",async() => {
    await act(async() => {
        render(
            <Provider store ={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </BrowserRouter>
            </Provider>
        )
    })
    const accordian = screen.getByText("Thali (10)")
    fireEvent.click(accordian)

    const items = screen.getAllByTestId("foodItems")
    expect(items.length).toBe(10)

    const Addbtn = screen.getAllByTestId("addButton")
    fireEvent.click(Addbtn[0])
    expect(screen.getByText("Cart(1)")).toBeInTheDocument()
    
    fireEvent.click(Addbtn[0])
    expect(screen.getByText("Cart(2)")).toBeInTheDocument()
        
    expect(screen.getAllByTestId("foodItems").length).toBe(12)
}) 

it("should clear cart after clicking button",async() => {
    await act(async() => {
        render(
            <Provider store ={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </BrowserRouter>
            </Provider>
        )
    })
    // Here accordian id written becoz recommended will open bydefault so now thali accordian will be opened
    const accordian = screen.getByText("Thali (10)")
    fireEvent.click(accordian)

    const ClearCart = screen.getByRole("button",{name:"Clear Cart"})
    fireEvent.click(ClearCart)

    expect(screen.getAllByTestId("foodItems").length).toBe(10)

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument()
})



/*
render restaurant menu 
click accodian & check expend or not
click add button
header should change
cart should change its item list
*/