#Build stage
FROM gradle:latest AS BUILD
WORKDIR /usr/app/
COPY . . 
RUN gradle build

# Package stage
FROM eclipse-temurin:21-jre-jammy AS final
ARG JAR_FILE=/usr/app/*SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]

EXPOSE 8080
