import React from 'react';
import { Flex } from '@chakra-ui/react';
import {
    IoFilterCircleOutline,
    IoNotificationsOutline,
    IoVideocamOutline,
} from 'react-icons/io5'
import { GrAdd } from 'react-icons/gr'
import { BsArrowUpRightCircle, BsChatDots, BsChatDots as Gr } from 'react-icons/bs';
import { Icon } from '@chakra-ui/react';

const Icons:React.FC = () => {
    return (
        <Flex>
            <Flex 
              display={{base: 'none', md: 'flex'}} 
              align={'center'} 
              borderRight={'1px solid gray.200'}
            >
                <Flex 
                  mr={1.5} 
                  ml={1.5} 
                  padding={1}
                  cursor={'pointer'} 
                  borderRadius={4} 
                  _hover={{ bg: 'gray.200' }}
                >
                    <Icon as={BsArrowUpRightCircle} fontSize={20} />
                </Flex>
                <Flex 
                  mr={1.5} 
                  ml={1.5} 
                  padding={1} 
                  cursor={'pointer'} 
                  borderRadius={4} 
                  _hover={{ bg: 'gray.200' }}
                >
                    <Icon as={IoFilterCircleOutline} fontSize={22} />
                </Flex>
                <Flex 
                  mr={1.5} 
                  ml={1.5} 
                  padding={1} 
                  cursor={'pointer'} 
                  borderRadius={4} 
                  _hover={{ bg: 'gray.200' }}
                >
                    <Icon as={IoVideocamOutline} fontSize={22} />
                </Flex>
            <>
                <Flex 
                  mr={1.5} 
                  ml={1.5} 
                  padding={1} 
                  cursor={'pointer'} 
                  borderRadius={4} 
                  _hover={{ bg: 'gray.200' }}
                >
                    <Icon as={Gr} fontSize={20} />
                </Flex>
                <Flex 
                  mr={1.5} 
                  ml={1.5} 
                  padding={1} 
                  cursor={'pointer'} 
                  borderRadius={4} 
                  _hover={{ bg: 'gray.200' }}
                >
                    <Icon as={IoNotificationsOutline} fontSize={20} />
                </Flex>
                <Flex 
                  display={{ base: 'none', md: 'flex' }}
                  mr={1.5}
                  ml={1.5}
                  padding={1}
                  cursor={'pointer'}
                  borderRadius={4} 
                  _hover={{ bg: 'gray.200' }}
                >
                    <Icon as={GrAdd} fontSize={20} />
                </Flex>
            </>
            </Flex>
        </Flex>
    )
}
export default Icons;