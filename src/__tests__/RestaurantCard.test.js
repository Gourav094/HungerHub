import { render,screen } from "@testing-library/react"
import RestaurantCard from "../components/RestaurantCard"
import Mock_Data from "./mocks/ResCardMock.json"
import "@testing-library/jest-dom"
import {PromotedData}  from "../components/RestaurantCard"

it("should render restaurant page with props data",() =>{
    render(<RestaurantCard resData = {Mock_Data}/>)

    const name = screen.getByText("Bhena Da Dhaba")

    expect(name).toBeInTheDocument();
})

it("should render restaurant card with promoted label ",() =>{
    const WrapPromoted = PromotedData(RestaurantCard);
    render(<WrapPromoted resData = {Mock_Data}/>);

    const label = screen.getByText("Best seller")

    expect(label).toBeInTheDocument()
})