import { render, screen } from '@testing-library/react';
import App from '../components/App';
import { projectName } from '../projectName';

test('shows title', () => {
    render(<App />);
    const title = screen.getByRole('heading');
    expect(title.textContent).toMatch(projectName);
});
