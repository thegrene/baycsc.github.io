const eventData = [
    {
      "imageURL": "./images/DayOfAICover.png",
      "title": "Day of AI Hackathon - Spring 2022",
      "description": "We taught people how to use artificial intelligence (AI) with image recognition at this Day Of AI inspired hackathon! We hosted an AI workshop and saw dozens of people develop amazing projects.",
      "learnMoreURL": "https://www.eventbrite.com/e/hack-ai-thon-tickets-296443298887"
    },
    {
      "imageURL": "./images/CSTA_event.png",
      "title": "CSTA GLA Talk - Spring 2022",
      "description": "We shared our successful strategies for creating inclusive online CS events. Our strategies included: engaging the audiences, using culturally relevant communication tools, furthering team-building skills, and helping every student feel proud of their work.",
      "learnMoreURL": "https://greaterlosangeles.csteachers.org/events/cstagla-marchmeeting/"
    },
    {
      "imageURL": "./images/unknown.png",
      "title": "CSTA Silicon Valley Talk - Winter 2021",
      "description": "BAYCSC gave a talk at the Silicon Valley chapter of CSTA on January 19, 2022. Members presented tips and tricks on how to create an inclusive hackathon: choosing an engaging theme, using Discord for communication, building diverse and amicable teams, giving students the skills for success, and giving every student their moment on the stage.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/A%20World%20of%20Possibilities%20Speaker%20Series%20Instagram%20Graphics%20edited.png",
      "title": "Speaker Series CS+ - Winter 2021",
      "description": "Our third speaker series featured Ian Her Many Horses, an Assistant Teaching Professor at University of Colorado Boulder, Samantha John, the CEO of Hopscotch, and Renelle Gadon, a current M.Ed/Single-Subject Teaching Credential Candidate at the University of California, San Diego",
      "learnMoreURL": "https://www.eventbrite.com/e/a-world-of-possibilities-cs-speaker-series-tickets-201903838817?aff=ebdsoporgprofile"
    },
    {
      "imageURL": "./images/steamsymposium.png",
      "title": "Steam Symposium 2021",
      "description": "An online summer camp introducing basic programming logic skills and Scratch to 3rd-5th graders. It was created by a member and taught by several members. A total of __ participants came and created their own creative coding projects by the end of the camp.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/virtualCCFest.png",
      "title": "CCfest Speaker - Fall 2021",
      "description": "Online speaker series with a panel of computer science experts who shared their work and career paths. Featured Xanda Schofield, assistant professor of computer science at Harvey Mudd College, Mike Rotondo, software engineering manager on the GetCalFresh team, and Jose Guaro, a math and computer science major at UCSD.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/BAYCSC%20Hackathon%202.0%20Poster%20(Draft).png",
      "title": "Hackathon 2.0 - Summer 2021",
      "description": "Inclusive online hackathon designed to increase confidence for APCSA students. Featuring a Java workshop on optical illusions using codingrooms.com, keynote presentation on imposter syndrome, APCSA student panel, and a secret theme of “Avant Garde.” 80 registrants from across the country, working in teams on Discord.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/RAISE_Computer_Science_Program.jpg",
      "title": "RAISE summer program - Summer 2021",
      "description": "An online summer camp introducing basic programming logic skills and Scratch to 3rd-5th graders. It was created by a member and taught by several members. A total of __ participants came and created their own creative coding projects by the end of the camp.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/cstamicrobit.png",
      "title": "CSTA micro:bit Hackathon Partner - Summer 2021",
      "description": "CSTA Silicon Valley hosted an in person micro:bit hackathon in Palo Alto. BAYCSC volunteers served as teaching assistants supporting physical computing and growth mindset.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/cstahackathonkeynote.png",
      "title": "CSTA Teacher Hackathon Keynote Speaker - Spring 2021",
      "description": "The CSTA put on an online hackathon for teachers and BAYCSC members gave the keynote speech. The presentation shared insights from the previous hackathon and featured student projects and strategies for inclusion.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/BAYCSC%20Hackathon%201.0%20edited.png",
      "title": "Hackathon 1.0 - Spring 2021",
      "description": "Inclusive online hackathon designed as an introduction to programming for high school students. Featuring a workshop on data visualization using Python with turtle, keynote presentation by Blackbird Code CTO Bjorn Hansen, and a secret theme of “People of Earth”. 70 registrants from across the country, working in teams on Discord. Our first hackathon!!!",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/cs+careers.png",
      "title": "Speaker Series CS+Careers - Winter 2020",
      "description": "Online speaker series with a panel of computer science experts who shared their work and career paths. Featured Xanda Schofield, assistant professor of computer science at Harvey Mudd College, Mike Rotondo, software engineering manager on the GetCalFresh team, and Jose Guaro, a math and computer science major at UCSD.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/cs+socialgood.png",
      "title": "Speaker Series CS+Social Good - Summer 2020",
      "description": "Online speaker series with a panel of computer science experts who shared how their work has enhanced social good. Featured Pamela Fox, computer science content creator at Khan Academy, David Lee, assistant professor of computational media at UCSC, and Carl Shan, senior data scientist at Linkedin.",
      "learnMoreURL": "https://www.youtube.com/watch?v=MANu4bcGd6c&list=PLRRoBANOfV1hogjsK_gy-2VMhFoLfjgyf"
    },
    {
      "imageURL": "./images/trycs%20flyer%20edited.png",
      "title": "TryCS - Spring 2020",
      "description": "Introductory in-person CS workshop intended to introduce participants to programming. There were two workshops on Python and Java, as well as a keynote presentation by Dr. Em on coding and imposter syndrome, and a panel of four professionals from the tech industry. The workshop saw ~50 participants learn the basics of both languages and was successful",
      "learnMoreURL": "https://twitter.com/baycscouncil/status/1219462254623485953?cxt=HHwWgsCj_bSds-whAAAA"
    },
    {
      "imageURL": "./images/banner.jpg",
      "title": "AP Computer Science Study Sessions - Spring 2020",
      "description": "As COVID-19 stuck across the world, BAYCSC created an AP Computer Science Study Session to help qurantined students continue studying for the AP Exam in May.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/BelmontLibraryEvent.jpg",
      "title": "Scratchathon 2.0 - Fall 2019",
      "description": "It's the season for Thanksgiving and learning code! During the Thanksgiving break, BAYCSC hosted the second Scratchathon at Belmont Library. Even during Thanksgiving break, many kids came to the event and were very eager to learn, which we were so grateful to see. This time, kids developed interactive games, beautiful stories, and more. We are also super glad to see kids exploring and utilizing different features of Scratch that we did not teach. That's the spirit of coding!",
      "learnMoreURL": "https://www.youtube.com/watch?v=MANu4bcGd6c&list=PLRRoBANOfV1hogjsK_gy-2VMhFoLfjgyf"
    },
    {
      "imageURL": "./images/ScratchathonExample.jpg",
      "title": "Scratchathon 1.0 - Fall 2019",
      "description": "The first Scratchathon is hosted by BAYCSC at the Saratoga Library. Kids built projects using Scratch regarding the theme School of the Future. As a result, we received games, interactive stories, animation, motion detection projects, and more! We are so glad to see these kids expressing their imagination and creativity through programming, and we're even more thrilled to help them through this process. Remember, EVERYONE can be a programmer!",
      "learnMoreURL": "https://twitter.com/baycscouncil/status/1219462254623485953?cxt=HHwWgsCj_bSds-whAAAA"
    },
    {
      "imageURL": "./images/ScratchExample.jpg",
      "title": "Hack the Future - Summer 2019",
      "description": "BAYCSC mentored participants of Hack the Future 24 on June 22, 2019! Hack the Future 24 is a day-long hackathon hosted at Microsoft Sunnyvale where kids can participate in various computer science related activities.",
      "learnMoreURL": "https://www.eventbrite.com/o/redwood-city-downtown-library-24700165262"
    },
    {
      "imageURL": "./images/CodingIsFun.jpg",
      "title": "Coding is Fun - Summer 2019",
      "description": "Hosted at Redwood City Public Library, Coding is Fun! on July 15 is the first event BAYCSC has held. In this event, we desired to introduce important computer science concepts to all ages who are interested in learning computer science with the app Lightbot: Hour of Code.",
      "learnMoreURL": "https://www.youtube.com/watch?v=MANu4bcGd6c&list=PLRRoBANOfV1hogjsK_gy-2VMhFoLfjgyf"
    }
  ]