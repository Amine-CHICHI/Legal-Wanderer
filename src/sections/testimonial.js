/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from "theme-ui";
import SectionHeader from "components/section-header";
import Rating from "components/rating";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";

import Avatar1 from "assets/testimonial/avatar1.png";
import Avatar2 from "assets/testimonial/avatar2.png";
import Avatar3 from "assets/testimonial/avatar3.png";
import Avatar4 from "assets/testimonial/avatar4.png";

const data = [
  {
    id: 1,
    title: "Small business owner",
    description:
      "AI'm constantly navigating through various legal hurdles. Legal Wanderer has been an indispensable tool for me. It's like having a legal advisor in my pocket, ready to answer all my questions quickly and effectively. This app has saved me countless hours and a lot of money in legal fees.",
    avatar: Avatar1,
    name: "Omar B",
    designation: "@omar.ben",
    review: 5,
  },
  {
    id: 2,
    title: "Freelancer contracts",
    description:
      "Legal Wanderer has been a game-changer for handling my freelance contracts. I used to feel overwhelmed by the legal jargon, but now I get clear, concise answers that help me understand my rights and obligations. It's incredibly empowering to have such a resource at my fingertips!",
    avatar: Avatar2,
    name: "Fouad Bennani",
    designation: "@fouad.ben",
    review: 5,
  },
  {
    id: 3,
    title: "Real Estate Investor",
    description:
      "I've used Legal Wanderer to resolve several issues related to property laws. The app not only provides answers but also guides me to the appropriate resources for further action. It's fast, reliable, and extremely user-friendly, making it perfect for someone like me who needs quick legal insights.",
    avatar: Avatar3,
    name: "Yassine",
    designation: "@yassine.abd",
    review: 5,
  },
  {
    id: 4,
    title: "Graduate Student",
    description:
      "Being a law student, I find Legal Wanderer incredibly helpful for quick clarifications and studying different legal scenarios. It's like a study buddy that's available 24/7, enhancing my learning and comprehension in a way that textbooks can't.",
    avatar: Avatar4,
    name: "Aymen",
    designation: "@aymen.den",
    review: 4,
  },
  {
    id: 5,
    title: "Human Resources Manager",
    description:
      "Legal Wanderer has revolutionized how we handle employment laws at our company. Whenever an employee has a question about their rights or company policies, I turn to this app. It’s been crucial in helping us maintain compliance with state and federal laws, ensuring we treat our employees fairly and legally.",
    avatar: Avatar4,
    name: "Tarek",
    designation: "@Tarek.hil",
    review: 4,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: "section.testimonial" }}>
      <Container>
        <SectionHeader slogan="Testimonial" title="Meet Users Satisfaction" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={`testimonial--key${item.id}`}>
              <Rating rating={item.review} />
              <Heading as="h3" sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Client Image" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>{item.designation}</Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 35px",
      "30px 25px 35px",
      "30px 20px 35px",
      "35px 30px 40px 40px",
      "30px 30px 35px",
      "35px 30px 40px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex",
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0,
        },
      },
      ".star": {
        color: "yellow",
        mr: "1px",
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px",
      },
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
};
