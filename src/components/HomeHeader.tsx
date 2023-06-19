import { HStack, Heading, Text, VStack, Icon } from "native-base";
import {  MaterialIcons } from "@expo/vector-icons";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack pt={16} pb={5} px={8} bg="gray.600" alignItems="center">
            <UserPhoto 
                source={{
                    uri: "https://github.com/dyksonn.png"
                }}
                alt="Imagem User"
                size={16}
                mr={4}
            />
            <VStack flex={1}>
                <Text color="gray.100" fontSize="md" >Olá,</Text>
                <Heading color="gray.100" fontSize="md">Dykson</Heading>
            </VStack>

            <Icon 
                as={MaterialIcons}
                name="logout"
                size={7}
                color="gray.200"
            />
        </HStack>
    );
}