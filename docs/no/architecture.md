# Arkitektur

[<- Tilbake](/)

Planen for arkitekturen omfatter både frontend og backend. Nedenfor beskrives de viktigste delene for å sikre en robust og effektiv applikasjon.

Arkitekturen bygger på [Techstack](/docs/no/techstack.md).

# 1. Frontend

### Framework

- **Next.js** med **Typescript**

## #UI Library

- **Tailwind CSS**

### Data Fetching

- **Axios** og **@tanstack/react-query**

### State Management

- **React Context**

### Ikoner

- **React-icons**


## Oppsett

**App Router**

Vi kommer til å bruke app router til oppsettet av routing. Relativt nytt i Next.js, men ikke for nytt så det er mye bugs. Veldig bra og enkelt å bruke for ISR og SSR av sider.

**Common Folder**

- Components
- Hooks
- Providers
- ..etc

# 2. Backend

Backend-arkitekturen består av to hovedkomponenter: Sanity og Next.js. I dette oppsettet fungerer Next.js både som frontend og backend for API-håndtering.

### Innholdsadministrasjon: Sanity CMS
Sanity brukes som CMS, som tilbyr fleksibel struktur for innhold og data. Sanity lar deg håndtere, organisere og hente data for frontenden, noe som gir kontroll og enkel tilgang til oppdateringer i innholdet.

- **Sanity Studio** – For oppsett og administrasjon av innhold.
- **Sanity API** – Dataene hentes fra Sanity API, ofte med GROQ-spørringer for optimal ytelse.

## APIer og Server-funksjoner: Next.js API Routes

Backend-funksjonaliteten håndteres hovedsakelig gjennom Next.js API Routes. Disse lar oss bygge API-er direkte i Next.js-prosjektet og integrere dem med Sanity og andre nødvendige tjenester. Ved å bruke Next.js kan vi også utnytte serverless-funksjoner for dynamiske server-side operasjoner.