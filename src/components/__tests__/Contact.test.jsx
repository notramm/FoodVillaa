import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

test("Should load contact component", ()=>{
    render(<Contact/>);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
})

test("Should load Button in contact component", ()=>{
    render(<Contact/>);
    const button = screen.getByText('Send Message');
    expect(button).toBeInTheDocument();
})

test("Should load input name in contact component", ()=>{
    render(<Contact/>);
    const input = screen.getByPlaceholderText('Enter your name');
    expect(input).toBeInTheDocument();
})

test("Should load 2 input box in contact component", ()=>{
    render(<Contact/>);
    const inputBox = screen.getAllByRole('textbox');
    expect(inputBox.length).toBe(2);
})

