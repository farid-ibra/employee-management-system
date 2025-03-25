package az.ferid.backend.service.impl;

import az.ferid.backend.dto.EmployeeDto;
import az.ferid.backend.entity.Employee;
import az.ferid.backend.exception.ResourceNotFoundException;
import az.ferid.backend.mapper.EmployeeMapper;
import az.ferid.backend.repository.EmployeeRepository;
import az.ferid.backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee doesn't exist with the given ID: "+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
