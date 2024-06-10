#Build stage

FROM gradle:latest AS BUILD
WORKDIR /usr/app/
COPY *-SNAPSHOT.jar app.jar
RUN gradle build

# Package stage

FROM eclipse-temurin:21-jre-jammy AS final
ENV JAR_NAME=app.jar
ENV APP_HOME=/usr/app
WORKDIR $APP_HOME
COPY --from=BUILD $APP_HOME .
EXPOSE 8080
ENTRYPOINT exec java -jar $APP_HOME/build/libs/$JAR_NAME  