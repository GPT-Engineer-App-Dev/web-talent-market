import { Box, Button, Container, Heading, HStack, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const DEVELOPERS = [
  {
    name: "Emily Chen",
    photo: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGZlbWFsZSUyMHNvZnR3YXJlJTIwZGV2ZWxvcGVyJTIwaGVhZHNob3R8ZW58MHx8fHwxNzEzMDI2OTk4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "San Francisco, CA",
    specialties: "React, Node.js, TypeScript",
  },
  {
    name: "Liam Patel",
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBtYWxlJTIwc29mdHdhcmUlMjBkZXZlbG9wZXIlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTMwMjY5OTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
    location: "New York, NY",
    specialties: "Angular, .NET, C#",
  },
  {
    name: "Sofia Müller",
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnZXJtYW4lMjBmZW1hbGUlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGhlYWRzaG90fGVufDB8fHx8MTcxMzAyNjk5OXww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Berlin, Germany",
    specialties: "Vue.js, Laravel, PHP",
  },
  {
    name: "Marcus Johnson",
    photo: "https://images.unsplash.com/photo-1650954316166-c3361fefcc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBibGFjayUyMG1hbGUlMjBzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGhlYWRzaG90fGVufDB8fHx8MTcxMzAyNzAwMHww&ixlib=rb-4.0.3&q=80&w=1080",
    location: "Austin, TX",
    specialties: "React Native, GraphQL, PostgreSQL",
  },
];

const TESTIMONIALS = [
  {
    quote: "Particles helped us quickly find an experienced React developer to build our new web app. Highly recommend!",
    company: "TechCo",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29tcGFueSUyMGxvZ298ZW58MHx8fHwxNzEzMDI3MDAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    quote: "The talent on Particles is top-notch. We will definitely use them again for our future web projects.",
    company: "Innovate Inc.",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMGxvZ298ZW58MHx8fHwxNzEzMDI3MDAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    quote: "Particles made the process of hiring a remote developer so simple. Our new hire was able to hit the ground running from day one.",
    company: "GlobalCorp",
    logo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwY29tcGFueSUyMGxvZ298ZW58MHx8fHwxNzEzMDI3MDAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Box bg="gray.50">
      {/* Hero */}
      <Box bg="purple.600" color="white" py={24}>
        <Container maxW="container.lg">
          <Stack spacing={6} align="center" textAlign="center">
            <Heading as="h1" size="2xl">
              Find Top Web Development Talent
            </Heading>
            <Text fontSize="xl">Particles connects companies with experienced developers specializing in modern web technologies. Hire with confidence from our curated pool of remote-ready professionals.</Text>
            <Button colorScheme="white" color="purple.600" size="lg">
              View Developers
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Featured Developers */}
      <Container py={20} maxW="container.lg">
        <Stack spacing={16} align="center">
          <Box textAlign="center">
            <Heading size="xl" mb={2}>
              Featured Developers
            </Heading>
            <Text fontSize="lg">Discover some of the talented developers available on Particles</Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} w="full">
            {DEVELOPERS.map((dev) => (
              <HStack key={dev.name} spacing={6} bg="white" p={6} rounded="lg" boxShadow="md" w="full">
                <Image src={dev.photo} boxSize={24} objectFit="cover" rounded="full" />
                <Box>
                  <Heading size="lg">{dev.name}</Heading>
                  <Text color="gray.500" fontSize="lg">
                    {dev.location}
                  </Text>
                  <Text color="purple.600" fontWeight="medium">
                    {dev.specialties}
                  </Text>
                </Box>
              </HStack>
            ))}
          </SimpleGrid>

          <Button colorScheme="purple" size="lg" rightIcon={<FaArrowRight />}>
            View All Developers
          </Button>
        </Stack>
      </Container>

      {/* Testimonials */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={16}>
            <Box textAlign="center">
              <Heading size="xl" mb={2}>
                What Companies are Saying
              </Heading>
              <Text fontSize="lg">Particles has helped many companies find the web development talent they need</Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {TESTIMONIALS.map((item) => (
                <Box key={item.company} bg="white" p={6} rounded="lg" boxShadow="md">
                  <Box color="purple.600" mb={6}>
                    <FaQuoteLeft size={48} />
                  </Box>
                  <Text fontSize="lg" mb={6}>
                    {item.quote}
                  </Text>
                  <HStack spacing={4} align="center">
                    <Image src={item.logo} boxSize={12} objectFit="contain" />
                    <Text fontWeight="bold">{item.company}</Text>
                  </HStack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Container py={20} maxW="container.lg" textAlign="center">
        <Stack spacing={6}>
          <Heading size="xl">Ready to Find Your Next Web Developer?</Heading>
          <Text fontSize="lg">Browse our full list of talented developers and filter by technology, location, experience level and more. Hire with confidence through Particles.</Text>
          <Button colorScheme="purple" size="lg">
            View All Developers
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Index;
