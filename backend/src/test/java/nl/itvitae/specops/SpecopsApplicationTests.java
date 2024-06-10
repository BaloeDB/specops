package nl.itvitae.specops;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpecopsApplicationTests {
  @Test
  void printEnvs() {
    System.out.println(System.getenv("POSTGRES_DB"));
    System.out.println(System.getenv("POSTGRES_USERNAME"));
    System.out.println(System.getenv("POSTGRES_PASSWORD"));
    System.out.println(System.getenv("JWT_SECRET"));
    System.out.println(System.getenv("JWT_EXPIRATION"));
  }

	@Test
	void contextLoads() {
	}

}
