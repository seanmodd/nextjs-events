import { useState } from 'react';
import { VStack, Heading, HStack } from '@chakra-ui/react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState(null);
  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }
  return (
    <>
      <VStack align="center" justify="center" h="75vh">
        <Heading>Feedback List</Heading>
        {feedbackData && <Heading>{feedbackData.email}</Heading>}
        <ul>
          {props.feedbackItems.map((item) => (
            <>
              <HStack>
                <li key={item.id}>{item.text}</li>
                <button
                  style={{
                    borderColor: 'red',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    margin: '25px',
                    padding: '7px',
                    borderRadius: '15px',
                  }}
                  onClick={loadFeedbackHandler.bind(null, item.id)}
                >
                  ShowDetails!!!
                </button>
              </HStack>
            </>
          ))}
        </ul>
      </VStack>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
}

export default FeedbackPage;
