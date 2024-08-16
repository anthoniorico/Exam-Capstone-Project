import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HospitalList from '../src/components/HospitalList';

// Sample hospital data
const hospitals = [
  { id: 1, name: 'Hospital A', address: '123 Street A', phone: '111-111-1111', email: 'a@hospital.com', services: 'General' },
  { id: 2, name: 'Hospital B', address: '456 Street B', phone: '222-222-2222', email: 'b@hospital.com', services: 'Specialized' }
];

describe('HospitalList Component', () => {
  // Mock function for handling hospital clicks
  const mockOnHospitalClick = jest.fn();

  test('renders without crashing', () => {
    render(<HospitalList hospitals={hospitals} onHospitalClick={mockOnHospitalClick} />);
    
    // Assert that hospitals are rendered
    expect(screen.getByText('Hospital A')).toBeInTheDocument();
    expect(screen.getByText('Hospital B')).toBeInTheDocument();
  });

  test('displays correct hospital information', () => {
    render(<HospitalList hospitals={hospitals} onHospitalClick={mockOnHospitalClick} />);
    
    // Assert that hospital details are rendered
    expect(screen.getByText('123 Street A')).toBeInTheDocument();
    expect(screen.getByText('111-111-1111')).toBeInTheDocument();
    expect(screen.getByText('a@hospital.com')).toBeInTheDocument();
  });

  test('handles empty hospital list', () => {
    render(<HospitalList hospitals={[]} onHospitalClick={mockOnHospitalClick} />);
    
    // Assert that no hospital items are rendered
    expect(screen.queryByText('Hospital A')).not.toBeInTheDocument();
    expect(screen.queryByText('Hospital B')).not.toBeInTheDocument();
  });

  test('calls onHospitalClick when a hospital is clicked', () => {
    render(<HospitalList hospitals={hospitals} onHospitalClick={mockOnHospitalClick} />);
    
    // Find and click on a hospital item
    const hospitalA = screen.getByText('Hospital A');
    hospitalA.click();
    
    // Assert that the mock function was called with the correct id
    expect(mockOnHospitalClick).toHaveBeenCalledWith(1);
  });
});