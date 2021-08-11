import Link from 'next/link';
import { jsx, css } from '@emotion/react';
import { useRouter } from 'next/router';
import PageContainer from 'components/PageContainer';
import Actions from 'components/Actions';
import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import {
  MyButton,
  MyDarkModeSwitch,
  BadgeButton,
  LoadButton,
} from 'styles/theme';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Textarea,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import NewsletterRegistration from 'components/input/newsletter-registration';

const VisitEvents = () => (
  <Link href="/myindex">
    <a>
      <MyButton>Visit The Events App!</MyButton>
    </a>
  </Link>
);
const AllEvents = () => (
  <Link href="/events">
    <a>
      <MyButton>See ALL Events!</MyButton>
    </a>
  </Link>
);

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const [feedbackItems, setFeedbackItems] = useState([]);

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
    emailInputRef.current.value = '';
    feedbackInputRef.current.value = '';

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((res) => res.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = {
    light: '#bbbfff86',
    dark: '#001db1',
  };
  const color = {
    light: 'black',
    dark: 'white',
  };

  return (
    <>
      <PageContainer title="Next.js Chakra Starter">
        <NewsletterRegistration />
        <HStack py={15}>
          <VisitEvents /> <AllEvents />
        </HStack>
        <Actions switchName="Second Page" />
        <VStack spacing={1}>
          <form onSubmit={submitFormHandler}>
            <VStack align="center" justify="center" spacing={15}>
              <Heading color={color[colorMode]}>Sample form </Heading>
              <Input placeholder="email" ref={emailInputRef} />
              <Input placeholder="feedback" ref={feedbackInputRef} />

              <BadgeButton bg={bgColor[colorMode]} color={color[colorMode]}>
                Submit
              </BadgeButton>
              <br />
            </VStack>
          </form>
          <LoadButton
            onClick={loadFeedbackHandler}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
          >
            List All Feedback
          </LoadButton>
          <ul>
            {feedbackItems.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </VStack>
      </PageContainer>
    </>
  );
}
