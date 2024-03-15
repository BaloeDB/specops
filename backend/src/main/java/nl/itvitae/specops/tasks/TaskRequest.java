package nl.itvitae.specops.tasks;

import java.time.LocalDate;
import nl.itvitae.specops.departments.Department;

public record TaskRequest(String name, String dept, int timeframe, int interval, String deadline) {}
