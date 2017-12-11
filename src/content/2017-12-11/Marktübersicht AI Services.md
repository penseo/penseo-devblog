# Marktübersicht AI Services

## Clarissa, digitale Beraterin

Bei [Penseo](https://www.penseo.de) haben wir uns der betrieblichen Altersversorgung verschrieben. Wir wollen diese Form der Geldanlage wieder zu einem attraktiven Produkt machen, welches dem Unternehmen minimalen Verwaltungsaufwand verursacht und dem Arbeitnehmer eine lukrative Anlage für das Rentenalter bietet. Dabei digitalisieren wir alle anfallenden Geschäftsprozesse und beraten den Arbeitgeber per Chatbot fair und umfänglich zum Thema betriebliche Altersversorgung.

Durch den Einsatz eines Chatbot im Beratungsprozess können wir auf Abschlussprovisionen verzichten, die den Ertrag der bAV in den ersten Jahren erheblich schmälern können. Die Provisionen werden normalerweise an die beteiligten Makler ausgeschüttet um ihre Akquisitionskosten zu decken. Diese Kosten fallen bei Penseo nicht an, da wir den Makler weitestgehend durch einen digitalen Berater in unserem virtuellen Beratungsgespräch ersetzen. Clarissa, unser Chat-Bot zur betrieblichen Altersversorgung, benötigt hierfür fachliches know-how und die Fähigkeit sich im Live-Chat mit den Arbeitnehmern auszutauschen und sie angemessen zu beraten.

## Do you speak german?

Als Lean-Startup sind wir bei Penseo agil, sprich Schritt für Schritt vorgegangen. Zunächst hat unser Bot eine ansprechende User-Experience und ein modernes Design erhalten. Danach haben wir den Chat-Verlauf als State-Machine implementiert, also die Schritte und Übergänge definiert, die für einen rechtssicheren Beratungsprozess erforderlich sind. Anschließend haben wir eine Texterkennung auf Basis von Pattern-Matching und Wortlisten angebunden. Es wurde jedoch sehr schnell ersichtlich, dass diese Lösung zu limitiert ist und hier die erweiterten Fähigkeiten aus dem Bereich Artificial Intelligence, besonders Machine-Learning & Natural-Language-Processing benötigt werden.

Da Penseo ein Produkt ist, welches sich weitestgehend an deutschsprachige Anwender richtet und erst nachgelagert englische Sprache anbieten muss, war es für uns besonders wichtig bei der Auswahl einer Lösung darauf zu achten, dass eine Unterstützung der deutschen Sprache entsprechend gegeben ist.

## Der Markt und die Anforderungen

Viele der großen Softwarehersteller und Cloud-Provider arbeiten an Artificial-Intelligence & Machine-Learning Produkten. Bei der Auswahl eines Dienstes muss stark darauf geachtet werden, welche Use-Cases unterstützt werden und wie die Sprach-Abdeckung für die gewünschte Zielsprache ist. Oft müssen unterschiedliche Dienste eines Hersteller wie beispielsweise Voice-Recognition & Natural Language Processing kombiniert werden, um das gewünschte Ergebnis zu erreichen.

Neben Englisch unterstützen viele Dienste inzwischen auch Deutsch und andere Sprachen. Die Qualität der deutschsprachigen Varianten ist in der Regel schlechter als die englischen. Oft stellen die Anbieter neue Features nur für Englisch bereit, auf deutsche Varianten muss man teils lange warten. Als Beispiel sei hier der [AWS-Dienst Lex](https://aws.amazon.com/de/documentation/lex/) erwähnt, der nun schon über ein halbes Jahr lediglich als englischsprachige Variante bereitsteht.

In der Regel bieten die Dienste kostenfreie Varianten oder Trial-Versionen an, durch die man den technischen Fit für die eigenen Anforderungen überprüfen kann. Oft gibt es auch ein kostenfreies Kontingent an Requests, womit sich Prototypen ohne großen Kosten-Overhead herstellen lassen.

## Gemeinsamkeiten

Schaut man sich die unterschiedlichen Dienste an, dann lassen sich einige Gemeinsamkeiten entdecken. Das Natural Language Processing bietet dabei im wesentlichen Funktionalitäten zur Erkennung von *Keywords* (z.B. Synonyme), *Entities* (z.B. Automarken), *Categories* (z.B. Sport), *Emotions* (z.B. Liebe), *Sentiments* (z.B. positiv), *Relations* (Beziehung von Textteilen) und *Concepts* (Abstrakte inhaltliche Erkennung).

Vielfach ist es möglich eigene spezifische, sprachliche Konzepte durch das Anlegen eigener *Models* abzubilden.

Schnittstellen von Conversational-AI arbeiten weitestgehend mit *Intents*, die eine Benutzer-Absicht repräsentieren (z.B. "Ich möchte eine Pizza bestellen") und *Conversations* mit denen sich Gesprächsverläufe modellieren lassen.

Im Deutschen fehlen häufig ganze Funktionalitäten, oder die Trefferwahrscheinlichkeit bei der Spracherkennung ist wesentlich schlechter als im Englischen. Es ist jedoch zu beobachten, dass die Hersteller stark daran arbeiten die Sprachunterstützung zu verbessern.

Die Dokumentation der Schnittstellen und die zur verfügung gestellten Bibliotheken, Toolkits etc, und die damit verbundene Accessibility, sind überwiegend gut. Das mag daran liegen, dass diese Dienste relativ jung sind und mit modernen Frameworks und Entwicklungsmethoden entwickelt wurden. Man merkt deutlich, dass "Developer Happyness" bei der Konzeptionierung eine immer größere Rolle spielt. Zufriedene Entwickler helfen dabei die Dienste erfolgreich zu vermarkten.

## Anbieter in der Übersicht

Einen allgemeinen Qualitätsvergleich der Anbieter zu erstellen ist schwierig, da sich die Dienste und Bibliotheken stark in den zugrunde liegenden Konzepten unterscheiden. Die Problematik lässt sich gut im Paper *["Evaluating Natural Language Understanding Services for Conversational Question Answering Systems*"](https://www.researchgate.net/publication/319127909_Evaluating_Natural_Language_Understanding_Services_for_Conversational_Question_Answering_Systems) der TU-München nachlesen. Ein objektiver Vergleich in deutscher Sprache wird durch die schwankende Sprachunterstützung noch schwieriger.

Die tatsächliche Qualität der Services lässt sich auch erst mittelfristig, nach dem Training der Machine-Learning-Algorithmen, feststellen. Hier arbeiten die Anbieter mit unterschiedlichen Methoden. Oft ist es möglich interaktiv zu überprüfen wie Texte interpretiert werden.

Hier muss man sich darauf einstellen selbst viele, qualitativ hochwertige, breit gefächerte Trainingsdaten zur Verfügung zu stellen und kontinuierlich Qualitätskontrolle zu betrieben um auch langfristig gute Ergebnisse erreichen zu können.

### [IBM Bluemix - Watson](https://www.ibm.com/cloud-computing/bluemix/de/watson)

IBM bietet ein umfangreiches Portfolio an KI Diensten von Spracheingabe und Sprachausgabe, über Natural Language Processing (NLP) und Sentiment Analysis bis hin zu Conversational-AI-Schnittstellen.

Deutsche Sprachunterstützung ist in vielen Bereichen allgemein verfügbar und alle Sprachvarianten erfahren fortlaufende Verbesserungen. Neue Features werden auch hier englischsprachig entwickelt. Modelle können mit eigenen Daten trainiert werden, dadurch können limitationen der Sprachunterstützung umgangen werden.

In der umfangreichen Dokumentation von Watson finden sich auch diverse [Tutorials und Beispiel-Applikationen](https://console.bluemix.net/docs/services/conversation/sample-applications.html#sample-apps). Nicht nur die Beispiele, auch die Bibliotheken und auch große Teile der Dokumentation sind bei IBM als [Open Source auf GitHub bereitgestellt](https://github.com/watson-developer-cloud/) und können dort weiterentwickelt werden.

### [Google Cloud AI](https://cloud.google.com/products/machine-learning/)

Google bietet in der Kategorie "Google Cloud Machine Learning" ein vergleichbares Angebot an Diensten wie IBM Watson. Von Video-, Bild- und Textanalyse über Übersetzungsdienste bis hin zu NLP und allgemeinen Machine-Learning (ML) Diensten kann man aus einem reichhaltigen Angebot schöpfen.

Die ML-Dienste sind bereits die 2. Generation von Angeboten. Dienste wie der ["Google Prediction Service"](https://cloud.google.com/prediction/docs/) werden [nach und nach eingestellt](https://cloud.google.com/prediction/docs/end-of-life-faq ).

Dass Google ein großes Interesse an der Weiterentwicklung dieser Dienste hat kann man auch [an der Übernahme](https://techcrunch.com/2016/09/19/google-acquires-api-ai-a-company-helping-developers-build-bots-that-arent-awful-to-talk-to/) von [API.ai](https://api.ai/) sehen ([mehr Infos zu API.ai weiter unten](#heading=h.jqu0u6hsbtvl)).

### [Microsoft Cognitive Services](https://docs.microsoft.com/de-de/azure/cognitive-services/)

Microsoft bietet mit "Cognitive Services & Language Understanding" ein ähnliches Portfolio. Auch hier sind Qualität und Umfang vergleichbar mit Google und IBM, wobei die Microsoft Interfaces oft ein wenig umständlich wirken, da bleibt Microsoft seiner Linie treu :)

Mit ["Language Understanding Intelligence Service" (LUIS)](https://www.luis.ai/) bietet Microsoft einen Dienst für Conversational AI an, der den Ansätzen von Watson-Conversation, api.ai ([siehe unten](#heading=h.joc7pakqp1xt)) und Amazon Lex ([siehe unten](#heading=h.lp7of1hqy9mm)) ähnelt. Mit diesem Service können in einem grafischen User-Interface (GUI) Konversationen für die Interaktion mit Usern über Chatbots oder Sprachsteuerung erstellt werden.

Für die Erstellung von Chatbots wird das ["Microsoft Bot Framework"](https://docs.microsoft.com/en-us/bot-framework/) bereitgestellt. Das Framework stellt ähnlich wie bei api.ai und Watson Schnittstellen und Bibliotheken bereit um Bots auf unterschiedlichen Kanälen wie Slack oder Facebook-Messenger zu integrieren.

### [Amazon AWS AI](https://aws.amazon.com/de/amazon-ai/)

AWS bietet mit [Lex](https://aws.amazon.com/de/lex/ ) und [Polly](https://aws.amazon.com/de/polly/) Dienste an, mit denen sich Werkzeuge ähnlich wie [Amazon-Alexa-Skills](https://developer.amazon.com/de/alexa-skills-kit) erstellen lassen. Zusätzlich bietet [Rekognition](https://aws.amazon.com/de/rekognition/) Schnittstellen zur Bilderkennung an.

Neben der eher dürftigen Produktauswahl und Sprach-Abdeckung der AWS-Dienste, hat AWS noch eine vielzahl von [Machine-Learning Amazon-Machine-Images](https://aws.amazon.com/de/machine-learning/) im Angebot, mit deren Hilfe sich beliebte Machine-Learning-Bibliotheken sehr einfach in der Cloud installieren lassen. Dabei profitieren diese Maschinen dann von der weitreichenden AWS Infrastruktur, können individuell konfiguriert, skaliert und erweitert werden. Der Nachteil ist hier die geringe Consumer-Freundlich gegenüber einer SAAS-Lösung.

### [DialogFlow aka api.ai](https://api.ai/)

Mit api.ai (gerade zu DialogFlow umbenannt) hat sich Google ähnlich wie bei [firebase](https://techcrunch.com/2014/10/21/google-acquires-firebase-to-help-developers-build-better-realtime-apps/) eine Entwickler-Orientierte Plattform eingekauft. Mit api.ai lässt sich sehr einfach eine Conversational-AI über so genannte Agents erstellen, die über eine vielzahl von SDKs und Integrationen beispielsweise in Slack und Facebook-Messenger genutzt werden können. Der Dienst ist auch in deutscher Sprache erhältlich, es sind jedoch wie so oft nicht alle Funktionen verfügbar, zum derzeitigen Stand werden zum Beispiel keine Fallbacks unterstützt.

Das Training des Machine-Learning-Algorithmus kann sehr einfach über eine Webseite gesteuert werden.

Durch die Vernetzung der Agents über Webhooks können Prozessketten erstellt werden, die es Entwicklern ermöglichen eine Integration zu bestehenden Systemen herzustellen.

### [rasa.ai](http://rasa.ai/)

Ähnlich wie wit.ai wird auch bei dem Startup RASA mit Sitz in Berlin auf Conversational AI gesetzt und FOSS großgeschrieben. Große Teile der Softwarekomponenten sind [auf GitHub verfügbar](https://github.com/RasaHQ/) und können auf eigener Infrastruktur betrieben werden. Für große Unternehmen werden auch Enterprise-Pläne angeboten, die auch beispielsweise das Hosting beinhalten können.

Die Dienste von RASA basieren weitestgehend auf der Kombination von bestehenden Python-Frameworks und nutzt für das Natural-Language-Processing unter anderem die Bibliothek spaCy von dem ebenfalls in Berlin sitzenden Startup explosion.ai. Für die gute unterstützung in deutscher Sprache ist in RASA Natural-Language-Understanding (NLU) ein [weitreichendes, deutsches Sprach-Modell](https://explosion.ai/blog/german-model) eingebunden.

Neben NLU [bietet RASA-Core nun die Möglichkeit](https://medium.com/rasa-blog/a-new-approach-to-conversational-software-2e64a5d05f2a  https://explosion.ai/blog/german-model), Konversationen durch den Einsatz von ML-Algorithmen dynamisch zu steuern, an Nutzer anzupassen und stetig zu lernen.

### [wit.ai](https://wit.ai/)

Bei wit.ai wird nach dem Free-Open-Source-Software (FOSS) Ansatz gearbeitet. Alle Komponenten sind kostenlos nutzbar und große Teile des Codes sind [auf GitHub verfügbar](https://github.com/wit-ai). Das Angebot von wit.ai ähnelt dem von api.ai, es gibt jedoch neben NLP nur sehr wenig Funktionalität. Dies erklärt wahrscheinlich auch den recht niedrigen Aktivitätsgrad der Github-Projekte. api.ai bietet hier das deutlich attraktivere Produkt.

### [recast.ai](https://recast.ai/)

Das Angebot von recast.ai ähnelt dem von wit.ai und richtet sich an Entwickler von Conversational-Bots. Deutsch wird neben anderen Sprachen zwar unterstützt, der Fokus liegt aber auch hier auf der Entwicklung von englischsprachigen Bots.

### [reply.ai](https://www.reply.ai/)

Bei dem grafisch sehr ansprechenden Startup reply.ai gibt es diverse Bots für den Use-Case Customer-Support. Es soll hier Conversational AI, Bot Frameworks und Analytics aus einer Hand geben. Integrationen in Dienste wie Facebook-Messenger, Slack und weiteren Chat-Diensten stehen zur Verfügung. reply.ai ermöglicht es einem sofort über die Website einen Beispiel-Bot mit [ZenDesk-Integration](https://www.zendesk.com/) per Chat im Facebook-Messenger zu erstellen. Leider sind mehr Details nicht zu erfahren, da es hier keine offenen Trial-Zugänge gibt.

Reply.ai ist Autor des [Chatbot Weekly](http://www.chatbotsweekly.com/)[ Newsletters](http://www.chatbotsweekly.com/), der stetig Informationen rund um das Thema Chatbots sammelt.

### [meya.ai](https://meya.ai/)

meya.ai ist ein weiteres Startup mit klarem Entwickler-Fokus. Es bietet eine Plattform, die den kompletten Entwicklungszyklus eines Bots im Browser darstellen soll. Dabei kann ein Bot in node.js oder Python entwickelt werden. Da derzeit in der Dokumentation [keine Informationen über die Unterstützung](https://docs.meya.ai/docs/bot-cms-languages) der deutschen Sprache zur Verfügung stehen, wurde der Dienst nicht weiter unter die Lupe genommen.

## Favoritenliste

Das Angebot von Artificial-Intelligence, Machine-Learning und Natural-Language-Processing ist bereits sehr vielfältig. Es entstehen laufend neue Startups, die sich diesem Hype-Thema anschließen und die Benutzerfreundlichkeit steigern, Einstiegshürden reduzieren und AI zu einem Consumer-freundlichen, nutzbaren Werkzeug werden lassen.

Es ist zu erwarten, dass sich weitere Player, wie möglicherweise die Telekom, die derzeit nur in ihrem Blog [welove.ai](https://www.welove.ai) berichtet, in diesem Markt betätigen und hier auch zu einer besseren Unterstützung von deutschsprachigen Lösungen beitragen.

Aus Sicht von Penseo bietet IBM mit Watson derzeit eines der leistungsstärksten Angebote im Bereich AI. Die weitreichende Dokumentation der Schnittstellen, die zahlreichen Beispiel-Applikationen und die starke Unterstützung im deutschsprachigen Bereich machen sie zu einem der Favoriten.

Da wir bei Penseo mit vielen sensiblen Kundeninformationen umgehen müssen, bevorzugen wir jedoch eine Lösung, bei der wir die Hoheit über die Daten behalten. Die Komponenten von RASA können uns hier eine gute Sprachunterstützung und vielversprechende Machine-Learning Ansätze bieten, die unsere digitalen Berater fast wie menschliche Gesprächspartner erscheinen lassen. Darüber hinaus sind wir selber große Befürworter von Open-Source-Software und versuchen möglichst viele unserer Komponenten als FOSS auf [GitHub zur Verfügung zu stellen](https://github.com/penseo/).
