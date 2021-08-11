import {
  Box,
  HStack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;
  return (
    <List>
      {/* Render list of comments - fetched from API */}
      {items.map((item) => (
        <>
          <ListItem key={item._id}>
            <HStack
              borderWidth={4}
              borderRadius="20px"
              borderColor="gray.300"
              my={50}
              p={10}
            >
              <ListIcon as={CheckCircleIcon} color="green.500" />
              <p>{item.text}</p>
              <VStack align="right" w="100%">
                <Text>By: {item.name}</Text>
                <p>{item.email}</p>
              </VStack>
            </HStack>
          </ListItem>
        </>
      ))}
    </List>
  );
}

export default CommentList;
