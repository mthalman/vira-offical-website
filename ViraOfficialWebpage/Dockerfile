FROM microsoft/dotnet:2.2-aspnetcore-runtime-stretch-slim AS base
# Setup NodeJs
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y build-essential nodejs
# End setup
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk-stretch AS build
WORKDIR /src
COPY ["ViraOfficialWebpage/ViraOfficialWebpage.csproj", "ViraOfficialWebpage/"]
RUN dotnet restore "ViraOfficialWebpage/ViraOfficialWebpage.csproj"
COPY . .
WORKDIR "/src/ViraOfficialWebpage"
RUN dotnet build "ViraOfficialWebpage.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "ViraOfficialWebpage.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "ViraOfficialWebpage.dll"]