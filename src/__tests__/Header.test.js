import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { Provider } from "react-redux"
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should render header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    // If there are multiple buttons then can find using name showing on the button
    const LoginButton = screen.getByRole("button",{name:"Login"});
    // const LoginButton = screen.getByText("Login")
    expect(LoginButton).toBeInTheDocument();
})

it("should render header component with cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart(0)")
    expect(cartItems).toBeInTheDocument();
})

it("should render header component with cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //can use regEx if dont want to specify the items
    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument();
})

it("should change Login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button");
    expect(logoutButton).toBeInTheDocument();
})

it("Should check users online status",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    expect(screen.getByText("Status: online")).toBeInTheDocument()
})