import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReviewCard from "./ReviewCard";
import "../styles/Reviews.css";

function chunkArray(array, size) {
  const results = [];
  for (let i = 0; i < array.length; i += size) {
    results.push(array.slice(i, i + size));
  }
  return results;
}

function Reviews() {
  const reviews = [
    {
      name: "Sonya B.",
      date: "July 6, 2025",
      stars: 5,
      review:
        "Nick was very knowledgeable and efficient with my roof repair. He is honest and his prices are very reasonable. You’ll be glad you contacted Red Fox Construction.",
    },
    {
      name: "Paul D.",
      date: "May 28, 2025",
      stars: 5,
      review:
        "Nick did an outstanding job of removing an old mock chimney, reworking the venting, patching the roof deck, flashing and re-shingling the area. He is honest, reliable and competent which is extremely hard to find today.",
    },
    {
      name: "Carrie M.",
      date: "April 8, 2025",
      stars: 5,
      review:
        "Nick did a fantastic job repairing a piece of flashing that had blown off from the gable fascia in the side of our second floor roof. I spoke with him at 10 pm Monday, and he was there Tuesday morning, barely taking a half-hour to make the repair. Our house is under contract, and Nick understood exactly what needed to be done so it would be acceptable to the appraiser and did so at an extremely reasonable price! Call Nick - you won't need to call anyone else!!",
    },
    {
      name: "David D.",
      date: "April 1, 2025",
      stars: 5,
      review:
        "Got the job done same day. Very knowledgeable and offered multiple options.",
    },
    {
      name: "Borya B.",
      date: "March 10, 2025",
      stars: 5,
      review:
        "I enjoyed working with Nick from Redfox. Friendly, knowledgeable, communicative, punctual, accurate. Highly recommend.",
    },
    {
      name: "Jake A.",
      date: "March 8, 2025",
      stars: 5,
      review:
        "Came out to help me with something small on short notice. Really nice guy.",
    },
    {
      name: "Joe D.",
      date: "January 30, 2025",
      stars: 5,
      review: "Great communication and very helpful",
    },
    {
      name: "Min C.",
      date: "October 16, 2024",
      stars: 5,
      review:
        "Great experience with Nick, great value and fixed my roof the next day.\n" +
        "\n" +
        "Definitely recommend!",
    },
    {
      name: "Kevin C.",
      date: "October 9, 2024",
      stars: 5,
      review: "Amazing work",
    },
    {
      name: "Caitlin M.",
      date: "September 23, 2024",
      stars: 5,
      review: "Great to work with. Really honest company.",
    },
    {
      name: "Mike B.",
      date: "September 19, 2024",
      stars: 5,
      review: "Arrived on time explained what he going to do to resolve issue",
    },
    {
      name: "Kyle M.",
      date: "September 6, 2024",
      stars: 5,
      review: "Nick was great and very easy to work with!",
    },
    {
      name: "Richard H.",
      date: "July 23, 2024",
      stars: 5,
      review: "5 stars says it all",
    },
    {
      name: "Ilian S.",
      date: "May 22, 2024",
      stars: 5,
      review:
        "Great to work with. Communication was top notch. Would recommend.",
    },
    {
      name: "Frank M.",
      date: "April 6, 2024",
      stars: 5,
      review:
        "I own a 150 year old home in Elgin. The pitch on the roof is steep. Difficult job. Nick's crew was phenomenal. The quality of work is exceptional. Pricing is fair and competitive. I am proud to highly recommend the best ROOFING contractor in the area.. Exemplary work ethic and professionalism .\n",
    },
    {
      name: "James D.",
      date: "March 15, 2024",
      stars: 5,
      review: "Awesomeness",
    },
    {
      name: "Michael S.",
      date: "March 7, 2024",
      stars: 5,
      review:
        "Nick was excellent to work with. Many of the roofers that came out tried to sell me on things I didn’t actually need. Nick was honest and priced competitively. In the roofing biz it can be hard to come across good people, but Nick is a genuine guy. I highly recommend him.",
    },
    {
      name: "Cherie J.",
      date: "March 5, 2024",
      stars: 1,
      review:
        "I thought we found our contractor. Personable. Professional. Boy, we're we wrong. Multiple mistakes along the road, but we worked with and supported Nick of Red Fox Roofing. He came to our home several times, and we always talked civilly about the numerous snafus encountered due to his company. Paid him when he asked for funds. We had questions about his final ask after we received a receipt that the roof was paid in full. We encountered a man with serious anger management issues who was so rude and angry, threatening to put a lien on our home. We were shocked. This was not the man we trusted with our home. This was not the man who sold us on his expertise. We did not deserve to be treated so rudely, so unprofessional. Save yourself the time and heartache. Find another roofer.",
    },
    {
      name: "Kelsey S.",
      date: "February 21, 2024",
      stars: 2,
      review:
        "Last year we started off well with Nick, and then he completely went MIA on us in August of 2023. I was pretty bummed because we really needed the help then. He re-iterated that they pride themselves on good reviews. The only reason I didn't give 1 star is because his intro to us and initial consultation went really well and was really helpful in guiding us through the process. It was the lack of follow-up (even after I reached out again and again) and completely dropping us that brought me down. I tried to give him the benefit of the doubt that we were getting into colder weather, hoping he'd reach back out, and still hadn't heard anything come September, October, etc..",
    },
    {
      name: "Todd C.",
      date: "February 3, 2024",
      stars: 5,
      review: "Great job and professional. Easy to work with.",
    },
    {
      name: "Balaji S.",
      date: "February 1, 2024",
      stars: 5,
      review:
        "Best work. Explained very clearly what the issue caused the leak. Replaced shingles, new sheets, and clean work. Gave a year warranty. If someone wants to fix the roof from the water leak, Nick is the guy to reach out to.",
    },
    {
      name: "Juan H.",
      date: "December 2, 2024",
      stars: 4,
      review:
        "Overall a good experience. Nick was prompt for the estimate and offered a discounted price. The workers were neat and professional. Didn't give 5 stars bc the work had to be delayed a week and I was left at home waiting for workers before I got a email explaining the situation. Would use again for other jobs.",
    },
    {
      name: "Craig I.",
      date: "November 8, 2023",
      stars: 5,
      review:
        "Nick was prompt and responsive... Two big ones for me when working with a contractor. He worked with me on the quote, showed up on time to do the work and got the job done. Simple and worry free! Highly recommended!",
    },
    { name: "Tom D.", date: "November 2, 2023", stars: 5, review: "Pleased" },
    {
      name: "Amy W.",
      date: "October 9, 2023",
      stars: 5,
      review:
        "Terrific job! Nick went above and beyond with his service and work. Any future needs I will definitely be reaching out to him again!",
    },
    {
      name: "Amanda T.",
      date: "September 12, 2023",
      stars: 5,
      review:
        "With the rain yesterday, there was a small leak at my rental. Nick was near by and went to check it out. Although I didn’t utilize his service, he was very honest and informative. I’ll be saving his number for future issues and services!",
    },
    {
      name: "Jean J.",
      date: "August 29, 2023",
      stars: 5,
      review:
        "Our experience with Nick from RedFox Roofing was wonderful. He responded to my initial message within minutes, and scheduled a visit right away. He was friendly, courteous, and conscientious, which are qualities that made him stand out among the many contractors and handymen we have met with recently, in the final stages of closing on our house sale. He was patient and thorough in explaining the work he would need to do to repair the missing/damaged shingles on our roof, and he took detailed close-up photos with his drone instead of from afar with a cellphone like the others when calculating his quote. He showed real pride and responsibility in his work quality when he explained that though he knew we would be moving in a month, that he still held himself to the highest standards for our buyer, even if he would never meet them. Nick was able to fit us into his schedule within the same week, and the color match is perfect; It looks good as new! We would definitely recommend this professional to anyone who needs roofing work!",
    },
    {
      name: "Joshua S.",
      date: "July 3, 2023",
      stars: 5,
      review: "Thank you for your service. Perfect timing",
    },
    {
      name: "Sushanth I.",
      date: "June 5, 2023",
      stars: 5,
      review:
        "Nick did a great job with installing the exhaust vents on the roof and then making sure it is well connected in the attic. Nick was insistent on getting the right shingles for the job, so that the vent work is neat and the shingles removed are replaced with matching ones. Fortunately, the shingles on the roof were fairly new and he was able to cut it cleanly and put it back. I am very happy with his work and would definitely recommend him to others.",
    },
    {
      name: "Mary L.",
      date: "April 4, 2023",
      stars: 5,
      review: "Great work and was very responsive to our needs. Very quick!",
    },
    {
      name: "Brian S.",
      date: "March 4, 2023",
      stars: 5,
      review:
        "He was always quick to respond and was able to schedule my repair next day! Unheard of in my experience. Other people quoted just a band aide cover up but he repaired the true root of the problem.\n" +
        "He was professional and knowledgeable. Clearly explained everything each step of the repair. Went above and beyond just the one spot I needed and tightened up a few other small repair spots.",
    },
    {
      name: "Rubina A.",
      date: "February 27, 2023",
      stars: 5,
      review: "Great work with warranty on time. Thank you Nick.",
    },
    {
      name: "Barry N.",
      date: "December 2, 2022",
      stars: 5,
      review:
        "Nick came out, game me a quote and once we settled on a color, scheduled the installation which went without any issues.",
    },
    {
      name: "Toby W",
      date: "December 2, 2022",
      stars: 5,
      review:
        "I was struggling to find any contractors locally willing to tackle a smaller job to replace 15-16 pieces of old hardy board siding. Found Nick from RedFox roofing on Thumb Tack. Nick came straight around to view the job and gave me a quote there and then. He arranged to complete the job within a few days. Carried out the job professionally and with quality. Explained everything he was doing. Even perfectly matched the replacement siding to the 20year old pieces.",
    },
    {
      name: "Dennis G.",
      date: "October 18, 2022",
      stars: 5,
      review:
        "Nick did a great job fixing our roof issue. He was prompt and was by the next day. Gave me a quote within the hour and was reasonably priced. He completed the repair two days later to my satisfaction. Nick provided videos on both the estimate and completion to show the work completed. Five stars in my book!",
    },
    {
      name: "Andrew W.",
      date: "October 17, 2022",
      stars: 5,
      review:
        "I had some a few areas of soffit damage due to animals. He knew what to do, was willing to take on the small job, and got to it quickly.",
    },
    {
      name: "Kim C.",
      date: "September 29, 2022",
      stars: 5,
      review:
        "Awesome company to work with. All around professionals! Quoted one day fixed 2 days after that! Would recommend to anyone needing roof repairs",
    },
    {
      name: "Jason R.",
      date: "August 29, 2022",
      stars: 4,
      review:
        "I appreciate how Nick was very responsive. He answered all our questions. He was able to diagnose the problem and provide a clear outline of the resolution. He was always great to work with and always followed up to make sure the work was done accurately.",
    },
    {
      name: "Daniel G",
      date: "August 29, 2022",
      stars: 5,
      review:
        "Nick was an excellent young man to work with. He explained everything, suggested options, and didn't try to sell more work than we needed. Showed a video of all the completed work since at my age of 72 years I didn't want to climb up on the roof to see the completed work. When it's time for the new roof, he will have my work. Since he finished the repair another major rain and wind storm came through. No more leaks. The storm confirmed he does excellent work.",
    },
    {
      name: "Sneha P.",
      date: "August 28, 2022",
      stars: 5,
      review:
        "Red fox roofing was very professional and showed us the final result after cleaning our gutters via video which I really appreciated!!",
    },
    {
      name: "Katie S.",
      date: "August 16, 2022",
      stars: 5,
      review:
        "He was best if three estimates- one eleven tries to sell me a membership for thousands of dollars to keep my roof in shape. Another kept offering me quick fixes $1000 here and there as my roof crumbled… (just at my deductible ) then Nick came and said he would talk to insurance for me and was able to make a case that quick fixes wouldn’t cut it. It was easy with him and work very professionally done.",
    },
    {
      name: "Dana C.",
      date: "August 8, 2022",
      stars: 5,
      review: "Job done right in a timely fashion",
    },
    {
      name: "Mary J.",
      date: "August 8, 2022",
      stars: 5,
      review: "I was also happy with the price and the work.",
    },
    {
      name: "Michael B.",
      date: "June 28, 2022",
      stars: 5,
      review:
        "It’s not often you find a service provider truly focused on service. Nick arrived to examine my roof damage exactly at the agreed on time. He prepared an estimate, procured the supplies and did the work within six hours. Very happy with the results!",
    },
    {
      name: "Geo P.",
      date: "May 26, 2022",
      stars: 5,
      review: "Very good experience",
    },
    {
      name: "Rob U.",
      date: "May 23, 2022",
      stars: 5,
      review: "Did a great job\nGot to my property in 3 hours\nThanks Nick",
    },
    {
      name: "Jason D.",
      date: "May 16, 2022",
      stars: 5,
      review: "They did a great job. Helpful and fast.",
    },
    {
      name: "Jim F.",
      date: "May 11, 2022",
      stars: 5,
      review:
        "Good guy, straightforward and did not want to do more than was necessary.",
    },
    { name: "Srini D.", date: "May 9, 2022", stars: 5, review: "Honest work" },
    {
      name: "Tim G.",
      date: "May 6, 2022",
      stars: 5,
      review:
        "Nick at RedFox responding quickly and was very professional. I would recommend that anyone requiring siding repair co tact Nick and RedFox.",
    },
    {
      name: "Lewis F.",
      date: "May 5, 2022",
      stars: 5,
      review:
        "Nick did an amazing job with my siding project. He was transparent and honest through every step of the process and completed the work to the highest quality. I look forward to reaching out to Nick and team for the next project!",
    },
    {
      name: "Anthony S.",
      date: "May 2, 2022",
      stars: 5,
      review:
        "I contacted RedFox Roofing for an emergency repair after strong storms tore off a couple of shingles. Nick responded immediately and came out to survey the damage. He also found some loose shingles that I wasn’t aware of. The next morning, Nick replaced the missing shingles and glued down the remaining loose ones and took a short video showing the repairs he had made. The work quality was excellent and his pricing reasonable. I definitely recommend RedFox and am happy to find a roofer who takes pride in his work.",
    },
    {
      name: "Samantha P.",
      date: "April 29, 2022",
      stars: 5,
      review:
        "Nick responded within minutes and worked around my schedule. He was on time, he gave me more than one option for my roof repair, and his pricing was as expected. He fixed some missing shingles in less than an hour. I would definitely recommend!",
    },
    {
      name: "Ken T.",
      date: "April 28, 2022",
      stars: 5,
      review:
        "We just had our roof put on and my wife and I couldn’t be happier! Our contractor made sure we felt comfortable during the process and the work was completed in a timely manner. I’ve already recommended Nick so several people I know",
    },
    {
      name: "Gina P.",
      date: "April 27, 2022",
      stars: 5,
      review:
        "Highly recommend RedFox Roofing! Very pleased with the quality and timely matter from start to finish. Competitive prices! Nick was personable and professional!",
    },
    {
      name: "Mark A.",
      date: "April 26, 2022",
      stars: 5,
      review:
        "So I had a a roofing issue with all the high winds a couple of weeks ago. Called Red Fox Roofing and one other company. Didn’t think I would hear back from them since it was late Friday and I thought it was a small repair. To my surprise Nick called me back and came out the next day. He took videos and pictures, then explained the problem, solution and the price. The price was very fair. If I did not fix the problem it would have turned into a larger problem. I trust Red Fox. Honest, reliable, professional and also it seems that Nick was motivated to helping me out.",
    },
    {
      name: "Scott S.",
      date: "April 25, 2022",
      stars: 5,
      review:
        "I had them do a Firestone silicone layover on my steel roof, and I came out great!",
    },
    {
      name: "Samantha P.",
      date: "April 25, 2022",
      stars: 5,
      review:
        "I had Nick come out and diagnose where a leak in my roof was coming from. I didn't know what was going on for over 2 years. Nick came out and found where the week was right away. He was able to put me on his repair schedule and get the work done very quickly!",
    },
  ];

  const reviewGroups = chunkArray(reviews, 3);

  return (
    <div className="reviews-container">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-baseline mb-4">
        <h2 className="m-0">Customer Reviews</h2>

        <a
          href="https://www.thumbtack.com/il/wonder-lake/roofing/redfox-construction/service/451776157132922882"
          target="_blank"
          rel="noopener noreferrer"
          className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-5"
        >
          Add a Review
        </a>
      </div>

      {/* Carousel */}
      <Carousel interval={null} indicators={false} className="custom-carousel">
        {reviewGroups.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="g-3">
              {group.map((review, index) => (
                <Col md={4} key={index}>
                  <ReviewCard {...review} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Reviews;
