import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { ProjectAreaWrapperColumns } from "./home/style";

const About = () => {
  return (
    <ProjectAreaWrapperColumns>
      <Text as="h1" type="heading2" color="grey4">
        About Me
      </Text>
      <Text type="body3" color="grey2">
        Hello, I'm Glayson Cardoso, a developer in training, passionate about
        technology and innovation. I'm currently attending Kenzie Academy, where
        I have the opportunity to delve deep into the world of programming and
        learn about the most current and relevant technologies in the market.
        During my time at Kenzie, I've acquired solid skills in various
        technologies, including JavaScript, Python, HTML, CSS, SQL, and more.
        I've participated in challenging team projects, which allowed me to hone
        my collaboration, communication, and problem-solving skills. I have a
        particular passion for back-end development and I love the complexity
        and problem-solving that comes with it. Working with server logic,
        databases, and system architecture is something that truly motivates me.
        I firmly believe that programming is not just about writing code, but
        also about solving problems and providing value. I'm always ready to
        take on new challenges and I'm excited to continue my learning journey.
        I'm looking forward to applying the skills I've acquired so far to real
        and meaningful projects. Feel free to explore my portfolio and learn a
        little more about the projects I've been working on. If you want to
        discuss a project opportunity, collaboration, or just want to say hi,
        don't hesitate to contact me!
      </Text>
    </ProjectAreaWrapperColumns>
  );
};

export default About;
