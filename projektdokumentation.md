Foreningen for Dyrevelfærd

Peter Højlund Lauridsen
Hold: 1146522c308

_Applikation Teknologi Stack_
Frontend: React
Styling: CSS
Routing: react-router-dom
Data Fetching: Fetch API
Form: HTML Form

_Beskrivelse_
Dette dokument beskriver implementeringen af en React-hjemmeside med smooth scroll-funktionalitet.
Hjemmesiden består af forskellige sektioner, der kan navigeres glidende ved hjælp af navigationsmenuen.

_Komponenter_
Home Component Footer Component Header Component
Home-komponenten (Home.jsx) udgør hjemmesiden og styrer forskellige sektioner med smooth scroll.
Den bruger følgende komponenter og teknologier:
_useEffect og useState fra React til datahåndtering._
_react-router-dom til route håndtering og navigation._
_fetch API til at hente data fra forskellige API-endpoints._
_CSS-styling til at tilpasse udseendet af sektionerne._

_Implementeringsdetaljer_
Installation af nødvendige pakker:
Du skal installere de nødvendige pakker ved at køre følgende kommando:
npm install react react-dom react-router-dom

_Datahentning og State Management:_
Brug useEffect til at hente data fra API-endepunkterne og useState til at opbevare data og styring af fejl og indlæsningsstatus.

_Sektioner med Smooth Scroll:_
Opret forskellige sektioner i Home.jsx med unikke id-attributter, som kan bruges til glidende navigation.
Forbind hver sektion med navigationen.

_Navigationsmenu:_
Brug react-router-dom's Link-komponent til at oprette navigationslinks, der fører til de forskellige sektioner.

_Styling:_
Style sektionerne med CSS ved at anvende de angivne klasser og komponenter.
Brug CSS til at tilpasse udseendet, så det matcher det ønskede design.

_Kør Projekter_
For at starte projektet på din lokale maskine skal du køre følgende kommando:

npm start på API
Dette vil starte udviklingsserveren og gøre dit websted tilgængeligt på din lokaladresse.

npm run dev på webapp
Dette vil starte sitet og gøre dit websted tilgængeligt på lokalhost.

_Konklusion_
Dette projekt demonstrerer implementeringen af en React-hjemmeside med smooth scroll-funktionalitet.
Ved at følge dokumentationen kan du oprette en brugervenlig hjemmeside med glidende navigation og attraktive sektioner.
