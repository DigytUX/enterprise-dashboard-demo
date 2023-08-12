import { render, fireEvent } from '@testing-library/react';
import SideBar from './sidebar';

describe('SideBar', () => {

  it('should call the onClick function when a link is clicked', () => {
    const mockOnClick = jest.fn();
    const mockLinks = [
      {
        icon: <div data-testid="mock-icon" />,
        onClick: mockOnClick,
      },
    ];

    // Spy on window.alert and provide a mock implementation that does nothing
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByTestId } = render(<SideBar width={'70px'} links={mockLinks} />);
    const listItem = getByTestId('sidebar-link-0');

    fireEvent.click(listItem);

    expect(mockOnClick).toHaveBeenCalled();

    alertSpy.mockRestore();
  });
});
