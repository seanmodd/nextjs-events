import Link from 'next/link';
import { useRouter } from 'next/router';
import PageContainer from 'components/PageContainer';
import Actions from 'components/Actions';
import styled from 'styled-components';
import { MyButton, MyDarkModeSwitch } from 'styles/theme';
import { Box, Button, HStack, VStack } from '@chakra-ui/react';

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
  return (
    <>
      <PageContainer title="Next.js Chakra Starter">
        <HStack py={15}>
          <VisitEvents /> <AllEvents />
        </HStack>
        <Actions switchName="Second Page" />
      </PageContainer>
    </>
  );
}
