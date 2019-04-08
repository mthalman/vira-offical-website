FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS base

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

WORKDIR /app
EXPOSE 80
EXPOSE 443
EXPOSE 32772

FROM base AS build
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
