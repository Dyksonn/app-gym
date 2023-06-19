import { HStack, Heading, Text, Icon, VStack, Image } from "native-base";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {}

export function ExerciseCard({ ...rest } : Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg="gray.500" p={2} pr={4} rounded="md" mb={3} alignItems="center">
                <Image 
                    source={{ uri: "http://github.com/dyksonn.png"}}
                    alt="Img"
                    w={16}
                    h={16}
                    rounded="md"
                    mr={4}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading color="white" fontSize="lg">Puxada frontal</Heading>
                    <Text color="gray.200" fontSize="sm" mt={1} numberOfLines={2}>3 séries x 12 repetições</Text>
                </VStack>

                <Icon 
                    as={Entypo}
                    name="chevron-thin-right"
                    color="gray.300"
                />
            </HStack>
        </TouchableOpacity>
    );
}