# Sprechernotizen zur Codex-Präsentation

**Gesamtdauer:** ca. 10 Minuten  
**Aufteilung:** 2 Präsentierende mit jeweils ca. 5 Minuten  
**Hinweis:** Die Notizen sind als Sprechhilfe gedacht und müssen nicht wortwörtlich vorgelesen werden.

---

## Person 1 – Grundlagen und Praxiseinsatz (ca. 5 Minuten)

### Folie 1: Einstieg – „Code nicht nur vorschlagen. Code erledigen.“ (ca. 45 Sekunden)

- Begrüßung und kurze Einleitung: „Wir stellen heute Codex von OpenAI vor – einen agentischen Coding-Assistenten.“
- Der entscheidende Unterschied zu klassischen Coding-Assistenten: Codex schlägt nicht nur einzelne Codezeilen vor, sondern kann vollständige Aufgaben bearbeiten.
- Dazu liest es ein Projekt, plant die notwendigen Schritte, verändert Dateien, führt Befehle und Tests aus und legt das Ergebnis zur Prüfung vor.
- Leitfrage der Präsentation: Was kann Codex tatsächlich, wo liegen die Vorteile und Risiken, und wie verdient OpenAI damit Geld?

### Folie 2: Was ist Codex? (ca. 1 Minute 15 Sekunden)

- Die Entwicklung lässt sich als Wechsel „vom Copiloten zum Agenten“ beschreiben.
- Ein Copilot reagiert meistens direkt auf einzelne Eingaben. Ein Agent kann dagegen einen längeren Arbeitsauftrag selbstständig in Teilschritte zerlegen.
- Den dargestellten Ablauf kurz erklären:
  1. Codex liest das Repository und vorhandene Regeln.
  2. Es plant die Umsetzung.
  3. Es bearbeitet Code und nutzt das Terminal.
  4. Es prüft das Ergebnis mit Tests und stellt es zum Review bereit.
- Die Kennzahlen auf der Folie zeigen die Größenordnung und Verbreitung. Wichtig: Zahlen nicht alle ausführlich vorlesen, sondern einordnen – Codex ist kein kleines Experiment mehr, sondern ein breit eingesetztes Produkt.
- Trotzdem bedeutet eine hohe Erfolgsquote nicht, dass der erzeugte Code ungeprüft übernommen werden sollte.

### Folie 3: Vier Oberflächen (ca. 1 Minute 15 Sekunden)

- Codex ist über vier Zugangswege verfügbar: CLI, Desktop-App, IDE-Erweiterung und Cloud beziehungsweise ChatGPT.
- **CLI:** Besonders passend für Entwickler, die direkt im Terminal arbeiten. Die CLI ist quelloffen und kann lokale Dateien sowie Befehle verwenden.
- **Desktop-App:** Dient als Kommandozentrale, wenn mehrere Aufgaben oder Agenten parallel laufen sollen.
- **IDE-Erweiterung:** Integriert Codex direkt in die gewohnte Entwicklungsumgebung, zum Beispiel VS Code.
- **Cloud:** Aufgaben laufen in einer isolierten Umgebung und können im Hintergrund bearbeitet werden.
- Falls Zeit vorhanden ist, ein bis zwei Tabs der interaktiven Folie anklicken. Kernaussage: Die Oberfläche ändert sich, der agentische Arbeitsansatz bleibt gleich.

### Folie 4: Praxistest (ca. 1 Minute 30 Sekunden)

- Die Stärke von Codex liegt vor allem bei klar beschriebenen, überprüfbaren Aufgaben – nicht nur bei Autocomplete.
- **Feature-Entwicklung:** Codex kann aus einer Anforderung beispielsweise eine API, CRUD-Funktionen oder eine UI-Komponente entwickeln.
- **Batch-Arbeit:** Mehrere voneinander unabhängige Aufgaben können parallel erledigt werden. Das spart besonders bei Routinearbeit Zeit.
- **Security:** Codex kann Schwachstellen suchen und mögliche Korrekturen vorschlagen. Gerade hier bleibt menschliche Kontrolle besonders wichtig.
- **Wissensarbeit:** Über Skills kann Codex auch bei Recherche, Tabellen oder Präsentationen helfen – diese Präsentation ist dafür selbst ein Beispiel.
- Die Zahl von 80,6 Prozent verdeutlicht: Viele Anfragen entsprechen Aufgaben, für die ein Mensch laut Ausgangsquelle mehr als 30 Minuten benötigen würde.

### Übergabe an Person 2 (ca. 15 Sekunden)

„Wir haben jetzt gesehen, wie Codex arbeitet und welche Aufgaben es übernehmen kann. Damit stellt sich die entscheidende Frage: Welchen konkreten Nutzen bringt das – und welche Nachteile entstehen durch diese größere Autonomie? Damit übergebe ich an …“

---

## Person 2 – Bewertung und Geschäftsmodell (ca. 5 Minuten)

### Folie 5: Vorteile (ca. 1 Minute 10 Sekunden)

- Der größte Vorteil ist die Parallelisierung: Mehrere Agenten können gleichzeitig an getrennten Aufgaben arbeiten.
- Dadurch verändert sich die Rolle der Entwicklerinnen und Entwickler. Weniger Zeit fließt in wiederholende Umsetzung, mehr Zeit in Aufgabenbeschreibung, Steuerung und Review.
- Weitere Vorteile kurz bündeln:
  - effizienter Einsatz von Tokens bei Routineaufgaben,
  - Wechsel zwischen CLI, IDE, App und Cloud,
  - Kontrollmöglichkeiten wie Sandboxing, Freigaben und Rollen,
  - Transparenz durch die quelloffene CLI.
- Kernaussage: Codex kann Geschwindigkeit und Produktivität erhöhen, besonders bei vielen klar abgegrenzten Aufgaben.

### Folie 6: Nachteile und Risiken (ca. 1 Minute 20 Sekunden)

- Mehr Autonomie bedeutet auch mehr Verantwortung bei der Kontrolle.
- Die Qualität kann schwanken. Besonders komplexe Änderungen benötigen oft zusätzliche Korrekturschleifen.
- Die Kosten sind nicht immer gut planbar, weil die tokenbasierte Abrechnung vom tatsächlichen Modellaufwand abhängt.
- Kontext und Nutzungsgrenzen können längere Arbeitsabläufe unterbrechen oder eine gute Strukturierung der Projektregeln erforderlich machen.
- Außerdem entwickelt sich das Produkt schnell weiter; Preise, Limits und Funktionen können sich verändern.
- Die wichtigste Regel der Folie betonen: Zugriffe begrenzen, Ergebnisse prüfen und Tests verlangen. Der Mensch bleibt verantwortlich.

### Folie 7: Geschäftsmodell (ca. 1 Minute 25 Sekunden)

- Codex wird nicht nur als einzelnes separates Produkt verkauft, sondern ist in verschiedene ChatGPT-Pläne eingebunden.
- Der Einstieg ist über kostenlose oder günstigere Pläne möglich. Intensivere Nutzung führt zu Plus-, Pro-, Business- oder Enterprise-Angeboten.
- Den Preis-Navigator kurz demonstrieren, beispielsweise mit fünf Personen im Plus-Plan. Darauf hinweisen, dass zusätzliche nutzungsbasierte Kosten entstehen können.
- OpenAI nutzt vier Umsatzhebel:
  1. Freemium als Einstieg in kostenpflichtige Abos,
  2. nutzungsbasierte Token-Credits,
  3. API-Nutzung für automatisierte Entwicklungsprozesse,
  4. Enterprise-Verträge mit Verwaltung und Governance.
- Das Modell senkt die Einstiegshürde, lässt die Einnahmen aber mit der Nutzungsintensität skalieren.

### Folie 8: Fazit (ca. 50 Sekunden)

- Codex ist kein vollständig selbstständiger Autopilot, sondern ein Multiplikator für menschliche Arbeit.
- Besonders geeignet ist es für Teams mit vielen klaren, parallelen Routine- und Entwicklungsaufgaben.
- Der zentrale Zielkonflikt: höhere Geschwindigkeit auf der einen Seite, schwankende Qualität und schwerer planbare Kosten auf der anderen.
- Unverzichtbar bleiben begrenzte Zugriffsrechte, automatisierte Tests und menschliches Code-Review.
- Optional die Quizfrage an das Publikum stellen. Richtige Antwort: „Kontext geben und Ergebnisse prüfen.“

### Abschluss (ca. 15 Sekunden)

„Zusammengefasst kann Codex Entwicklungsarbeit deutlich beschleunigen, ersetzt aber weder technisches Verständnis noch Verantwortung. Entscheidend ist nicht nur, was der Agent erledigen kann, sondern wie gut der Mensch ihn anleitet und seine Ergebnisse kontrolliert. Vielen Dank.“

---

## Kurze Vorbereitung vor dem Vortrag

- Namen in der Übergabe ergänzen.
- Interaktionen vorher testen: Oberflächen-Tabs, Preis-Navigator und Abschlussquiz.
- Pro Person einmal mit Stoppuhr üben; bei Zeitdruck Beispiele kürzen, nicht das Fazit.
- Zahlen als Richtwerte und mit dem Stand **Juli 2026** kennzeichnen.
