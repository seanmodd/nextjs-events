import PageContainer from 'components/PageContainer';
import Actions from 'components/Actions';
import styled from 'styled-components';
import { MyButton, MyDarkModeSwitch } from 'styles/theme';

export default function Home() {
  return (
    <PageContainer title="Next.js Chakra Starter">
      <Actions switchName="Second Page" />

      <MyButton>Me</MyButton>

    </PageContainer>
  );
}
