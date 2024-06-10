package nl.itvitae.specops;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpecopsApplicationTests {
  private final Logger logger = LoggerFactory.getLogger(getClass());
  
  @Test
  void printEnvs() {
    logger.info("POSTGRES_DB: {}", System.getenv("POSTGRES_DB"));
    logger.info("POSTGRES_USERNAME: {}", System.getenv("POSTGRES_USERNAME"));
    logger.info("POSTGRES_PASSWORD: {}", System.getenv("POSTGRES_PASSWORD"));
    logger.info("JWT_SECRET: {}", System.getenv("JWT_SECRET"));
    logger.info("JWT_EXPIRATION: {}", System.getenv("JWT_EXPIRATION"));
  }

	@Test
	void contextLoads() {
	}

}
