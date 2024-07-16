import { Flex,  Link, Box, Container, Text } from "@radix-ui/themes";
import { FaExternalLinkAlt } from "react-icons/fa";



export default function Header() {
    return (
        <Box  width={"100%"}>
            <Box py="20px" px={"20px"} style={{background:"#f5f5f5", minHeight:"60px"}}>
                <Flex width={"100%"} direction={"row"} align={"center"} justify={"between"}>
                    <Box></Box>
                    {/* support */}
                    <Link href={"https://www.google.com"} target={"_blank"}>
                        <Flex gap={"10px"} direction={"row"} align={"center"}>
                            <Text>Support</Text>
                            <FaExternalLinkAlt size={"14px"} />
                        </Flex>
                    </Link>

                </Flex>
                    
            </Box>
        </Box>

    );
}
