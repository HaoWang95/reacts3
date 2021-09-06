import { render, screen, cleanup } from "@testing-library/react";
import renderer from 'react-test-renderer';
import DatePicker from "../components/Date-picker.component";

afterEach(() => {
    cleanup();
});

describe('Unit testing for DatePicker <DatePicker /> component', () => {
    test('should render <DatePicker />', () => {
        render(<DatePicker />);
        const datePickerElement = screen.getByTestId('datepicker');
        expect(datePickerElement).toBeInTheDocument();
        //expect(datePickerElement).toContainHTML("<input>")
    });

    test("matches snapshot", () => {
        const tree = renderer.create(<DatePicker />);
        console.log(tree.toJSON());
        expect(tree.toJSON()).toMatchSnapshot();
    })
});